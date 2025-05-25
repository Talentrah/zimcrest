// server/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mailgun from 'mailgun-js';
import multer from 'multer';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Test endpoint
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit');
  res.json({ 
    message: 'API is working!', 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  });
});


// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'));
    }
  }
});

// Internship Application form submission endpoint
app.post('/api/internship-apply', upload.single('resume'), async (req: any, res: any) => {
  try {
    console.log('Internship API hit - Received form data:', req.body);
    console.log('File received:', req.file ? { name: req.file.originalname, size: req.file.size } : 'No file');
    
    const {
      fullName,
      email,
      phone,
      education,
      graduationDate,
      internshipArea,
      startDate,
      coverLetter,
      hearAbout
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !internshipArea || !coverLetter) {
      console.log('Missing required fields');
      return res.status(400).json({ 
        error: 'Missing required fields',
        received: { fullName: !!fullName, email: !!email, internshipArea: !!internshipArea, coverLetter: !!coverLetter }
      });
    }

    // Check environment variables
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const fromEmail = process.env.MAILGUN_FROM_EMAIL;
    const recipient = process.env.EMAIL_RECIPIENT;

    console.log('Environment check:', {
      hasApiKey: !!apiKey,
      hasDomain: !!domain,
      hasFromEmail: !!fromEmail,
      hasRecipient: !!recipient
    });

    // If Mailgun is not configured, just log and return success (for testing)
    if (!apiKey || !domain) {
      console.log('⚠️  Mailgun not configured - running in test mode');
      console.log('Internship application data received:', { 
        fullName, email, phone, education, graduationDate, 
        internshipArea, startDate, coverLetter, hearAbout,
        hasResume: !!req.file
      });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Your internship application has been received! (Test mode - add Mailgun credentials to send actual emails)',
      });
    }

    // Configure Mailgun
    const mg = mailgun({
      apiKey: apiKey,
      domain: domain
    });

    const file = req.file;
    
    // Create email data
    const emailData: any = {
      from: fromEmail ? `${fullName} <${fromEmail}>` : `ZimCrest Internships <noreply@${domain}>`,
      to: recipient || email,
      subject: `ZimCrest Internship Application - ${internshipArea} - ${fullName}`,
      text: `
New Internship Application Received

Full Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Education: ${education}
Graduation Date: ${graduationDate}
Internship Area: ${internshipArea}
Preferred Start Date: ${startDate}
How They Heard About Us: ${hearAbout}

Cover Letter:
${coverLetter}

${file ? `Resume/CV: ${file.originalname} (attached)` : 'No resume attached'}
      `,
      html: `
        <h3>New Internship Application - ZimCrest Technologies</h3>
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #333; margin-top: 0;">Applicant Information</h4>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Graduation Date:</strong> ${graduationDate}</p>
            <p><strong>Internship Area:</strong> ${internshipArea}</p>
            <p><strong>Preferred Start Date:</strong> ${startDate}</p>
            <p><strong>How they heard about us:</strong> ${hearAbout}</p>
            ${file ? `<p><strong>Resume/CV:</strong> ${file.originalname} (attached)</p>` : '<p><strong>Resume/CV:</strong> Not provided</p>'}
          </div>
          
          <div style="margin: 20px 0;">
            <h4 style="color: #333;">Cover Letter</h4>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px; border: 1px solid #e9ecef;">
              ${coverLetter.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the ZimCrest Technologies internship application form.
          </p>
        </div>
      `
    };

    // Add attachment if file exists
    if (file) {
      emailData.attachment = new mg.Attachment({
        data: file.buffer,
        filename: file.originalname,
        contentType: file.mimetype
      });
    }

    console.log('Attempting to send internship application email via Mailgun...');
    console.log('Email config:', {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      hasAttachment: !!file
    });

    try {
      // Send email using Mailgun (matching your working pattern)
      const response = await new Promise<mailgun.messages.SendResponse>((resolve, reject) => {
        mg.messages().send(emailData, (error: any, body: any) => {
          if (error) {
            console.error('Mailgun send error:', error);
            reject(error);
          } else {
            console.log('Mailgun send success:', body);
            resolve(body);
          }
        });
      });

      console.log('Internship application email sent successfully:', response);

      // Send confirmation email to applicant (optional)
      try {
        const confirmationData = {
          from: fromEmail ? `ZimCrest Technologies <${fromEmail}>` : `ZimCrest <noreply@${domain}>`,
          to: email,
          subject: 'Application Received - ZimCrest Internship Program',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #007bff;">Thank You for Your Application!</h2>
              
              <p>Dear ${fullName},</p>
              
              <p>We have successfully received your internship application for the <strong>${internshipArea}</strong> position.</p>
              
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">Application Summary:</h3>
                <ul style="color: #666;">
                  <li><strong>Position:</strong> ${internshipArea}</li>
                  <li><strong>Preferred Start Date:</strong> ${startDate}</li>
                  <li><strong>Application Date:</strong> ${new Date().toLocaleDateString()}</li>
                </ul>
              </div>
              
              <p>Our team will review your application and contact you within 2 weeks. If you have any questions, please don't hesitate to reach out.</p>
              
              <p>Best regards,<br>The ZimCrest Internship Team</p>
              
              <hr style="margin: 20px 0;">
              <p style="color: #999; font-size: 12px;">
                This is an automated confirmation email from ZimCrest Technologies.
              </p>
            </div>
          `
        };

        await new Promise<mailgun.messages.SendResponse>((resolve, reject) => {
          mg.messages().send(confirmationData, (error: any, body: any) => {
            if (error) {
              console.error('Confirmation email error (non-critical):', error);
              resolve(body); // Don't fail the main request
            } else {
              console.log('Confirmation email sent successfully');
              resolve(body);
            }
          });
        });
      } catch (confirmError) {
        console.log('Confirmation email failed (non-critical):', confirmError);
      }

      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: 'Your internship application has been submitted successfully! We\'ll get back to you within 2 weeks.',
      });

    } catch (mgError) {
      console.error('Mailgun error:', mgError);
      return res.status(500).json({
        error: 'Failed to send application via mail service',
        details: mgError instanceof Error ? mgError.message : String(mgError)
      });
    }

  } catch (error) {
    console.error('Server error processing internship application:', error);
    return res.status(500).json({
      error: 'Server error processing application',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});


// Consultation form submission endpoint
app.post('/api/send-email', async (req: any, res: any) => {
  try {
    console.log('Email API hit - Received form data:', req.body);
    const { name, email, company, phone, projectType, message } = req.body;
   
    // Validate required fields
    if (!name || !email || !projectType || !message) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check environment variables
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const fromEmail = process.env.MAILGUN_FROM_EMAIL;
    const recipient = process.env.EMAIL_RECIPIENT;

    console.log('Environment check:', {
      hasApiKey: !!apiKey,
      hasDomain: !!domain,
      hasFromEmail: !!fromEmail,
      hasRecipient: !!recipient
    });

    // If Mailgun is not configured, just log and return success (for testing)
    if (!apiKey || !domain) {
      console.log('⚠️  Mailgun not configured - running in test mode');
      console.log('Form data received:', { name, email, company, phone, projectType, message });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Your consultation request has been received! (Test mode - add Mailgun credentials to send actual emails)',
      });
    }

    // Configure Mailgun
    const mg = mailgun({
      apiKey: apiKey,
      domain: domain
    });
   
    // Create email data
    const emailData = {
      from: fromEmail ? `${name} <${fromEmail}>` : `${name} <noreply@${domain}>`,
      to: recipient || email,
      subject: `ZimCrest Consultation Request: ${projectType}`,
      text: `
      Name: ${name}
      Email: ${email}
      ${company ? `Company: ${company}` : ''}
      ${phone ? `Phone: ${phone}` : ''}
      Project Type: ${projectType}

      Message:
      ${message}
      `,
      html: `
    <h3>New Consultation Request - ZimCrest Technologies</h3>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Project Type:</strong> ${projectType}</p>
      <h4>Message:</h4>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        This email was sent from the ZimCrest Technologies consultation form.
      </p>
    </div>
          `
    };

    console.log('Attempting to send email via Mailgun...');
   
    try {
      // Send email using Mailgun
      const response = await new Promise<mailgun.messages.SendResponse>((resolve, reject) => {
        mg.messages().send(emailData, (error, body) => {
          if (error) {
            console.error('Mailgun send error:', error);
            reject(error);
          } else {
            console.log('Mailgun send success:', body);
            resolve(body);
          }
        });
      });
     
      console.log('Email sent successfully:', response);
     
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: 'Your consultation request has been sent successfully! We\'ll get back to you within 24 hours.',
      });
    } catch (mgError) {
      console.error('Mailgun error:', mgError);
      return res.status(500).json({
        error: 'Failed to send email via mail service',
        details: mgError instanceof Error ? mgError.message : String(mgError)
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      error: 'Server error processing request',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

// Hire Talent form submission endpoint
app.post('/api/hire-talent', async (req: any, res: any) => {
   console.log('Received request body:', req.body); 
  const {
    companyName,
    companySize,
    location,
    contactName,
    contactEmail,
    contactPhone,
    talentType,
    timeline,
    budgetRange,
    projectDetails
  } = req.body;

  if (!contactName || !contactEmail || !talentType || !projectDetails) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const fromEmail = process.env.MAILGUN_FROM_EMAIL;
  const recipient = process.env.EMAIL_RECIPIENT;

  if (!apiKey || !domain) {
    console.log(' Mailgun not configured. Running in test mode.');
    return res.status(200).json({
      success: true,
      message: 'Talent request received (test mode - email not sent).'
    });
  }

  const mg = mailgun({ apiKey, domain });

  const emailData = {
    from: fromEmail ? `${contactName} <${fromEmail}>` : `ZimCrest <noreply@${domain}>`,
    to: recipient || contactEmail,
    subject: `ZimCrest Talent Request - ${talentType}`,
    text: `
Company Name: ${companyName}
Company Size: ${companySize}
Location: ${location}
Contact Name: ${contactName}
Contact Email: ${contactEmail}
Contact Phone: ${contactPhone}
Talent Needed: ${talentType}
Timeline: ${timeline}
Budget Range: ${budgetRange}

Project Details:
${projectDetails}
    `,
    html: `
      <h3>New Talent Request - ZimCrest Technologies</h3>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Size:</strong> ${companySize}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Contact:</strong> ${contactName}</p>
      <p><strong>Email:</strong> ${contactEmail}</p>
      <p><strong>Phone:</strong> ${contactPhone}</p>
      <p><strong>Talent Needed:</strong> ${talentType}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Budget:</strong> ${budgetRange}</p>
      <h4>Project Details</h4>
      <p>${projectDetails.replace(/\n/g, '<br>')}</p>
      <hr/>
      <p style="color:#999;font-size:12px;">This email was sent from the Hire Talent form on ZimCrest.</p>
    `
  };

  try {
    const response = await new Promise<mailgun.messages.SendResponse>((resolve, reject) => {
      mg.messages().send(emailData, (error, body) => {
        if (error) reject(error);
        else resolve(body);
      });
    });

    return res.status(200).json({
      success: true,
      message: 'Talent request sent successfully!'
    });
  } catch (err) {
    console.error('Mailgun error:', err);
    return res.status(500).json({ error: 'Email sending failed', details: err });
  }
});

// Training Course Registration form submission endpoint
app.post('/api/register', async (req: any, res: any) => {
  try {
    console.log('📨 Registration API hit - Received form data:', req.body);

    const {
      fullName,
      email,
      phone,
      nationality,
      course,
      startDate,
      experience,
      goals,
      hearAbout,
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !course) {
      console.log('❌ Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check environment variables
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const fromEmail = process.env.MAILGUN_FROM_EMAIL;
    const recipient = process.env.EMAIL_RECIPIENT;

    console.log('🔧 Environment check:', {
      hasApiKey: !!apiKey,
      hasDomain: !!domain,
      hasFromEmail: !!fromEmail,
      hasRecipient: !!recipient,
    });

    // If Mailgun is not configured, just log and return success (for testing)
    if (!apiKey || !domain) {
      console.log('⚠️ Mailgun not configured - running in test mode');
      console.log('Form data received:', { fullName, email, course });
      return res.status(200).json({
        success: true,
        message: 'Your registration has been received! (Test mode - add Mailgun credentials to send actual emails)',
      });
    }

    // Configure Mailgun
    const mg = mailgun({ apiKey, domain });

    // Prepare email content
    const emailData = {
      from: fromEmail ? `${fullName} <${fromEmail}>` : `${fullName} <noreply@${domain}>`,
      to: recipient || email,
      subject: `New Course Registration - ${course}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        ${nationality ? `Nationality: ${nationality}` : ''}
        Course: ${course}
        Start Date: ${startDate}
        Experience: ${experience}
        Learning Goals: ${goals}
        Heard About Us: ${hearAbout}
      `,
      html: `
        <h3>New Course Registration - ZimCrest Academy</h3>
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${nationality ? `<p><strong>Nationality:</strong> ${nationality}</p>` : ''}
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Start Date:</strong> ${startDate}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Goals:</strong> ${goals}</p>
          <p><strong>Heard About Us From:</strong> ${hearAbout}</p>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the ZimCrest course registration form.
          </p>
        </div>
      `,
    };

    console.log('🚀 Attempting to send email via Mailgun...');

    try {
      const response = await new Promise<mailgun.messages.SendResponse>((resolve, reject) => {
        mg.messages().send(emailData, (error, body) => {
          if (error) {
            console.error('❌ Mailgun send error:', error);
            reject(error);
          } else {
            console.log('✅ Mailgun send success:', body);
            resolve(body);
          }
        });
      });

      return res.status(200).json({
        success: true,
      });
    } catch (mgError) {
      console.error('❗ Mailgun error:', mgError);
      return res.status(500).json({
        error: 'Failed to send email via mail service',
        details: mgError instanceof Error ? mgError.message : String(mgError),
      });
    }

  } catch (error) {
    console.error('❗ Server error:', error);
    return res.status(500).json({
      error: 'Server error processing request',
      details: error instanceof Error ? error.message : String(error),
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on http://localhost:${PORT}`);
  console.log(`📧 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔑 Mailgun configured: ${!!(process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN)}`);
});
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

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (_req: any, file: any, cb: any) => {
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

// Helper function to send emails
const sendEmail = async (emailData: any) => {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;

  if (!apiKey || !domain) {
    throw new Error('Mailgun not configured');
  }

  const mg = mailgun({ apiKey, domain });

  return new Promise<mailgun.messages.SendResponse>((resolve, reject) => {
    mg.messages().send(emailData, (error: any, body: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

/**
 * NOTE: On sandbox domain, contactEmail must be added to Mailgun authorized recipients
 * @remarks
 * Mailgun sandbox domains require all recipient emails to be authorized before sending.
 */


// Internship Application form submission endpoint
app.post('/api/internship-apply', upload.single('resume'), async (req: any, res: any) => {
  try {
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
      return res.status(400).json({ 
        error: 'Missing required fields'
      });
    }

    const fromEmail = process.env.MAILGUN_FROM_EMAIL;
    const recipient = process.env.EMAIL_RECIPIENT;
    const domain = process.env.MAILGUN_DOMAIN;
    const file = req.file;

    // Send notification email to admin
    const adminEmailData: any = {
      from: fromEmail ? `${fullName} <${fromEmail}>` : `ZimCrest Internships <noreply@${domain}>`,
      to: recipient || 'admin@zimcrest.com',
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

    if (file) {
      adminEmailData.attachment = {
        data: file.buffer,
        filename: file.originalname,
        contentType: file.mimetype
      };
    }

    // Send admin notification
    await sendEmail(adminEmailData);

    // Send confirmation email to applicant
    const confirmationEmailData = {
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

    await sendEmail(confirmationEmailData);

    return res.status(200).json({ 
      success: true, 
      message: 'Your internship application has been submitted successfully! We\'ll get back to you within 2 weeks.'
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Failed to process application',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

// Consultation form submission endpoint
app.post('/api/send-email', async (req: any, res: any) => {
  try {
    const { name, email, company, phone, projectType, message } = req.body;
   
    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const fromEmail = process.env.MAILGUN_FROM_EMAIL;
    const recipient = process.env.EMAIL_RECIPIENT;
    const domain = process.env.MAILGUN_DOMAIN;

    // Send notification email to admin
    const adminEmailData = {
      from: fromEmail ? `${name} <${fromEmail}>` : `${name} <noreply@${domain}>`,
      to: recipient || 'admin@zimcrest.com',
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

    // Send admin notification
    await sendEmail(adminEmailData);

    // Send confirmation email to user
    const confirmationEmailData = {
      from: fromEmail ? `ZimCrest Technologies <${fromEmail}>` : `ZimCrest <noreply@${domain}>`,
      to: email,
      subject: 'Consultation Request Received - ZimCrest Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Thank You for Your Consultation Request!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your consultation request for <strong>${projectType}</strong> services.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Request Summary:</h3>
            <ul style="color: #666;">
              <li><strong>Service Type:</strong> ${projectType}</li>
              ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
              <li><strong>Request Date:</strong> ${new Date().toLocaleDateString()}</li>
            </ul>
          </div>
          
          <p>Our team will review your request and get back to you within 24 hours with next steps.</p>
          
          <p>Best regards,<br>The ZimCrest Team</p>
          
          <hr style="margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            This is an automated confirmation email from ZimCrest Technologies.
          </p>
        </div>
      `
    };

    await sendEmail(confirmationEmailData);

    return res.status(200).json({ 
      success: true, 
      message: 'Your consultation request has been sent successfully! We\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Failed to process consultation request',
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

// Hire Talent form submission endpoint
app.post('/api/hire-talent', async (req: any, res: any) => {
  try {
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

    const fromEmail = process.env.MAILGUN_FROM_EMAIL;
    const recipient = process.env.EMAIL_RECIPIENT;
    const domain = process.env.MAILGUN_DOMAIN;

    // Send notification email to admin
    const adminEmailData = {
      from: fromEmail ? `${contactName} <${fromEmail}>` : `ZimCrest <noreply@${domain}>`,
      to: recipient || 'admin@zimcrest.com',
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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
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
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${projectDetails.replace(/\n/g, '<br>')}
          </div>
          <hr style="margin: 20px 0;">
          <p style="color:#666;font-size:12px;">This email was sent from the Hire Talent form on ZimCrest.</p>
        </div>
      `
    };

    // Send admin notification
    await sendEmail(adminEmailData);

    // Send confirmation email to client
    const confirmationEmailData = {
      from: fromEmail ? `ZimCrest Technologies <${fromEmail}>` : `ZimCrest <noreply@${domain}>`,
      to: contactEmail,
      subject: 'Talent Request Received - ZimCrest Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Thank You for Your Talent Request!</h2>
          
          <p>Dear ${contactName},</p>
          
          <p>We have received your request for <strong>${talentType}</strong> talent.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Request Summary:</h3>
            <ul style="color: #666;">
              <li><strong>Talent Type:</strong> ${talentType}</li>
              <li><strong>Timeline:</strong> ${timeline}</li>
              <li><strong>Budget Range:</strong> ${budgetRange}</li>
              <li><strong>Request Date:</strong> ${new Date().toLocaleDateString()}</li>
            </ul>
          </div>
          
          <p>Our talent acquisition team will review your requirements and connect you with suitable candidates within 48 hours.</p>
          
          <p>Best regards,<br>The ZimCrest Talent Team</p>
          
          <hr style="margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            This is an automated confirmation email from ZimCrest Technologies.
          </p>
        </div>
      `
    };

    await sendEmail(confirmationEmailData);

    return res.status(200).json({
      success: true,
      message: 'Talent request sent successfully! We\'ll connect you with suitable candidates within 48 hours.'
    });

  } catch (error) {
    return res.status(500).json({ 
      error: 'Failed to process talent request', 
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

// Training Course Registration form submission endpoint
app.post('/api/register', async (req: any, res: any) => {
  try {
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
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const fromEmail = process.env.MAILGUN_FROM_EMAIL;
    const recipient = process.env.EMAIL_RECIPIENT;
    const domain = process.env.MAILGUN_DOMAIN;

    // Send notification email to admin
    const adminEmailData = {
      from: fromEmail ? `${fullName} <${fromEmail}>` : `${fullName} <noreply@${domain}>`,
      to: recipient || 'admin@zimcrest.com',
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
      `
    };

    // Send admin notification
    await sendEmail(adminEmailData);

    // Send confirmation email to student
    const confirmationEmailData = {
      from: fromEmail ? `ZimCrest Academy <${fromEmail}>` : `ZimCrest Academy <noreply@${domain}>`,
      to: email,
      subject: 'Course Registration Confirmed - ZimCrest Academy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Welcome to ZimCrest Academy!</h2>
          
          <p>Dear ${fullName},</p>
          
          <p>Thank you for registering for the <strong>${course}</strong> course. Your registration has been confirmed!</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Registration Details:</h3>
            <ul style="color: #666;">
              <li><strong>Course:</strong> ${course}</li>
              <li><strong>Preferred Start Date:</strong> ${startDate}</li>
              <li><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</li>
            </ul>
          </div>
          
          <p>Our training coordinator will contact you within 3 business days to provide course materials and schedule details.</p>
          
          <p>We're excited to have you join our learning community!</p>
          
          <p>Best regards,<br>The ZimCrest Academy Team</p>
          
          <hr style="margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            This is an automated confirmation email from ZimCrest Academy.
          </p>
        </div>
      `
    };

    await sendEmail(confirmationEmailData);

    return res.status(200).json({
      success: true,
      message: 'Registration confirmed! Our training coordinator will contact you within 3 business days.'
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Failed to process registration',
      details: error instanceof Error ? error.message : String(error),
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
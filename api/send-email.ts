import type { VercelRequest, VercelResponse } from '@vercel/node';
import mailgun from 'mailgun-js';

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY!,
  domain: process.env.MAILGUN_DOMAIN!,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, company, phone, projectType, message } = req.body;

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailData = {
    from: `${name} <${process.env.MAILGUN_FROM_EMAIL || email}>`,
    to: process.env.EMAIL_RECIPIENT!,
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
<h3>New Consultation Request</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
<p><strong>Project Type:</strong> ${projectType}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    const response = await mg.messages().send(emailData);
    return res.status(200).json({ success: true, message: 'Email sent successfully', id: response.id });
  } catch (err: any) {
    console.error('Mailgun error:', err);
    return res.status(500).json({ error: 'Failed to send email via mail service', details: err.message });
  }
}

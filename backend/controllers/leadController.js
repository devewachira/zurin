import Lead from '../models/Lead.js';
import Subscriber from '../models/Subscriber.js';
import transporter from '../utils/mailer.js';
import dotenv from 'dotenv';

dotenv.config();

export const createLead = async (req, res) => {
  const { firstName, lastName, email, phone, services, message } = req.body;

  if (!email || !firstName || !lastName) {
    return res.status(400).json({ message: 'Required fields are missing' });
  }

  try {
    // 1. Save Lead
    await Lead.create({
      firstName,
      lastName,
      email,
      phone,
      services,
      message
    });

    // 2. Check and Auto-Subscribe
    const existingSubscriber = await Subscriber.findOne({ where: { email } });
    if (!existingSubscriber) {
      await Subscriber.create({ email });
      
      // Send Welcome Email in background
      transporter.sendMail({
        from: `"Mwangi Chris" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Welcome to Mwangi Chris - Zurinty Marketing!',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
            <div style="background-color: #0b1b2a; padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: #10b981; margin: 0; font-size: 28px;">Welcome to Zurinty</h1>
            </div>
            <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <p style="font-size: 18px; font-weight: bold;">Hello ${firstName}!</p>
              <p>Thanks for reaching out to us! We've also added you to our newsletter so you can stay updated with our latest digital strategies.</p>
              <h2 style="color: #0b1b2a; border-bottom: 2px solid #10b981; padding-bottom: 5px; margin-top: 30px;">Who We Are</h2>
              <p>Based in Nairobi, Kenya, <strong>Zurinty Marketing</strong> is a full-service creative agency dedicated to helping brands stand out in the digital landscape.</p>
              <div style="margin-top: 40px; text-align: center;">
                <a href="https://zurinty.com/portfolio" style="background-color: #10b981; color: #0b1b2a; padding: 15px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block;">View Our Portfolio</a>
              </div>
              <p style="margin-top: 40px; font-size: 14px; color: #666; text-align: center;">
                © ${new Date().getFullYear()} Zurinty Marketing. Nairobi, Kenya.
              </p>
            </div>
          </div>
        `,
      }).catch(err => console.error('Auto-subscribe email error:', err));
    }

    // 3. Send Notification Email to Admin in background
    transporter.sendMail({
      from: `"Zurinty Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Requested Services:</strong> ${services && services.length > 0 ? services.join(', ') : 'None selected'}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    }).catch(err => console.error('Admin contact notification email error:', err));

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact email or saving to DB:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
};

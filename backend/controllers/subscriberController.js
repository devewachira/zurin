import Subscriber from '../models/Subscriber.js';
import transporter from '../utils/mailer.js';
import dotenv from 'dotenv';

dotenv.config();

export const subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const existing = await Subscriber.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: 'You are already subscribed!' });
    }

    await Subscriber.create({ email });

    // Send emails in the background to respond faster to the user
    transporter.sendMail({
      from: `"Zurinty System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed to the newsletter: ${email}`,
      html: `<p>A new user has subscribed to the newsletter: <strong>${email}</strong></p>`,
    }).catch(err => console.error('Admin subscription email error:', err));

    transporter.sendMail({
      from: `"Zurinty Marketing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Zurinty Marketing!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <div style="background-color: #0b1b2a; padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #10b981; margin: 0; font-size: 28px;">Welcome to Zurinty</h1>
          </div>
          <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <p style="font-size: 18px; font-weight: bold;">Hello!</p>
            <p>Thanks for subscribing to our newsletter. We're thrilled to have you with us!</p>
            <h2 style="color: #0b1b2a; border-bottom: 2px solid #10b981; padding-bottom: 5px; margin-top: 30px;">Who We Are</h2>
            <p>Based in Nairobi, Kenya, <strong>Zurinty Marketing</strong> is a full-service creative agency dedicated to helping brands stand out in the digital landscape.</p>
            <div style="margin-top: 40px; text-align: center;">
              <a href="https://zurinty.com/contact" style="background-color: #10b981; color: #0b1b2a; padding: 15px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; display: inline-block;">Request a Free Quote</a>
            </div>
            <p style="margin-top: 40px; font-size: 14px; color: #666; text-align: center;">
              © ${new Date().getFullYear()} Zurinty Marketing. Nairobi, Kenya.
            </p>
          </div>
        </div>
      `,
    }).catch(err => console.error('User welcome email error:', err));

    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error sending email or saving to DB:', error);
    res.status(500).json({ message: 'Failed to subscribe. Please try again later.' });
  }
};

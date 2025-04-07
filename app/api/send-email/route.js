import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate input fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required!" }),
        { status: 400 }
      );
    }

    // Set up email transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g., your Gmail address
        pass: process.env.EMAIL_PASS, // e.g., your app-specific password
      },
    });

    // Email HTML content – customize as needed
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; background-color: #ffffff; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #fe424d 0%, #ff7b54 100%); color: white; text-align: center; padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="font-size: 28px; margin: 0; font-weight: 700;">New Portfolio Contact</h1>
          <p style="font-size: 16px; margin: 10px 0 0;">You received a new message from your portfolio website.</p>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="text-align: center; font-size: 22px; color: #fe424d; margin-bottom: 20px;">Contact Details</h2>
          <div style="background-color: #f9f9f9; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
              <tbody>
                <tr>
                  <td style="font-weight: bold; padding: 8px 0;">Name:</td>
                  <td style="text-align: right;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; padding: 8px 0;">Email:</td>
                  <td style="text-align: right;">
                    <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: bold; padding: 8px 0;">Subject:</td>
                  <td style="text-align: right;">${subject}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 style="font-size: 18px; color: #333333; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #f9f9f9; border-radius: 10px; padding: 15px;">
            <p style="font-size: 16px; color: #555555; line-height: 1.6; margin: 0;">
              ${message}
            </p>
          </div>
          <p style="text-align: center; font-size: 16px; margin: 30px 0 0;">Reply by clicking the button below:</p>
          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:${email}" style="background-color: #fe424d; color: white; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 16px; font-weight: bold; display: inline-block;">
              Reply to ${name}
            </a>
          </div>
        </div>
        <div style="background-color: #f4f4f4; text-align: center; padding: 20px;">
          <p style="font-size: 14px; margin: 0;">Best regards,</p>
          <p style="font-size: 14px; font-weight: bold; margin: 5px 0 0;">Your Portfolio</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "nora@example.com", // Replace with Nora's actual email address
      subject: `New Portfolio Contact from ${name}`,
      html: emailHTML,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Check server logs." }),
      { status: 500 }
    );
  }
}

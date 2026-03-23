const nodemailer = require("nodemailer");
require("dotenv").config();

// ✅ Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // 16-char App Password
  },
});

let enquiryInsert = async (req, res) => {
  const { name, email, phone, callback, service } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ success: false, message: "Name and email are required." });
  }

  try {
    // ✅ Send email to YOU (admin)
    await transporter.sendMail({
      from: `"Aussie Growth Media" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // sends to your own inbox
      subject: `🔔 New Enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#111;color:#fff;padding:32px;border-radius:12px;">
          <h2 style="color:#e36a2e;">New Enquiry — Aussie Growth Media</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid #333;">
              <td style="padding:10px 0;color:#999;width:140px;">Name</td>
              <td style="padding:10px 0;font-weight:bold;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #333;">
              <td style="padding:10px 0;color:#999;">Email</td>
              <td style="padding:10px 0;">${email}</td>
            </tr>
            <tr style="border-bottom:1px solid #333;">
              <td style="padding:10px 0;color:#999;">Phone</td>
              <td style="padding:10px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr style="border-bottom:1px solid #333;">
              <td style="padding:10px 0;color:#999;">Callback Time</td>
              <td style="padding:10px 0;">${callback || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#999;">Service</td>
              <td style="padding:10px 0;color:#e36a2e;font-weight:bold;">${service || "Not selected"}</td>
            </tr>
          </table>
        </div>
      `,
    });

    // ✅ Send auto-reply to the user
    await transporter.sendMail({
      from: `"Aussie Growth Media" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for your enquiry, ${name}! 🇦🇺`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#111;color:#fff;padding:32px;border-radius:12px;">
          <h2 style="color:#e36a2e;">G'day ${name}! 👋</h2>
          <p style="color:#ccc;line-height:1.6;">
            Thanks for reaching out to <strong style="color:#fff;">Aussie Growth Media</strong>.
            ${service ? `We've received your enquiry regarding <strong style="color:#e36a2e;">${service}</strong> and` : "We've received your enquiry and"}
            our team will get back to you within <strong>2 business hours</strong>.
          </p>
          <div style="margin:24px 0;padding:16px;background:#1a1a1a;border-left:3px solid #e36a2e;border-radius:4px;">
            <p style="color:#999;margin:0 0 6px;font-size:13px;">Visit us at</p>
            <a href="https://aussiegrowthmedia.com.au" style="color:#e36a2e;">aussiegrowthmedia.com.au</a>
          </div>
          <p style="color:#555;font-size:12px;margin-top:32px;">Aussie Growth Media · Helping Aussie businesses grow online</p>
        </div>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { enquiryInsert };

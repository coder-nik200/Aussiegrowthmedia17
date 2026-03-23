const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 1. Admin gets full lead details
async function sendAdminNotification({
  name,
  email,
  phone,
  callback,
  service,
}) {
  await transporter.sendMail({
    from: `"Aussie Growth Media" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🔔 New Enquiry from ${name} — ${service || "General"}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#111;color:#fff;padding:32px;border-radius:12px;">
        <h2 style="color:#e36a2e;">New Lead — Aussie Growth Media</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="border-bottom:1px solid #333;">
            <td style="padding:10px 0;color:#999;width:160px;">Name</td>
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
}

// 2. Auto-reply to the user
async function sendUserAutoReply({ name, email, service }) {
  await transporter.sendMail({
    from: `"Aussie Growth Media" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thanks for your enquiry, ${name}! 🇦🇺`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#111;color:#fff;padding:32px;border-radius:12px;">
        <h2 style="color:#e36a2e;">G'day ${name}! 👋</h2>
        <p style="color:#ccc;line-height:1.6;">
          Thanks for reaching out to <strong style="color:#fff;">Aussie Growth Media</strong>.
          We've received your enquiry
          ${service ? `regarding <strong style="color:#e36a2e;">${service}</strong>` : ""}
          and one of our team will get back to you within <strong>2 business hours</strong>.
        </p>
        <div style="margin:24px 0;padding:16px;background:#1a1a1a;border-left:3px solid #e36a2e;border-radius:4px;">
          <p style="color:#999;margin:0 0 6px;font-size:13px;">Visit us at</p>
          <a href="https://aussiegrowthmedia.com.au" style="color:#e36a2e;">
            aussiegrowthmedia.com.au
          </a>
        </div>
        <p style="color:#555;font-size:12px;margin-top:32px;">
          Aussie Growth Media · Helping Aussie businesses grow online
        </p>
      </div>
    `,
  });
}

// 3. Lead alert when a service is selected
async function sendLeadNotification({ name, email, phone, callback, service }) {
  await transporter.sendMail({
    from: `"Aussie Growth Media Leads" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🚀 Hot Lead: ${name} is interested in ${service}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#111;color:#fff;padding:32px;border-radius:12px;">
        <h2 style="color:#e36a2e;">Hot Lead Alert 🔥</h2>
        <p><strong style="color:#fff;">${name}</strong> wants to know about 
           <strong style="color:#e36a2e;">${service}</strong></p>
        <p>📧 ${email}</p>
        <p>📞 ${phone || "N/A"}</p>
        <p>🕐 Best callback time: ${callback || "Not specified"}</p>
        <p style="color:#e36a2e;font-weight:bold;margin-top:16px;">Follow up ASAP!</p>
      </div>
    `,
  });
}

module.exports = {
  sendAdminNotification,
  sendUserAutoReply,
  sendLeadNotification,
};

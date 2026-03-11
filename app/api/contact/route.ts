import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  purpose: string;
  message: string;
  recaptchaToken?: string;
}

const purposeLabels: Record<string, string> = {
  informasi: "Informasi Umum",
  kerjasama: "Kerja Sama / Partnership",
  konsultasi: "Konsultasi Proyek",
  dukungan: "Dukungan Teknis",
  karir: "Karir & Lowongan",
  lainnya: "Lainnya",
};

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, purpose, message, recaptchaToken } = body;

    // --- reCAPTCHA v3 verification ---
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { success: false, error: "Verifikasi reCAPTCHA gagal. Silakan coba lagi." },
          { status: 400 }
        );
      }

      const recaptchaResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
        }
      );

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success) {
        console.warn("reCAPTCHA failed:", recaptchaData);
        return NextResponse.json(
          { success: false, error: "Verifikasi reCAPTCHA gagal. Silakan centang ulang captcha." },
          { status: 403 }
        );
      }
    }

    // --- Server-side validation ---
    const errors: string[] = [];

    if (!name || !name.trim()) {
      errors.push("Nama wajib diisi");
    }

    if (!email || !email.trim()) {
      errors.push("Email wajib diisi");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Format email tidak valid");
    }

    if (!subject || !subject.trim()) {
      errors.push("Subject wajib diisi");
    }

    if (!purpose) {
      errors.push("Tujuan pesan wajib dipilih");
    }

    if (!message || !message.trim()) {
      errors.push("Pesan wajib diisi");
    } else if (message.trim().length < 10) {
      errors.push("Pesan minimal 10 karakter");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: errors.join(", ") },
        { status: 400 }
      );
    }

    // --- SMTP configuration ---
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const smtpTo = process.env.SMTP_TO;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !smtpTo) {
      console.error("SMTP environment variables are not configured");
      return NextResponse.json(
        { success: false, error: "Konfigurasi email server belum tersedia. Silakan hubungi administrator." },
        { status: 500 }
      );
    }

    // --- Create Nodemailer transporter ---
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465 (SSL), false for port 587 (STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // --- Build email content ---
    const purposeLabel = purposeLabels[purpose] || purpose;

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 24px; border-radius: 12px 12px 0 0;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">📩 Pesan Baru dari Website</h2>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 120px; vertical-align: top;">Nama</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Tujuan</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${purposeLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Pesan</td>
              <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
          Email ini dikirim otomatis dari form kontak website KreasiTech
        </p>
      </div>
    `;

    const textContent = `Pesan Baru dari Website\n\nNama: ${name}\nEmail: ${email}\nTujuan: ${purposeLabel}\nSubject: ${subject}\n\nPesan:\n${message}`;

    // --- Send email ---
    await transporter.sendMail({
      from: `"Website KreasiTech" <${smtpFrom}>`,
      to: smtpTo,
      replyTo: email,
      subject: `[${purposeLabel}] ${subject}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: "Email berhasil dikirim" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengirim email. Silakan coba lagi nanti." },
      { status: 500 }
    );
  }
}

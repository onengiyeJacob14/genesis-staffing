import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: FormDataEntryValue | null) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const formType = String(formData.get("formType") || "");
    const senderEmail = String(formData.get("email") || "").trim();

    if (!senderEmail) {
      return NextResponse.redirect(new URL("/contact?sent=0", req.url), 303);
    }

    let subject = "";
    let html = "";

    if (formType === "request") {
      const organisation = escapeHtml(formData.get("organisation"));
      const contactName = escapeHtml(formData.get("contactName"));
      const phone = escapeHtml(formData.get("phone"));
      const email = escapeHtml(formData.get("email"));
      const shiftDetails = escapeHtml(formData.get("shiftDetails"));

      subject = "New Staff Request - Genesis Website";
      html = `
        <h2>New Staff Request</h2>
        <p><strong>Organisation / Care home:</strong> ${organisation}</p>
        <p><strong>Contact name:</strong> ${contactName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Shift details:</strong><br/>${shiftDetails.replaceAll("\n", "<br/>")}</p>
      `;
    } else if (formType === "apply") {
      const fullName = escapeHtml(formData.get("fullName"));
      const phone = escapeHtml(formData.get("phone"));
      const email = escapeHtml(formData.get("email"));
      const role = escapeHtml(formData.get("role"));
      const message = escapeHtml(formData.get("message"));

      subject = "New Job Application - Genesis Website";
      html = `
        <h2>New Application</h2>
        <p><strong>Full name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role applying for:</strong> ${role}</p>
        <p><strong>Short message:</strong><br/>${message.replaceAll("\n", "<br/>")}</p>
      `;
    } else {
      return NextResponse.redirect(new URL("/contact?sent=0", req.url), 303);
    }

    await resend.emails.send({
      from:"Genesis Staffing <hello@mail.genesisstaffingsolutions.co.uk>",
      to: ["genesisstaffingltd@gmail.com"],
      replyTo: senderEmail,
      subject,
      html,
    });

    const redirectUrl =
      formType === "request"
        ? new URL("/contact?sent=1#request", req.url)
        : new URL("/contact?sent=1#apply", req.url);

    return NextResponse.redirect(redirectUrl, 303);
  } catch {
    return NextResponse.redirect(new URL("/contact?sent=0", req.url), 303);
  }
}
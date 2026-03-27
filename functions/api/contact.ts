interface Env {
  RESEND_API_KEY: string;
  NOTIFICATION_EMAIL: string;
  CLIENT_NAME: string;
}

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  projectType?: string;
  subcategory?: string;
  message: string;
  constructionEstimate?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": new URL(context.request.url).origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body = (await context.request.json()) as ContactPayload;

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return Response.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400, headers: corsHeaders }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return Response.json(
        { success: false, error: "Invalid email address." },
        { status: 400, headers: corsHeaders }
      );
    }

    const clientName = context.env.CLIENT_NAME || "Client Website";
    const notificationEmail = context.env.NOTIFICATION_EMAIL;
    const resendApiKey = context.env.RESEND_API_KEY;

    if (!notificationEmail || !resendApiKey) {
      console.error("Missing NOTIFICATION_EMAIL or RESEND_API_KEY");
      return Response.json(
        { success: false, error: "Server configuration error." },
        { status: 500, headers: corsHeaders }
      );
    }

    const projectDetails = [
      body.projectType && `Project Type: ${body.projectType}`,
      body.subcategory && `Scope: ${body.subcategory}`,
      body.address && `Project Address: ${body.address}`,
      body.phone && `Phone: ${body.phone}`,
      body.constructionEstimate === "yes" &&
        "Construction Estimate: Requested",
    ]
      .filter(Boolean)
      .join("\n");

    const textContent = [
      `New lead from ${clientName}`,
      "",
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      projectDetails,
      "",
      `Message:`,
      body.message,
    ].join("\n");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1c1917; padding: 32px; border-bottom: 2px solid #c8a55a;">
          <h1 style="color: #c8a55a; font-size: 20px; margin: 0;">New Website Lead</h1>
          <p style="color: #a8a29e; font-size: 14px; margin: 8px 0 0 0;">${clientName}</p>
        </div>
        <div style="background: #292524; padding: 32px; color: #e7e5e4;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #a8a29e; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #fafaf9;">${escapeHtml(body.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a8a29e; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(body.email)}" style="color: #c8a55a;">${escapeHtml(body.email)}</a></td>
            </tr>
            ${body.phone ? `<tr><td style="padding: 8px 0; color: #a8a29e; vertical-align: top;">Phone</td><td style="padding: 8px 0; color: #fafaf9;"><a href="tel:${escapeHtml(body.phone)}" style="color: #c8a55a;">${escapeHtml(body.phone)}</a></td></tr>` : ""}
            ${body.address ? `<tr><td style="padding: 8px 0; color: #a8a29e; vertical-align: top;">Project Address</td><td style="padding: 8px 0; color: #fafaf9;">${escapeHtml(body.address)}</td></tr>` : ""}
            ${body.projectType ? `<tr><td style="padding: 8px 0; color: #a8a29e; vertical-align: top;">Project Type</td><td style="padding: 8px 0; color: #fafaf9;">${escapeHtml(body.projectType)}</td></tr>` : ""}
            ${body.subcategory ? `<tr><td style="padding: 8px 0; color: #a8a29e; vertical-align: top;">Scope</td><td style="padding: 8px 0; color: #fafaf9;">${escapeHtml(body.subcategory)}</td></tr>` : ""}
            ${body.constructionEstimate === "yes" ? `<tr><td style="padding: 8px 0; color: #a8a29e; vertical-align: top;">Construction Estimate</td><td style="padding: 8px 0; color: #c8a55a; font-weight: 600;">Requested</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #44403c;">
            <p style="color: #a8a29e; margin: 0 0 8px 0; font-size: 13px;">MESSAGE</p>
            <p style="color: #fafaf9; white-space: pre-wrap; line-height: 1.6; margin: 0;">${escapeHtml(body.message)}</p>
          </div>
        </div>
        <div style="background: #1c1917; padding: 16px 32px; text-align: center;">
          <p style="color: #78716c; font-size: 12px; margin: 0;">Hit reply to respond directly to this lead.</p>
        </div>
      </div>`;

    const resendPayload = {
      from: `${clientName} Leads <leads@submissions.socalwebexperts.com>`,
      to: [notificationEmail],
      reply_to: body.email,
      subject: `New Lead: ${body.name} — ${clientName}`,
      text: textContent,
      html: htmlContent,
    };

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resendPayload),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, errorData);
      return Response.json(
        { success: false, error: "Failed to send notification." },
        { status: 502, headers: corsHeaders }
      );
    }

    const result = await resendResponse.json();
    return Response.json(
      { success: true, id: (result as { id: string }).id },
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500, headers: corsHeaders }
    );
  }
};

export const onRequestOptions: PagesFunction = async (context) => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": new URL(context.request.url).origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

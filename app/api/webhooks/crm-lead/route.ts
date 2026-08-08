import { NextResponse } from "next/server";
import { sendMetaCrmLeadEvent } from "../../../../lib/meta";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Support standard webhooks or flexible CRM payloads
    const leadId = body.leadId || body.lead_id || body.id;
    const email = body.email;
    const phone = body.phone || body.phoneNumber || body.phone_number;
    const crmName = body.crmName || body.source || "Your CRM";

    if (!leadId) {
      return NextResponse.json({ error: "Missing lead ID" }, { status: 400 });
    }

    const result = await sendMetaCrmLeadEvent({
      leadId,
      email,
      phone,
      crmName,
    });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("CRM Webhook Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

# Logicleads Meta Ads Launch Playbook

## 1. Website and Tracking Setup
- Deploy the new landing page at `/business-websites`.
- Set these environment variables before testing Meta events:
  - `NEXT_PUBLIC_META_PIXEL_ID`
  - `META_PIXEL_ID`
  - `META_ACCESS_TOKEN`
  - `META_TEST_EVENT_CODE` for test traffic only
  - `NEXT_PUBLIC_BASE_URL`
- Test these actions after deploy:
  - Open the landing page and verify `PageView`.
  - Confirm `ViewContent` fires on `/business-websites`.
  - Click any WhatsApp CTA and confirm `WhatsAppClick`.
  - Submit the landing-page form and confirm `Lead` appears in Meta Test Events and in your business email.
  - Submit the project form and contact form once each to confirm attribution data and deduplicated lead events.

## 2. Campaign Structure in Ads Manager
- Create `1` main campaign only for the first 30 days.
- Preferred setup:
  - Use `Leads` objective if your account offers WhatsApp as the destination.
  - If not, use `Engagement` with `Messaging apps` and optimise for conversations.
- Cold targeting for phase 1:
  - Country: `Nigeria`
  - Language: `English`
  - Age: `24-44`
  - Locations: Lagos, Abuja FCT, Port Harcourt, Enugu, Ibadan, Aba, Benin, Owerri, Uyo
  - Use broad targeting first. Do not split the small budget into many interest stacks.

## 3. Budget Rules
- Total budget: `₦100,000`
- Day-1 split:
  - `₦70,000` cold prospecting
  - `₦15,000` creative refresh reserve
  - `₦15,000` retargeting reserve
- Do not launch retargeting until you have:
  - at least `500` landing-page visitors, or
  - at least `50` warm engagers
- Optimization rules:
  - Pause any ad that spends `₦8,000-₦10,000` without `1` qualified WhatsApp conversation.
  - Replace any ad below `1%` CTR after roughly `1,500-2,000` impressions.
  - If leads are cheap but weak, tighten the offer and WhatsApp screening before changing targeting.

## 4. Ad Creative Set
- Ad 1: founder selfie video
  - Hook: "If your business still relies only on Instagram or word of mouth, your website may be costing you sales."
  - Promise: "We build conversion-focused business websites in 14-21 days."
  - CTA: "Send us a WhatsApp message for a quote."
- Ad 2: static proof ad
  - Show one portfolio result and the line `Starting from ₦500k`.
  - Body angle: trust, professionalism, enquiry flow.
- Ad 3: carousel ad
  - Use 3-5 screenshots from real projects.
  - Card themes: home page, mobile view, service page, contact flow, trust section.
- Ad 4: pain-point ad
  - Angle: businesses lose trust when there is no proper website or the current one looks outdated.
  - CTA: "Chat on WhatsApp for a quote."

## 5. WhatsApp Business Setup
- Labels:
  - `new`
  - `qualified`
  - `proposal`
  - `won`
  - `lost`
- Welcome message:
  - `Thanks for messaging Logic Leads. We build conversion-focused websites for businesses. Reply with your business type and we’ll guide the next step.`
- Away message:
  - `Thanks for reaching out. We’ve received your message and will reply as soon as possible.`
- Quick replies:
  - `/qualify`
    - `Thanks for your interest. To quote correctly, please reply with: 1) business type, 2) new website or redesign, 3) target outcome, 4) budget band, 5) preferred timeline.`
  - `/proof`
    - `Happy to share relevant examples. Tell us your industry and we’ll send the closest portfolio references.`
  - `/proposal`
    - `You’re a good fit for the next step. We’ll send a tailored quote/proposal within 24 hours.`

## 6. Daily Operating Rhythm
- Response-time target: under `5 minutes` during working hours.
- Day 1-3 checks:
  - Verify routing into email and WhatsApp.
  - Confirm people understand the offer without asking basic clarification questions.
  - Watch cost per conversation and message quality.
- Day 7:
  - Keep the best `2` ads.
  - Refresh the weakest creatives from the reserve budget.
- Day 14:
  - Decide whether retargeting has enough audience volume to turn on.
- Sales follow-up sequence for qualified leads:
  - immediate reply
  - proof in first chat
  - proposal within `24 hours`
  - follow-up at `24 hours`, `72 hours`, and `7 days`

## 7. Success Thresholds
- Cost per started WhatsApp conversation: `<= ₦2,500`
- Cost per qualified lead: `<= ₦8,000-₦12,000`
- Qualified lead rate: `>= 25%`
- Primary 30-day target:
  - `1` closed deal, or
  - at least `2` proposal-stage opportunities

## 8. Expansion Rule
- Stay in Nigeria until you get two straight weeks of stable qualified leads.
- Only then test Ghana and Kenya.
- Do not test the US or Canada on this budget.

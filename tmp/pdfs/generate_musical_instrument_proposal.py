from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[2]
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT_PATH = OUTPUT_DIR / "musical-instrument-ecommerce-proposal.pdf"
LOGO_PATH = ROOT / "docs" / "assets" / "logic-leads-logo.png"


def money(value: str) -> str:
    return f"<font color='#D9FF5A'><b>{value}</b></font>"


def build_styles():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Body",
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#352C40"),
            alignment=TA_LEFT,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Muted",
            parent=styles["Body"],
            fontSize=9.5,
            textColor=colors.HexColor("#6B6276"),
            leading=13,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Label",
            parent=styles["Body"],
            fontName="Helvetica-Bold",
            fontSize=8.5,
            textColor=colors.HexColor("#6B6276"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="HeroTitle",
            parent=styles["Body"],
            fontName="Helvetica-Bold",
            fontSize=21,
            leading=25,
            textColor=colors.white,
        )
    )
    styles.add(
        ParagraphStyle(
            name="HeroText",
            parent=styles["Body"],
            fontSize=10,
            leading=14,
            textColor=colors.HexColor("#EEE7F8"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="SectionTitle",
            parent=styles["Body"],
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=18,
            textColor=colors.HexColor("#17111F"),
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CardTitle",
            parent=styles["Body"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=15,
            textColor=colors.HexColor("#17111F"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="Small",
            parent=styles["Body"],
            fontSize=9,
            leading=12,
        )
    )
    return styles


def card(title, body, styles, bg="#F7F2FB", border="#E7DFF0"):
    table = Table(
        [[Paragraph(f"<b>{title}</b>", styles["CardTitle"]), Paragraph(body, styles["Body"])]],
        colWidths=[58 * mm, 104 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor(bg)),
                ("BOX", (0, 0), (-1, -1), 1, colors.HexColor(border)),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    return table


def bullet_rows(items, styles, columns=2):
    rows = []
    row = []
    for item in items:
        row.append(
            Table(
                [[Paragraph(item, styles["Body"])]],
                colWidths=[84 * mm],
                style=TableStyle(
                    [
                        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#FBF9FD")),
                        ("BOX", (0, 0), (-1, -1), 1, colors.HexColor("#E7DFF0")),
                        ("LEFTPADDING", (0, 0), (-1, -1), 10),
                        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                        ("TOPPADDING", (0, 0), (-1, -1), 8),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                    ]
                ),
            )
        )
        if len(row) == columns:
            rows.append(row)
            row = []
    if row:
        while len(row) < columns:
            row.append("")
        rows.append(row)
    table = Table(rows, colWidths=[85 * mm] * columns, hAlign="LEFT", spaceBefore=4, spaceAfter=6)
    table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")]))
    return table


def build_pdf():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=12 * mm,
        bottomMargin=14 * mm,
    )

    story = []

    logo = Image(str(LOGO_PATH), width=32 * mm, height=10 * mm)
    topbar = Table(
        [
            [logo, Paragraph("<b>CLIENT PROPOSAL</b>", styles["Label"])],
        ],
        colWidths=[122 * mm, 45 * mm],
    )
    topbar.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#20152D")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 16),
                ("RIGHTPADDING", (0, 0), (-1, -1), 16),
                ("TOPPADDING", (0, 0), (-1, -1), 12),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
            ]
        )
    )
    story.append(topbar)

    hero_body = Table(
        [
            [
                Paragraph(
                    "E-commerce Website Proposal for a Musical Instrument Store",
                    styles["HeroTitle"],
                )
            ],
            [
                Paragraph(
                    "A focused online store setup to help the client showcase instruments, accept orders, and manage product updates with a smooth mobile-friendly shopping experience.",
                    styles["HeroText"],
                )
            ],
        ],
        colWidths=[167 * mm],
    )
    hero_body.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#20152D")),
                ("LEFTPADDING", (0, 0), (-1, -1), 16),
                ("RIGHTPADDING", (0, 0), (-1, -1), 16),
                ("TOPPADDING", (0, 0), (-1, -1), 14),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 16),
            ]
        )
    )
    story.append(hero_body)

    meta_data = [
        ("Prepared for", "Salt Musical"),
        ("Date", "19 July 2026"),
        ("Timeline", "1 week"),
        ("Quotation", "NGN 250,000"),
    ]
    meta_cells = []
    for label, value in meta_data:
        meta_cells.append(
            Table(
                [[Paragraph(label.upper(), styles["Label"])], [Paragraph(f"<b>{value}</b>", styles["Body"])]],
                colWidths=[39 * mm],
                style=TableStyle(
                    [
                        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F7F2FB")),
                        ("BOX", (0, 0), (-1, -1), 1, colors.HexColor("#E7DFF0")),
                        ("LEFTPADDING", (0, 0), (-1, -1), 10),
                        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                        ("TOPPADDING", (0, 0), (-1, -1), 8),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                    ]
                ),
            )
        )
    meta = Table([meta_cells], colWidths=[41 * mm] * 4, hAlign="LEFT")
    meta.setStyle(TableStyle([("TOPPADDING", (0, 0), (-1, -1), 10)]))
    story.append(meta)
    story.append(Spacer(1, 8))

    story.append(Paragraph("Project Overview", styles["SectionTitle"]))
    story.append(
        Paragraph(
            "This proposal covers the design and development of a modern e-commerce website for a musical instrument business. The goal is to give the client a professional online storefront where customers can browse products, view details, add items to cart, and complete orders confidently.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 8))

    story.append(Paragraph("Scope of Work", styles["SectionTitle"]))
    story.append(
        bullet_rows(
            [
                "Clean homepage and branded storefront design",
                "Product catalog with categories for instruments and accessories",
                "Individual product pages with images, pricing, and descriptions",
                "Shopping cart and checkout flow",
                "Payment gateway integration",
                "Order notification and inquiry handoff",
                "Mobile-responsive layout for phone and tablet users",
                "Basic admin setup for adding or updating products",
            ],
            styles,
        )
    )

    story.append(Paragraph("Deliverables", styles["SectionTitle"]))
    story.append(
        KeepTogether(
            [
                card(
                    "What the client receives",
                    "A live e-commerce website, branded interface design, core store pages, responsive build, payment setup, product management support, and deployment assistance.",
                    styles,
                ),
                Spacer(1, 6),
                card(
                    "Recommended content to provide",
                    "Business logo, product images, item descriptions, prices, delivery rules, and the preferred payment account or gateway details.",
                    styles,
                    bg="#FBF9FD",
                ),
            ]
        )
    )
    story.append(Spacer(1, 8))

    story.append(Paragraph("Investment", styles["SectionTitle"]))
    pricing_table = Table(
        [
            [
                Paragraph(
                    "Total Project Fee<br/><font size='22'><b>NGN 250,000</b></font><br/><font size='9' color='#EEE7F8'>Covers design, development, store setup, and launch support for the agreed scope.</font>",
                    styles["HeroText"],
                ),
                Paragraph(
                    "Suggested payment structure:<br/><b>70% upfront</b> to start<br/><b>30% on completion</b> before handover",
                    styles["Body"],
                ),
            ]
        ],
        colWidths=[96 * mm, 71 * mm],
    )
    pricing_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, 0), colors.HexColor("#17111F")),
                ("BACKGROUND", (1, 0), (1, 0), colors.HexColor("#FBF9FD")),
                ("BOX", (0, 0), (1, 0), 1, colors.HexColor("#E7DFF0")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 14),
                ("RIGHTPADDING", (0, 0), (-1, -1), 14),
                ("TOPPADDING", (0, 0), (-1, -1), 14),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
            ]
        )
    )
    story.append(pricing_table)
    story.append(Spacer(1, 10))

    story.append(Paragraph("Commercial Notes", styles["SectionTitle"]))
    terms = [
        "Quotation assumes one standard e-commerce website for a musical instrument business.",
        "Domain, hosting, SMS costs, premium plugins, and third-party subscription fees are billed separately where needed.",
        "Timeline depends on timely feedback and complete product content from the client.",
        "Reasonable revisions are included during the build phase before final approval.",
    ]
    for term in terms:
        story.append(Paragraph(f"- {term}", styles["Body"]))
        story.append(Spacer(1, 3))

    story.append(Spacer(1, 10))
    story.append(Paragraph("Next Step", styles["SectionTitle"]))
    story.append(
        Paragraph(
            "Once the client approves the quotation, Logic Leads can confirm kickoff, collect the initial payment, and begin the store structure, product setup, and interface design.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 18))

    footer = Table(
        [
            [
                Paragraph("<b>Logic Leads</b><br/>bylogicleads@gmail.com<br/>+234 703 517 2208", styles["Small"]),
                Paragraph("Prepared on 19 July 2026<br/>Proposal for client review", styles["Muted"]),
            ]
        ],
        colWidths=[98 * mm, 69 * mm],
    )
    footer.setStyle(
        TableStyle(
            [
                ("LINEABOVE", (0, 0), (-1, -1), 1, colors.HexColor("#E7DFF0")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    story.append(footer)

    doc.build(story)


if __name__ == "__main__":
    build_pdf()
    print(OUTPUT_PATH)

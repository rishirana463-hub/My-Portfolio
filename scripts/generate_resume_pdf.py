from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Rishi_Rana_Resume.pdf"


def spaced_text(text: str) -> str:
    letters = []
    for char in text:
        if char == " ":
            letters.append("&nbsp;&nbsp;")
        else:
            letters.append(char)
    return "&nbsp;".join(letters)


def section_header(title: str, styles, story):
    story.append(Paragraph(spaced_text(title.upper()), styles["Section"]))
    story.append(HRFlowable(width="100%", thickness=0.45, color=colors.HexColor("#9ca3af")))
    story.append(Spacer(1, 0.05 * inch))


def build_story():
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Name",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=23,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#111827"),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Subhead",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=8.9,
            leading=10.2,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#374151"),
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Contact",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=7.7,
            leading=8.8,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#4b5563"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=9.4,
            leading=10.4,
            textColor=colors.HexColor("#111827"),
            spaceBefore=1,
            spaceAfter=0,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=7.95,
            leading=9.2,
            textColor=colors.HexColor("#1f2937"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="ItemTitle",
            parent=styles["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=8.6,
            leading=9.8,
            textColor=colors.HexColor("#111827"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="ProjectHead",
            parent=styles["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=8.55,
            leading=9.8,
            textColor=colors.HexColor("#111827"),
        )
    )

    story = []

    story.append(Paragraph("R I S H I R A N A", styles["Name"]))
    story.append(Paragraph("Frontend Developer | Software Development Student", styles["Subhead"]))
    story.append(
        Paragraph(
            "Mumbai, India · rishirana463@gmail.com · +91-8286783460 · LinkedIn · GitHub",
            styles["Contact"],
        )
    )
    story.append(Spacer(1, 0.08 * inch))
    story.append(HRFlowable(width="100%", thickness=0.45, color=colors.HexColor("#9ca3af")))
    story.append(Spacer(1, 0.07 * inch))

    section_header("Professional Summary", styles, story)
    story.append(
        Paragraph(
            "Frontend Developer and final-year Software Development student with a track record of shipping 5 React-powered applications. Focused on responsive UI, reusable component architecture, and seamless UX using React.js, TypeScript, Tailwind CSS, and JavaScript (ES6+). Comfortable consuming REST APIs, translating designs into pixel-perfect layouts, and optimising for performance. Seeking a Frontend Developer internship to build exceptional interfaces in a collaborative team.",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.06 * inch))

    section_header("Technical Skills", styles, story)
    skills = Table(
        [[
            Paragraph("Core Stack: JavaScript (ES6+) | React.js | TypeScript | HTML5 | CSS3 | Tailwind CSS | Node.js | Express.js | MongoDB", styles["Body"]),
            Paragraph("Languages: JavaScript | TypeScript | Python | C", styles["Body"]),
        ]],
        colWidths=[5.1 * inch, 1.9 * inch],
    )
    skills.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.append(skills)
    story.append(Spacer(1, 0.04 * inch))
    story.append(Paragraph("Tools: Git | GitHub | VS Code | REST APIs | Mongoose | RBAC | MVC Architecture | Canvas API", styles["Body"]))
    story.append(Spacer(1, 0.06 * inch))

    section_header("Projects", styles, story)
    projects = [
        (
            "College Complaint Management System (CCMS) - React | Node.js | Express.js | MongoDB | RBAC | Mar 2025",
            [
                "Built a full-stack MERN complaint management platform supporting 3 distinct user roles (student, faculty, admin) with isolated dashboards and permission scopes via RBAC.",
                "Implemented real-time ticket tracking with 4 status stages (Open, In Review, Resolved, Closed), reducing complaint resolution ambiguity.",
                "Designed 8+ RESTful API endpoints with Express.js and structured MongoDB schemas using Mongoose; applied MVC architecture for clean separation of concerns.",
            ],
        ),
        (
            "Neighborhood Alert - Civic Issue Reporting Platform - TypeScript | React | Node.js | Map Integration | Apr 2025",
            [
                "Engineered a civic-tech platform enabling residents to report, geopin, and track local community issues across 2 core user flows: reporter and viewer.",
                "Integrated interactive map features for precise geolocation pinning, reducing issue location ambiguity by an estimated 60% for administrators.",
                "Added evidence upload (images/files), upvoting, and threaded tracking; chose TypeScript for strict typing and long-term scalability.",
            ],
        ),
        (
            "Client-Side Image Compressor - React | Canvas API | JavaScript | 2025",
            [
                "Built a browser-only image compression tool using the Canvas API - no server uploads, no dependencies, instant compression with adjustable quality slider.",
                "Supports drag-and-drop, live before/after size comparison, and one-click download; achieves sub-second processing for images up to 10MB.",
                "Live: https://image-compressor-converter-bay.vercel.app/",
            ],
        ),
        (
            "Weather Application - JavaScript | REST API | HTML | CSS | Mar 2025",
            [
                "Built a real-time weather app consuming a public REST API, delivering live city weather data within 500ms average response time with a responsive card-based UI across 3 device breakpoints.",
            ],
        ),
    ]

    for heading, bullets in projects:
        story.append(Paragraph(heading, styles["ProjectHead"]))
        for bullet in bullets:
            story.append(Paragraph(f"▸ {bullet}", styles["Body"]))
        story.append(Spacer(1, 0.03 * inch))

    section_header("Experience", styles, story)
    story.append(Paragraph("Tech Fest Volunteer Coordinator <font color='#6b7280'>2025</font> <font color='#6b7280'>Thakur College of Engineering & Technology · Mumbai</font>", styles["ProjectHead"]))
    story.append(Paragraph("▸ Coordinated registration and check-in for 100+ attendees at the annual Tech Fest, managing real-time logistics under time pressure.", styles["Body"]))
    story.append(Paragraph("▸ Collaborated with a team of 8 volunteers to ensure smooth event operations across multiple concurrent sessions.", styles["Body"]))
    story.append(Spacer(1, 0.03 * inch))

    section_header("Education", styles, story)
    story.append(Paragraph("B.Voc in Software Development <font color='#6b7280'>2024 - Present</font>", styles["ProjectHead"]))
    story.append(Paragraph("Thakur College of Engineering & Technology · Mumbai, India", styles["Body"]))
    story.append(Spacer(1, 0.03 * inch))

    section_header("Achievements & Extracurriculars", styles, story)
    achievements = [
        "Active member of the college Coding Club - participates in peer workshops and collaborative problem-solving sessions.",
        "Maintained 5 public GitHub repositories with consistent commit history, demonstrating discipline and a shipping mindset.",
        "Completed MS Excel & Google Docs certifications.",
    ]
    for item in achievements:
        story.append(Paragraph(f"▸ {item}", styles["Body"]))

    return story


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.42 * inch,
        rightMargin=0.42 * inch,
        topMargin=0.30 * inch,
        bottomMargin=0.30 * inch,
        title="Rishi Rana Resume",
        author="Rishi Rana",
    )

    def decorate(canvas, _doc):
        canvas.setStrokeColor(colors.HexColor("#d1d5db"))
        canvas.setLineWidth(0.5)
        canvas.line(0.42 * inch, 0.31 * inch, 7.18 * inch, 0.31 * inch)
        canvas.setFillColor(colors.HexColor("#6b7280"))
        canvas.setFont("Helvetica", 7)
        canvas.drawRightString(7.18 * inch, 0.18 * inch, "Rishi Rana Resume")

    doc.build(build_story(), onFirstPage=decorate, onLaterPages=decorate)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
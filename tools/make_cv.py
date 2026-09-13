#!/usr/bin/env python3
"""
Generate assets/Messay_Mohammed_CV.pdf — a clean, one-page, ATS-friendly CV.

Run:  python3 tools/make_cv.py
(requires: pip install fpdf2)

✏️ Edit the CONTENT dict below to match your real CV, then re-run.
"""
import os
from fpdf import FPDF

OUT = os.path.join(os.path.dirname(__file__), "..", "assets", "Messay_Mohammed_CV.pdf")

INK = (23, 23, 31)
MUTED = (88, 88, 98)
ACC = (63, 92, 0)       # dark olive (matches the site's light-theme accent)
LIME = (178, 219, 51)   # print-safe lime for the header rule

CONTENT = {
    "name": "Messay Mohammed",
    "role": "FULL STACK DEVELOPER",
    "contact": [
        "Addis Ababa, Ethiopia · Open to remote",
        "hello@messay.dev",
        "github.com/moisoi",
    ],
    "summary": (
        "Full stack developer with 3+ years of experience designing, building, and shipping web products "
        "end-to-end. Comfortable owning features from database schema to pixel-perfect UI, with a focus on "
        "performance, accessibility, and maintainable code. Quick to learn, obsessive about quality, and "
        "happiest when shipping software that real people use."
    ),
    "experience": [
        {
            "title": "Full Stack Developer",
            "org": "Freelance & Contract",
            "date": "2024 — Present",
            "points": [
                "Ship end-to-end web products for startups and local businesses — schema design to deployment.",
                "Delivered marketplace, POS, and analytics platforms used by real customers daily.",
                "Advise clients on architecture, performance budgets, and accessibility.",
            ],
        },
        {
            "title": "Frontend Developer",
            "org": "Product Studio, Addis Ababa",
            "date": "2023 — 2024",
            "points": [
                "Built and maintained React applications serving thousands of monthly users.",
                "Introduced a component system that cut UI development time by ~40%.",
                "Paired with designers to ship pixel-perfect, responsive interfaces.",
            ],
        },
        {
            "title": "Web Development Intern",
            "org": "Tech Startup, Remote",
            "date": "2022 — 2023",
            "points": [
                "Learned production workflows: code review, Git flow, CI/CD, agile sprints.",
                "Shipped first production features and owned bug fixes end-to-end.",
            ],
        },
    ],
    "projects": [
        ("Gebeya Marketplace", "React · Node.js · PostgreSQL",
         "Two-sided marketplace for Ethiopian artisans with escrow payments and sub-second page loads."),
        ("BunaPOS", "PWA · IndexedDB · React",
         "Offline-first café point-of-sale with background sync — full functionality with zero connectivity."),
        ("Selam Chat", "WebSockets · Redis · MongoDB",
         "Real-time messaging with rooms & presence, load-tested to 2k concurrent connections per node."),
        ("SnapCV API", "Python · FastAPI · OCR",
         "Resume-parsing API turning messy PDFs into structured JSON with 92% field accuracy."),
    ],
    "skills": [
        ("Frontend", "JavaScript / TypeScript, React, Next.js, HTML/CSS, Tailwind"),
        ("Backend", "Node.js, Express, Python, FastAPI, PostgreSQL, MongoDB"),
        ("Tools", "Git, Docker, Linux, CI/CD, Vercel, Figma"),
    ],
    "education": {
        "title": "BSc, Computer Science",
        "org": "Addis Ababa University",
        "date": "2019 — 2023",
        "points": [
            "Led the student dev club; organized hackathons.",
            "Focus: software engineering, databases, algorithms.",
        ],
    },
    "languages": "Amharic (native) · English (professional fluency)",
    "highlights": "24+ projects built · 12+ clients shipped for · Open to remote worldwide",
}


class CV(FPDF):
    def section(self, label):
        self.set_font("Helvetica", "B", 9.5)
        self.set_text_color(*ACC)
        self.cell(0, 6.4, label.upper(), new_x="LMARGIN", new_y="NEXT")
        y = self.get_y()
        self.set_draw_color(*LIME)
        self.set_line_width(0.5)
        self.line(self.l_margin, y, self.w - self.r_margin, y)
        self.ln(2)

    def bullet(self, text, color=INK):
        self.set_font("Helvetica", "", 9.6)
        self.set_text_color(*ACC)
        x0 = self.get_x()
        self.cell(4.6, 4.7, chr(8226))
        self.set_text_color(*color)
        xi = self.get_x()
        self.multi_cell(self.w - self.r_margin - xi, 4.7, text, new_x="LMARGIN", new_y="NEXT")
        self.set_x(x0)


def build():
    pdf = CV(orientation="P", unit="mm", format="A4")
    pdf.core_fonts_encoding = "windows-1252"  # enables — · • etc. with built-in fonts
    pdf.set_title("Messay Mohammed — CV")
    pdf.set_author("Messay Mohammed")
    pdf.set_subject("Full Stack Developer")
    pdf.set_auto_page_break(True, margin=12)
    pdf.set_margins(16, 12, 16)
    pdf.add_page()

    c = CONTENT

    # ---------- Header ----------
    pdf.set_text_color(*INK)
    pdf.set_font("Helvetica", "B", 24)
    pdf.cell(0, 9.5, c["name"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(*ACC)
    pdf.cell(0, 5, c["role"], new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1.5)

    pdf.set_font("Helvetica", "", 9.3)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 4.6, "  |  ".join(c["contact"]), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1.2)
    pdf.set_draw_color(*INK)
    pdf.set_line_width(0.7)
    pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())
    pdf.ln(4)

    # ---------- Summary ----------
    pdf.section("Profile")
    pdf.set_font("Helvetica", "", 9.8)
    pdf.set_text_color(*MUTED)
    pdf.multi_cell(0, 4.8, c["summary"], new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2.2)

    # ---------- Experience ----------
    pdf.section("Experience")
    for job in c["experience"]:
        pdf.set_font("Helvetica", "B", 10.6)
        pdf.set_text_color(*INK)
        y0 = pdf.get_y()
        pdf.cell(pdf.epw - 34, 5, job["title"])
        pdf.set_font("Helvetica", "", 8.6)
        pdf.set_text_color(140, 140, 150)
        pdf.cell(34, 5, job["date"], align="R", new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "B", 9.2)
        pdf.set_text_color(*ACC)
        pdf.cell(0, 4.5, job["org"], new_x="LMARGIN", new_y="NEXT")
        pdf.ln(0.6)
        for p in job["points"]:
            pdf.bullet(p, MUTED)
        pdf.ln(1.7)

    # ---------- Projects ----------
    pdf.section("Selected Projects")
    for name, tech, desc in c["projects"]:
        pdf.set_font("Helvetica", "B", 9.8)
        pdf.set_text_color(*INK)
        pdf.cell(52, 4.7, name)
        pdf.set_font("Helvetica", "", 8.4)
        pdf.set_text_color(140, 140, 150)
        pdf.cell(0, 4.7, tech, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "", 9.3)
        pdf.set_text_color(*MUTED)
        pdf.multi_cell(0, 4.6, desc, new_x="LMARGIN", new_y="NEXT")
        pdf.ln(1.2)
    pdf.ln(0.8)

    # ---------- Skills ----------
    pdf.section("Skills")
    for label, items in c["skills"]:
        pdf.set_font("Helvetica", "B", 9.4)
        pdf.set_text_color(*INK)
        pdf.cell(24, 4.8, label)
        pdf.set_font("Helvetica", "", 9.4)
        pdf.set_text_color(*MUTED)
        pdf.multi_cell(0, 4.8, items, new_x="LMARGIN", new_y="NEXT")
        pdf.ln(0.5)
    pdf.ln(1)

    # ---------- Education + extras ----------
    pdf.section("Education")
    e = c["education"]
    pdf.set_font("Helvetica", "B", 10.2)
    pdf.set_text_color(*INK)
    pdf.cell(pdf.epw - 34, 5, e["title"])
    pdf.set_font("Helvetica", "", 8.6)
    pdf.set_text_color(140, 140, 150)
    pdf.cell(34, 5, e["date"], align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 9.2)
    pdf.set_text_color(*ACC)
    pdf.cell(0, 4.6, e["org"], new_x="LMARGIN", new_y="NEXT")
    pdf.ln(0.6)
    for p in e["points"]:
        pdf.bullet(p, MUTED)
    pdf.ln(1.6)

    pdf.section("Languages & Highlights")
    pdf.set_font("Helvetica", "", 9.6)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 4.8, "Languages:  " , new_x="RIGHT")
    pdf.set_text_color(*INK)
    pdf.cell(0, 4.8, c["languages"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 4.8, "Highlights:  ", new_x="RIGHT")
    pdf.set_text_color(*INK)
    pdf.cell(0, 4.8, c["highlights"], new_x="LMARGIN", new_y="NEXT")

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    pdf.output(OUT)
    print(f"Wrote {os.path.abspath(OUT)} — {pdf.page} page(s)")


if __name__ == "__main__":
    build()

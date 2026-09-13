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
LIME = (178, 219, 51)   # print-safe lime for section rules

CONTENT = {
    "name": "Messay Mohammed",
    "role": "FULL STACK DEVELOPER",
    "contact": [
        "Bole, Addis Ababa, Ethiopia",
        "0900 651 948",
        "messaymohammed@gmail.com",
        "github.com/moisoi",
        "linkedin.com/in/messay-seid-398000252",
    ],
    "summary": (
        "Computer Science graduate skilled in full stack development and digital content creation. "
        "Built responsive mobile apps with React Native + Supabase and web apps using React/Next.js. "
        "Experienced with AI tools for different workflows. Detail-oriented problem-solver with a "
        "clean-code focus and UI/UX awareness. Reliable through freelance projects."
    ),
    "experience": [
        {
            "title": "Full Stack Developer (Contract)",
            "org": "Meteku Teshome General Work PLC · Addis Ababa",
            "date": "Feb 2026",
            "points": [
                "Developed the Business Forms Telegram Mini App using React + Vite (frontend) and Node.js + NestJS (backend).",
                "Automated forms for petty cash requests, purchase orders, and employee attendance.",
                "Generated business reports with export functionality for client management.",
            ],
        },
        {
            "title": "Full Stack Mobile Developer (Contract)",
            "org": "Dewel Marketing and Consultancy · Addis Ababa",
            "date": "Sep – Dec 2025",
            "points": [
                "Built the Student Sports Hub mobile app with React Native + Supabase for grades 1–12 students and parents across Addis Ababa.",
                "Real-time stories, match schedules, team rosters, and sports updates.",
                "Scalable database architecture supporting multiple schools.",
            ],
        },
    ],
    "education": {
        "title": "Bachelor of Computer Science",
        "org": "HILCOE School of Computer Science and Technology · Addis Ababa",
        "date": "Sep 2020 – Jul 2025",
    },
    "skills": [
        ("Frontend", "HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS, React.js, Next.js"),
        ("Backend", "Node.js, NestJS, Express.js, FastAPI"),
        ("Databases", "PostgreSQL, MySQL, Redis, Firebase, Supabase"),
        ("Mobile", "React Native, Expo, Telegram Mini Apps"),
        ("Others", "Docker, RESTful API design, WebSockets, JWT, OAuth 2.0, RBAC, Git/GitHub/GitLab CI/CD, penetration testing basics"),
    ],
    "volunteer": [
        ("Lead Unit Coordinator & Teacher — YWCA (Jun – Aug 2018)",
         "Led a teaching team and daily academic operations; organized fundraising supporting 100+ students."),
        ("Blood Donation Organizer — Red Cross Ethiopia (May 2018)",
         "Facilitated and organized high-school blood donations sponsored by Red Cross Ethiopia."),
    ],
    "certificate": "2D & 3D Modeling for Modern Product Development — MMCY Workforce Training",
    "languages": "Amharic (native) · English",
    "soft": "Communication · Teamwork · Problem-solving · Time management · Leadership & ownership",
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

    def bullet(self, text, color=MUTED):
        self.set_font("Helvetica", "", 9.4)
        self.set_text_color(*ACC)
        x0 = self.get_x()
        self.cell(4.6, 4.6, chr(8226))
        self.set_text_color(*color)
        xi = self.get_x()
        self.multi_cell(self.w - self.r_margin - xi, 4.6, text, new_x="LMARGIN", new_y="NEXT")
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
    pdf.ln(1)

    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 4.4, "  |  ".join(c["contact"]), new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)
    pdf.set_draw_color(*INK)
    pdf.set_line_width(0.7)
    pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())
    pdf.ln(3.5)

    # ---------- Summary ----------
    pdf.section("Summary")
    pdf.set_font("Helvetica", "", 9.6)
    pdf.set_text_color(*MUTED)
    pdf.multi_cell(0, 4.7, c["summary"], new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)

    # ---------- Experience ----------
    pdf.section("Professional Experience")
    for job in c["experience"]:
        pdf.set_font("Helvetica", "B", 10.4)
        pdf.set_text_color(*INK)
        pdf.cell(pdf.epw - 30, 5, job["title"])
        pdf.set_font("Helvetica", "", 8.6)
        pdf.set_text_color(140, 140, 150)
        pdf.cell(30, 5, job["date"], align="R", new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "B", 9.1)
        pdf.set_text_color(*ACC)
        pdf.cell(0, 4.4, job["org"], new_x="LMARGIN", new_y="NEXT")
        pdf.ln(0.5)
        for p in job["points"]:
            pdf.bullet(p)
        pdf.ln(1.6)

    # ---------- Education ----------
    pdf.section("Education")
    e = c["education"]
    pdf.set_font("Helvetica", "B", 10.2)
    pdf.set_text_color(*INK)
    pdf.cell(pdf.epw - 32, 5, e["title"])
    pdf.set_font("Helvetica", "", 8.6)
    pdf.set_text_color(140, 140, 150)
    pdf.cell(32, 5, e["date"], align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 9.1)
    pdf.set_text_color(*ACC)
    pdf.cell(0, 4.4, e["org"], new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2.2)

    # ---------- Skills ----------
    pdf.section("Skills")
    for label, items in c["skills"]:
        pdf.set_font("Helvetica", "B", 9.2)
        pdf.set_text_color(*INK)
        pdf.cell(22, 4.7, label)
        pdf.set_font("Helvetica", "", 9.2)
        pdf.set_text_color(*MUTED)
        pdf.multi_cell(0, 4.7, items, new_x="LMARGIN", new_y="NEXT")
        pdf.ln(0.4)
    pdf.ln(1)

    # ---------- Volunteer ----------
    pdf.section("Volunteer Experience")
    for title, desc in c["volunteer"]:
        pdf.set_font("Helvetica", "B", 9.4)
        pdf.set_text_color(*INK)
        pdf.multi_cell(0, 4.7, title, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "", 9.2)
        pdf.set_text_color(*MUTED)
        pdf.multi_cell(0, 4.6, desc, new_x="LMARGIN", new_y="NEXT")
        pdf.ln(1)
    pdf.ln(0.6)

    # ---------- Certificate / Languages / Soft skills ----------
    pdf.section("Certificate · Languages · Soft Skills")
    pdf.set_font("Helvetica", "", 9.4)
    pdf.set_text_color(*MUTED)
    pdf.cell(22, 4.7, "Certificate")
    pdf.set_text_color(*INK)
    pdf.cell(0, 4.7, c["certificate"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*MUTED)
    pdf.cell(22, 4.7, "Languages")
    pdf.set_text_color(*INK)
    pdf.cell(0, 4.7, c["languages"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*MUTED)
    pdf.cell(22, 4.7, "Soft skills")
    pdf.set_text_color(*INK)
    pdf.multi_cell(0, 4.7, c["soft"], new_x="LMARGIN", new_y="NEXT")

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    pdf.output(OUT)
    print(f"Wrote {os.path.abspath(OUT)} — {pdf.page} page(s)")


if __name__ == "__main__":
    build()

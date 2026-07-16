from pathlib import Path
import re
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    KeepTogether
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)
PDF = OUT / "Judith_Njoku_Academic_CV.pdf"
PUBLIC = ROOT / "public" / PDF.name

GREEN = colors.HexColor("#760D2D")
GOLD = colors.HexColor("#B77A21")
INK = colors.HexColor("#28171D")
MUTED = colors.HexColor("#746268")
LINE = colors.HexColor("#E3D4D7")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Title"], fontName="Times-Bold", fontSize=23, leading=26, textColor=GREEN, alignment=TA_CENTER, spaceAfter=5))
styles.add(ParagraphStyle(name="Identity", parent=styles["Normal"], fontName="Helvetica", fontSize=9.5, leading=14, textColor=MUTED, alignment=TA_CENTER))
styles.add(ParagraphStyle(name="SectionCV", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=GREEN, spaceBefore=12, spaceAfter=6, borderWidth=0, borderPadding=0))
styles.add(ParagraphStyle(name="EntryTitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.3, leading=12, textColor=INK))
styles.add(ParagraphStyle(name="BodyCV", parent=styles["Normal"], fontName="Helvetica", fontSize=8.7, leading=12.5, textColor=INK))
styles.add(ParagraphStyle(name="SmallCV", parent=styles["Normal"], fontName="Helvetica", fontSize=7.7, leading=10.5, textColor=MUTED))
styles.add(ParagraphStyle(name="PubCV", parent=styles["Normal"], fontName="Helvetica", fontSize=7.5, leading=10, textColor=INK, spaceAfter=4))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(colors.white)
    canvas.rect(0, 0, letter[0], letter[1], fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.line(0.65 * inch, 0.53 * inch, 7.85 * inch, 0.53 * inch)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.65 * inch, 0.35 * inch, "Judith Nkechinyere Njoku-Vowels, PhD | Academic Curriculum Vitae")
    canvas.drawRightString(7.85 * inch, 0.35 * inch, f"Page {doc.page}")
    canvas.restoreState()

def section(title):
    return [Paragraph(title.upper(), styles["SectionCV"]), Table([[""]], colWidths=[7.2*inch], rowHeights=[0.01*inch], style=[("BACKGROUND",(0,0),(-1,-1),GOLD)]), Spacer(1, 5)]

def entry(date, title, institution, detail=""):
    right = [Paragraph(title, styles["EntryTitle"]), Paragraph(institution, styles["SmallCV"])]
    if detail:
        right.append(Spacer(1, 2))
        right.append(Paragraph(detail, styles["BodyCV"]))
    return Table([[Paragraph(date, styles["SmallCV"]), right]], colWidths=[1.05*inch, 6.1*inch], style=[("VALIGN",(0,0),(-1,-1),"TOP"),("BOTTOMPADDING",(0,0),(-1,-1),7)])

def parse_publications():
    text = (ROOT / "own-bib.bib").read_text(encoding="utf-8")
    blocks = re.split(r"\n(?=@)", text)
    papers = []
    for block in blocks:
        if not re.match(r"@(article|inproceedings)\{", block, re.I) or "keywords={preprint}" in block:
            continue
        def f(name):
            m = re.search(rf"{name}=\{{([\s\S]*?)\}}\s*,?\s*\n", block, re.I)
            return re.sub(r"\s+", " ", m.group(1)).replace("{", "").replace("}", "").strip() if m else ""
        title, year = f("title"), f("year")
        raw_authors = f("author")
        author_names = []
        for author in re.split(r"\s+and\s+", raw_authors):
            if author.strip() == "others":
                author_names.append("et al.")
                continue
            parts = [part.strip() for part in author.split(",", 1)]
            display = f"{parts[1]} {parts[0]}" if len(parts) == 2 else parts[0]
            if "Njoku" in display and "Judith" in display:
                display = f"<b>{display}</b>"
            author_names.append(display)
        authors = ", ".join(author_names)
        venue = f("journal") or f("booktitle")
        doi = f("doi")
        if title and year:
            papers.append((int(year), title, authors, venue, doi))
    return sorted(papers, key=lambda x: (-x[0], x[1]))

story = []
story += [Paragraph("Judith Nkechinyere Njoku-Vowels, PhD", styles["Name"])]
story += [Paragraph("Distinguished Postdoctoral Fellow | AI-Enabled Systems | Digital Twins | Trustworthy AI", styles["Identity"])]
story += [Paragraph("University of Wyoming, Laramie, Wyoming | judithnjoku24@gmail.com | judithnjoku.me", styles["Identity"])]
story += [Paragraph("Google Scholar: 1,350+ citations, h-index 14 | ORCID: 0000-0002-2294-9204", styles["Identity"]), Spacer(1, 12)]

story += section("Research Profile")
story += [Paragraph("AI-enabled systems engineering for complex cyber-physical systems through digital twins, trustworthy artificial intelligence, model-informed machine learning, computer vision, explainable AI, and uncertainty quantification. Applications span transportation, energy systems, agriculture, and smart infrastructure.", styles["BodyCV"])]

story += section("Education")
story += [
    entry("2025", "PhD, IT Convergence Engineering", "Kumoh National Institute of Technology, South Korea", "Dissertation: BatteryMetrix: A User-Centric Digital Twin Framework for Predictive, Explainable, and Secure Battery Management Systems."),
    entry("2021", "MSc, Electronics Engineering", "Kumoh National Institute of Technology, South Korea", "Thesis: Improving Performance and Reliability of Wireless Communication Systems using Deep Learning."),
    entry("2014", "BEng, Petroleum Engineering", "Federal University of Technology, Owerri, Nigeria"),
]

story += section("Professional Appointments")
story += [
    entry("2025 to Present", "Distinguished Postdoctoral Fellow", "University of Wyoming", "Research in robust autonomous perception, digital twins for smart infrastructure and rural communities, and trustworthy AI for cyber-physical systems."),
    entry("2024", "Visiting Research Scholar", "Michigan State University", "Digital twins and AI-driven decision support for climate-smart agriculture."),
    entry("2022 to 2025", "Graduate Research Assistant, PhD", "Kumoh National Institute of Technology", "Developed BatteryMetrix and BridgeSync; led multidisciplinary research in battery intelligence, transportation, security, and infrastructure."),
    entry("2022 to 2024", "Research Specialist and Supervisor", "Kyungpook National University and Michigan State University", "AI-enabled sensing, digital agriculture, international collaboration, and workforce development."),
    entry("2019 to 2021", "Graduate Research and Teaching Assistant, MSc", "Kumoh National Institute of Technology", "Machine learning for next-generation wireless communication systems."),
]

story += section("Selected Research Systems")
for title, text in [
    ("OmniRestore", "Parameter-efficient universal adverse-weather image restoration for robust autonomous perception."),
    ("BatteryMetrix", "Predictive, explainable, and secure digital twin framework for electric vehicle battery management."),
    ("PANDA", "Digital twin and agent-based modeling framework for intelligent parking and urban mobility."),
    ("BridgeSync", "Secure digital twin framework for intelligent bridge monitoring and sensor visualization."),
]:
    story += [KeepTogether([Paragraph(title, styles["EntryTitle"]), Paragraph(text, styles["BodyCV"]), Spacer(1, 5)])]

story += section("Grants and Funding")
story += [
    entry("2023 to 2024", "Research Team Lead, AI in Service Drive for Automotive Retail Dealerships", "Metamonkey AI and KIT", "Total funding: $100,000."),
    entry("2022 to 2024", "Research Team Lead, Metaverse and Digital Twin for Battery Management Systems", "KIT Internal ICT Fund", "Total funding: $50,000."),
    entry("2019 to 2027", "Funded Researcher, National Research Programs", "NRF Korea, MSIT Korea, IITP, and Brain Korea 21+", "Contributed to laboratory-wide programs in ICT convergence, smart manufacturing, and talent development."),
]

story += section("Honors and Awards")
story += [
    entry("2023", "Outstanding Paper Award", "International Conference on Maritime IT Convergence"),
    entry("2022 to 2025", "Brain Korea 21+ PhD Scholarship", "Kumoh National Institute of Technology"),
    entry("2021", "Excellent Publication Award", "Brain Korea and Kumoh National Institute of Technology"),
    entry("2019 to 2021", "Brain Korea MSc Scholarship", "Kumoh National Institute of Technology"),
]

story += section("Teaching, Mentorship, and Service")
story += [
    entry("2026 to Present", "Project Research Mentor", "University of Wyoming", "Mentoring five research teams toward peer-reviewed publication across computer vision, mobility, and health sensing."),
    entry("2023 to 2024", "Internship Lead and Research Supervisor", "International remote research program", "Recruited and supervised 15 interns. Twelve contributed to peer-reviewed publications."),
    entry("Ongoing", "Conference and Journal Reviewer", "CVPR, ICML, NeurIPS, IEEE and interdisciplinary AI journals"),
    entry("2018 to Present", "WomenTech Network Global Ambassador and Mentor", "Women in technology and STEM"),
]

story += section("Technical Expertise")
story += [Paragraph("<b>Programming:</b> Python, MATLAB, R<br/><b>AI and ML:</b> PyTorch, TensorFlow, scikit-learn, physics-informed ML, SHAP, LIME, GradCAM<br/><b>Modeling and Simulation:</b> MATLAB/Simulink, PyBaMM, CARLA, Mesa, hardware-in-the-loop prototyping<br/><b>Digital Twins and Visualization:</b> Unreal Engine 5, CesiumJS, RealityCapture, Blender<br/><b>Software and Deployment:</b> FastAPI, REST APIs, MQTT, Docker, Git, edge deployment, HPC workflows", styles["BodyCV"])]

story += section("Publications")
for index, (year, title, authors, venue, doi) in enumerate(parse_publications(), 1):
    url = f"https://doi.org/{doi}" if doi else f"https://scholar.google.com/scholar?q={title.replace(' ', '+')}"
    doi_line = f' <link href="https://doi.org/{doi}" color="#12382A">DOI: {doi}</link>' if doi else ""
    story.append(Paragraph(f'<b>{index}. <link href="{url}" color="#12382A">{title}</link></b><br/>{authors}<br/><i>{venue}</i>, {year}.{doi_line}', styles["PubCV"]))

doc = SimpleDocTemplate(str(PDF), pagesize=letter, rightMargin=0.65*inch, leftMargin=0.65*inch, topMargin=0.55*inch, bottomMargin=0.65*inch, title="Judith Nkechinyere Njoku-Vowels Academic CV", author="Judith Nkechinyere Njoku-Vowels")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
shutil.copy2(PDF, PUBLIC)
print(PDF)

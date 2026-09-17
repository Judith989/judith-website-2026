import type { Metadata } from "next";
import { PageHero } from "../site-chrome";

export const metadata: Metadata = { title: "Teaching | Judith Njoku-Vowels, PhD" };

const preparedCourses = [
  {
    area: "Computer science and software",
    courses: ["Data Structures", "Algorithms and Discrete Mathematics", "Software Engineering", "Secure Systems"],
  },
  {
    area: "AI and visual computing",
    courses: ["Computer Vision", "Introduction to Machine Learning", "Information Visualization", "Designing and Prototyping with Artificial Intelligence"],
  },
  {
    area: "Systems engineering",
    courses: ["Data Analytics for Systems Engineering", "Simulation"],
  },
  {
    area: "Project-based instruction",
    courses: ["Computer Science and Software Engineering Capstone", "Applied Computing Capstone", "Undergraduate Research"],
  },
];

const proposedCourses = [
  "Trustworthy AI for Visual and Physical Systems",
  "Digital Twin Software Engineering",
  "Introduction to Digital Twins",
  "Human-Centered Digital Twins",
  "AI for Civic and Mobility Systems",
  "Cyber-Physical and Embedded Systems",
  "Explainable AI and Uncertainty Quantification for Safety-Critical Systems",
];

export default function TeachingPage() {
  return (
    <main>
      <PageHero title="Teaching" />
      <section className="academic-section teaching-page">
        <h2>Teaching experience</h2>
        <div className="academic-entry-list">
          <article className="academic-entry"><h3>University of Wyoming</h3><p>Mentored machine learning projects in model implementation, evaluation, and interpretation in 2026.</p></article>
          <article className="academic-entry"><h3>Kumoh National Institute of Technology</h3><p>Supported <em>Introduction to Probability</em> during my MSc and graduate <em>Real-Time Systems</em> during my PhD.</p></article>
          <article className="academic-entry"><h3>Instructional materials</h3><p>Developed a MATLAB hardware-in-the-loop simulation course and a graduate research-writing component.</p></article>
        </div>
      </section>
      <section className="academic-section teaching-page">
        <h2>Courses prepared to teach</h2>
        {preparedCourses.map((group) => (
          <div className="teaching-course-group" key={group.area}>
            <h3>{group.area}</h3>
            <ul>{group.courses.map((course) => <li key={course}><em>{course}</em></li>)}</ul>
          </div>
        ))}
      </section>
      <section className="academic-section teaching-page">
        <h2>Courses I would develop</h2>
        <ul className="teaching-proposed-courses">
          {proposedCourses.map((course) => <li key={course}><em>{course}</em></li>)}
        </ul>
      </section>
      <section className="academic-section teaching-page">
        <h2>Mentorship and project advising</h2>
        <p>I can advise computer science, software engineering, and applied computing capstones as well as undergraduate and graduate research. I use project milestones, reproducible evaluation, and regular feedback to help students move toward independent technical judgment.</p>
      </section>
    </main>
  );
}

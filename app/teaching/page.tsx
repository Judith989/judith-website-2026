import type { Metadata } from "next";
import { PageHero } from "../site-chrome";

export const metadata: Metadata = { title: "Teaching | Judith Njoku-Vowels, PhD" };

const preparedCourses = [
  "Introduction to Machine Learning",
  "Computer Vision",
  "Simulation",
  "Data Analytics for Systems Engineering",
];

const proposedCourses = [
  "Introduction to Digital Twins",
  "Trustworthy AI for Visual and Physical Systems",
];

export default function TeachingPage() {
  return (
    <main>
      <PageHero title="Teaching" />
      <section className="academic-section teaching-page">
        <h2>Teaching experience</h2>
        <div className="academic-entry-list">
          <article className="academic-entry"><h3><em>Machine Learning</em> (COSC 4555/5555)</h3><p>University of Wyoming · Project research mentor, Mar to May 2026. Guided student projects in model implementation, evaluation, and interpretation.</p></article>
          <article className="academic-entry"><h3><em>Introduction to Probability</em></h3><p>Kumoh National Institute of Technology · Teaching assistant during my MSc.</p></article>
          <article className="academic-entry"><h3><em>Real-Time Systems</em></h3><p>Kumoh National Institute of Technology · Teaching assistant during my PhD.</p></article>
          <article className="academic-entry"><h3><em>Hardware-in-the-Loop Simulation with MATLAB</em></h3><p>Kumoh National Institute of Technology · Developed online course materials during my MSc.</p></article>
        </div>
      </section>
      <section className="academic-section teaching-page">
        <h2>Courses prepared to teach</h2>
        <ul className="teaching-course-list">
          {preparedCourses.map((course) => <li key={course}><em>{course}</em></li>)}
        </ul>
      </section>
      <section className="academic-section teaching-page">
        <h2>Courses I would develop</h2>
        <ul className="teaching-course-list">
          {proposedCourses.map((course) => <li key={course}><em>{course}</em></li>)}
        </ul>
      </section>
      <section className="academic-section teaching-page">
        <h2>Mentorship and project advising</h2>
        <p>I welcome capstone and student research projects in AI, visual computing, and digital twins. I use clear milestones, reproducible evaluation, and regular feedback to help students develop independent technical judgment.</p>
      </section>
    </main>
  );
}

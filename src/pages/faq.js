import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const DetailedFAQ = ({ question, children }) => {
  return (
    <div className="faq-item-container">
      <details>
        <summary className="faq-question">
          <strong>{question}</strong>
        </summary>
        <div className="faq-answer">{children}</div>
      </details>
    </div>
  );
};

const faq = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />
    <section className="grid-container usa-section usa-prose faq">
      <h1>FAQ</h1>
      <div className="faq-container">
        <DetailedFAQ question="What are your views on how Georgia should recruit and retain educators, given the ongoing nationwide shortage of professional educators? ">
          Educators are some of our most valuable employees, and they should be
          compensated accordingly. The State of Georgia should pay its educators
          more so that more people can afford to become educators. I personally
          know teachers who left, or are considering leaving, their jobs to go
          into other fields such as software engineering, simply because they
          cannot afford to be teachers. The first solution to a talent shortage
          is to commit more resources and show that the state values this
          talent. More resources mean that teachers are paid more, there are
          more mental health resources for students, and class sizes are
          smaller, all of which will improve retention.The government can also
          incentivize more people to become educators by programs such as
          scholarships or forgiving student loan debt for people who become
          educators.
        </DetailedFAQ>
        <DetailedFAQ question="How will you empower educators to be collaborative participants in solving problems facing public education?">
          I am committed to meeting with both school boards, teachers, school
          administrators, and PTAs to ensure that teachers have a say in both
          administrative and legislative decisions and are connected to the
          right people who can make decisions happen. I will work to ensure that
          educators have a voice built into the system — such as a regular spot
          or consultations — and fight for legislation that protects educators
          from retaliation because of speaking their personal or political
          views. I also believe that teachers and educators should have
          collective bargaining rights and exercise these rights through unions.
        </DetailedFAQ>
        <DetailedFAQ question="How will you help protect students and educators in a public school setting?">
          I will work to protect students from two crises that have engulfed our
          schools: the opioid epidemic and the mental health crisis. I will make
          sure that every student has access to resources to deal with the
          opioid epidemic and help friends who may be in danger, and that
          age-appropriate education is provided for all students on how to deal
          with dangerous drugs. I will push for more funding so that schools can
          hire more mental health counselors, who can help students succeed, and
          I will encourage schools to take measures that could decrease the
          stress and pressure on students, such as revising or removing class
          rank.Every student should have access to quality and comprehensive sex
          ed, in order to equip them with the knowledge that allows them to stay
          safe. I will work to ensure that LGBTQ+ students are able to express
          their sexual orientation and/or gender identity without fear of
          repercussions, and I will prioritize making sure students with
          disabilities have the accommodations that they need.Additionally,
          students and educators should feel safe in public schools without
          needing to constantly worry about mass shootings. Educators like my
          former teachers want to focus on educating their students, as opposed
          to doubling as security guards. I oppose proposals to arm teachers,
          and instead would rather focus on passing gun safety legislation
          instead. I will advocate for common sense gun safety measures such as
          additional background checks and heightened restrictions on who can
          carry guns in schools. Schools that need it should have the resources
          to hire student resource officers who can protect students, but at the
          same time we need efforts to build community between students and SROs
          so they know they are there to help not harm.
        </DetailedFAQ>
        <DetailedFAQ question="What is your current understanding of how public school funds are allocated?">
          Public school funds from the state level are allocated through the QBE
          formula, which makes school funding proportional to property values in
          an area. School districts also get local funds, which are also often
          tied to the value of property taxes; and finally, some federal grants
          fund specific programs for schools. The fact that public school
          funding is tied to property taxes creates large disparities in the
          quality of public education across the state. There are also charter
          schools in the state that take public money, but are privately run.
        </DetailedFAQ>
        <DetailedFAQ question="Do you think public education funds should be used to pay private school tuition?">
          No. We haven’t even fully funded our public education system, and
          diverting funds away from this system will further cause the quality
          of public education to deteriorate, harming the vast majority of
          students in the long-term. The establishment of public education is a
          tremendous achievement in American history – in terms of providing
          students with greater opportunity and social mobility – and diverting
          funds towards private schools is the first step towards dismantling
          all that progress.The voucher problem is a temporary band-aid on a
          larger problem that ultimately serves no one’s interest. In fact, many
          private schools also oppose such voucher proposals because providing
          state funding may take away from their independence. If everyone is
          well-educated, regardless of what school they go to, Georgia is more
          prosperous, and we all succeed.
        </DetailedFAQ>
        <DetailedFAQ question="Imagine you're on a study committee focusing on public schools. What are three areas you would want to focus on?">
          <p>
            Teacher retention: How can we ensure we can hire and retain our
            teachers? What kinds of funding gaps are there that we can address?
          </p>
          <p>
            Academic excellence: How do we make sure that students from schools
            across GA have a fair shot at getting into the college they want or
            the job they need? How can we support students who are excelling to
            have more opportunities, while also helping students who need more
            support?
          </p>
          <p>
            Mental health: How can we ensure students can deal with the stress
            and competition, particularly at high-performing schools?
            Additionally, how can we best support students who are from
            financially unstable family situations to ensure they can succeed in
            school?
          </p>
        </DetailedFAQ>
        <DetailedFAQ question="What will be your top three policy/legislative priorities? ">
          Building an economy of the future: attracting investments in
          technologies and industries such as healthcare, AI, and cybersecurity;
          ensuring our education system trains people for the jobs of the
          future; making it easier for small businesses and startups to innovate
          and commercialize their products.Providing a world-class education for
          all: fully funding our public education system, correcting disparities
          across the state, paying teachers more, and providing resources to
          deal with student mental health and the opioid crisis.Creating safer
          communities: Providing access to healthcare and expanding Medicaid;
          passing common sense gun safety legislation; and protecting
          reproductive rights.
        </DetailedFAQ>
        <DetailedFAQ question="Are there any other thoughts or comments you would like to share?">
          I grew up in the public school system, and a major reason why I’m
          running for office is to give back to my community. The schools I went
          to and the teachers who taught me are a major reason why I’m here
          today, and I want to make sure that every student across Georgia has
          the same opportunities, or better, than I had. Today I don’t see the
          level of legislative focus on the education system that I believe we
          should have in order to invest in our future.
        </DetailedFAQ>
      </div>
    </section>
  </Layout>
);

export default faq;

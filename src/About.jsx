
import React from 'react';

const About = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">Happiness Plans in Indore</h1>
      <p className="text-lg text-center mb-10">
        Several organizations and initiatives in Indore are dedicated to promoting happiness,
        mental well-being, and social welfare.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Government Initiatives</h2>
        <p>
          The <strong>Madhya Pradesh government</strong> established a <em>Department of Happiness (Anand Sansthan)</em> in 2016 to enhance citizen well-being beyond material wealth.
          They are collaborating with <strong>IIT Kharagpur</strong> to develop a <em>Happiness Index</em> to assess residents' overall well-being.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Organizations Promoting Happiness</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Art of Living:</strong> Offers the <em>Happiness Program</em> with breathing exercises, meditation, and yoga to promote joy and peace.</li>
          <li><strong>Vishnudas Transformation:</strong> Hosts workshops and courses focused on personal growth and spiritual happiness.</li>
          <li>Many local centers offer yoga, meditation, positive psychology, and emotional intelligence programs.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Mental Health Support Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Manourja Mental Health Solutions:</strong> Provides online and offline counseling for stress, anxiety, and depression.</li>
          <li><strong>Healing 60:</strong> Offers counseling, EAPs, and emotional well-being workshops.</li>
          <li><strong>Al-Khidmat Centre:</strong> Offers rehabilitation, de-addiction, and counseling services.</li>
          <li>Other local psychologists and counselors support relationship issues, parenting, and stress management.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Community Engagement & Social Welfare</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>NGOs & Social Organizations:</strong> Work in education, healthcare, and community development.</li>
          <li><strong>Voluntary Groups:</strong> Provide essential services in child welfare, health, and support.</li>
          <li><strong>Citizen Engagement:</strong> Indore promotes public involvement via suggestions, events, and platforms.</li>
        </ul>
      </section>

      <div className="text-center mt-12">
        <p className="text-lg font-medium">
          Indore offers a rich ecosystem of happiness-enhancing programs. Explore them to uplift your personal well-being and contribute to a happier community.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Our Company</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          ElectroShop was founded with a vision to provide high-quality electronic products to tech enthusiasts and everyday consumers alike. Since our inception, we've been committed to offering the latest and greatest in technology, all while ensuring an exceptional shopping experience for our customers.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to empower people through technology. We strive to make cutting-edge electronics accessible to everyone, providing expert advice and support to help our customers make informed decisions about their purchases.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6">
          <li>Customer Satisfaction: We put our customers first in everything we do.</li>
          <li>Quality: We only offer products that meet our high standards of quality and performance.</li>
          <li>Innovation: We stay at the forefront of technological advancements.</li>
          <li>Integrity: We conduct our business with honesty and transparency.</li>
          <li>Sustainability: We're committed to reducing our environmental impact.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
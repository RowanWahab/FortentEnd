import React from "react";

function Speakers() {
  const speakers = [
    { name: "Dr. Jane Doe", topic: "AI Ethics and Responsibility" },
    { name: "Prof. John Smith", topic: "Deep Learning in Healthcare" },
    { name: "Ms. Priya Nair", topic: "AI for Social Good" },
    { name: "Dr. Ramesh Kumar", topic: "Edge AI and IoT Applications" }
  ];

  return (
    <div className="page">
      <h1>Meet Our Speakers</h1>
      <div className="speaker-grid">
        {speakers.map((s, index) => (
          <div className="speaker-card" key={index}>
            <h3>{s.name}</h3>
            <p>{s.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;

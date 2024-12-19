import React, { useState, useEffect } from "react";
import "../experience.css";
import axios from "axios";

interface Props {
  role: string;
  company: string;
  duration: string;
  jobtype: string;
  achievements: string[];
}

const ExperienceCard: React.FC<Props & { position: "left" | "right" }> = ({
  role,
  company,
  duration,
  jobtype,
  achievements,
  position,
}) => {
  return (
    <div
      className={`experience-card-container ${
        position === "left" ? "left-card" : "right-card"
      }`}
    >
      <div className="experience-card">
        <h3>{role}</h3>
        <p>
          <strong>Company:</strong> {company}
        </p>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Job Type:</strong> {jobtype}
        </p>
        <p>
          <strong>Achievements:</strong>
        </p>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const [experience, setExperience] = useState<Props[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/experience");
        console.log(response.data);
        setExperience(response.data.record.experience);
      } catch (error) {
        console.error("Error Fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading Experiences.....</div>;
  }

  return (
    <div className="experience-section">
      <h1 className="experience-title">Experiences</h1>
      <div className="timeline-container">
        {experience && experience.length > 0 ? (
          experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              role={exp.role}
              company={exp.company}
              duration={exp.duration}
              jobtype={exp.jobtype}
              achievements={exp.achievements}
              position={index % 2 === 0 ? "left" : "right"}
            />
          ))
        ) : (
          <p>No experiences Available</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;

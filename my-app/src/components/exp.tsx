import React, {useState, useEffect} from "react";
import "../experience.css";
import axios from "axios";

interface Props {
    role: string;
    company: string;
    duration: string;
    jobtype: string;
    achievements: string[];
    logo: string;
}

const ExperienceCard: React.FC<Props>= ({role, company,duration, jobtype, achievements, logo}) => {
    return(
        <>
            <div className="experience-card-horizontal">
                <img src={logo} alt={`${company} logo`} className="company-logo" />
                <div className="experience-content">
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
        </>
    );
};

const ExperienceSection = () => {
    const [experience, setExperience] = useState<Props[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const fetchData = async () => {
            
            try {
                const response = await axios.get("http://localhost:8080/api/experience");
                console.log(response.data);
                setExperience(response.data.record.experience);
            } catch (error) {
                console.error("Error Fetching data", error);
            } finally{
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if(loading){
        return <div>Loading Experiences.....</div>
    }

    return (
        <div className="experience-cards-container">
            <h1>Experience</h1>
            {experience && experience.length > 0 ? ( 
            experience.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    role={exp.role}
                    company={exp.company}
                    duration={exp.duration}
                    jobtype={exp.jobtype}
                    achievements={exp.achievements}
                    logo={exp.logo}
                />
            ))
            ): (
                <p>No experiences Available</p>
            )}
        </div>
    );
};

export default ExperienceSection

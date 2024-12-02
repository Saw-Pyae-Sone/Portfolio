import React, {useState, useEffect} from "react";
import "../experience.css";

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
            <h1>Experience</h1>
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

            const binId = '674d23b7e41b4d34e45e214a';
            const apiKey = '$2a$10$C7rWFvkXz6.uc6s4KwIjJ.eQ2x.H5Raw4coG2UXQ7IFxdV7eU0a7W';
            
            try {
                const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                    method: 'GET',
                    headers: {
                        'X-Master-Key': apiKey,
                    },
                });
                if(!response.ok){
                    throw new Error("Network response not OK")
                };
                const data = await response.json();
                console.log(data);

                if (data && Array.isArray(data.record)) {
                    setExperience(data.record);
                } else {
                    throw new Error("Data is not in the expected format.");
                }
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
            {
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
            ))}
        </div>
    );
};

export default ExperienceSection

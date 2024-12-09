import axios from "axios";
import { useState, useEffect } from 'react';

const Skills = () => {
    const [array, setArray] = useState<string[]>([]);

    const fetchAPI = async () => {
        try{
            const response = await axios.get("http://localhost:8080/api/skills");
            setArray(response.data.skills);
        }catch(error){
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    if (array.length === 0) {
        return <p>No Skills Found</p>;
    }

    return (
        <>
            <h1>Skills</h1>
            <ul className="list-group">
                {array.map((skill, index) => (
                    <li className="list-group-item" key={index}>{skill}</li>
                ))}
            </ul>
        </>
    );
};

export default Skills;

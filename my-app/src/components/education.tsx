import React, { useState, useEffect } from "react";
import axios from "axios";

interface EducationItem {
    Degree: string;
    University: string;
    Location: string;
    Class: string;
    GPA: string;
    Date: string[];
}

const Education = () => {
    const [array, setArray] = useState<EducationItem[]>([]);
    const [error, setError] = useState<string | null >(null);

    const fetchAPI = async () => {
        try{
            const response = await axios.get("http://localhost:8080/api/education");
            console.log(response.data.record.education);
            const educationData = Array.isArray(response.data?.record.education) ? response.data.record.education : [];
            setArray(educationData);
        }catch(err: any) {
            setError(err.message || "Error fetching data");
        }
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return(
        <>
            <ul>
                {array.map((edu, index) => (
                    <li key={index}>
                        <p>Degree: {edu.Degree}</p>
                        <p>University: {edu.University}</p>
                        <p>Location: {edu.Location}</p>
                        <p>Class: {edu.Class}</p>
                        <p>GPA: {edu.GPA}</p>
                        <p>Date: {edu.Date.join(" to ")}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Education
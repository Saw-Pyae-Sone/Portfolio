const languages = ['Django', 'HTML', 'CSS', 'React', 'Node.js', 'TypeScript', 'Express.js', 'PHP', 'jQuery']

const Skills = () => {

    if(languages.length === 0)
        return <p>No Skills Found</p>

    return(
        <>
            <h1>Skills</h1>
            <ul className="list-group">
                {languages.map((languages, index) => (
                    <li className="list-group-item" key={index}>{languages}</li>
                ))};
            </ul>
        </>
    )
}

export default Skills
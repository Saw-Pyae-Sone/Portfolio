import projectImg from '../images/First Aid At Home – Paperart for Laviva Magazine - Katrin Rodegast.jpeg'
import github from '../images/github.png'

const programminglists = ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'jQuery'];

const Cards = () => {

    if(programminglists.length === 0)
        return (
            <>
                <h1>Warning</h1>
                <p>No data found</p>
            </>
        )

    return(

        <>
            <div className="container">
                <h1>Projects</h1>
                <img src={projectImg} alt="Project Image" className="img-thumbnail img-fluid"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita temporibus nisi dolorum sed vel. Similique maxime sapiente nostrum. Debitis eum vero eius odio blanditiis pariatur illum alias hic magnam iure.
                </p>
                <h3>Programming list</h3>
                <ul className="list-group">
                    {programminglists.map(plist => (<li className="list-group-item" key={plist}>{plist}</li>))}
                </ul>
                <a href=""><img src={github} alt="Github Repository" style={{width:"32px", height:'32px'}} /></a>
            </div>
        </>
    )
}

export default Cards
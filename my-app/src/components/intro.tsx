import emailIcon from '../images/email-icon.png'
import Profileimg from '../images/_.jpeg'

const Intro = () => {
    return(
        <>
            <div>
                <img src={Profileimg} alt="Profile Image" className="img-fuild img-thumbnail" />
                <h1>Software Enginner</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, laboriosam. Accusantium laudantium sint nostrum blanditiis et quibusdam labore recusandae sed, ipsa odio explicabo illo sequi, aliquam impedit pariatur facilis inventore?
                </p>
                <button>
                    <img src={emailIcon} alt="Email Icon" className="img-fluid"/>
                    {/* Add More Buttons */}
                    <p>Git</p>
                    <p>DownloadCV</p>
                    <p>linkedIn</p>
                </button>
            </div>
        </>
    )
}

export default Intro
import Profileimg from '../../public/images/_.jpeg'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import CopyButton from "./email";
import '../../src/tooltips.css';
import '../../src/wave-underline.css';

const Intro = () => {
    return(
        <>
            <div className='container flex justify-between py-4'>
                <div>
                    <img src={Profileimg} alt="Profile Image" className="img-fuild img-thumbnail" />
                </div>
                <div className='px-12'>
                    <h1 className='wave-underline'>BackEnd Developer</h1>
                    <p className='pt-2'>
                        Specialized in Back End Development with Node.js, Express.js, PHP 8.3, Django. I have a solid knowledge of React.js, Typescrpt.js and Next.js. Basically, I am just a Javascript Enjoyer.
                    </p>
                    <div className='flex space-x-3 pt-2'>

                        <CopyButton />

                        <a href="https://drive.google.com/file/d/1ZXV79J9ZLfZBMKHWPq0LhVVvjPCn-loL/view?usp=sharing" className='no-underline' data-tooltips="Download My Resume!">
                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                            <IoMdDownload />
                            {/* <span>Download My Resume</span> */}
                            </button>
                        </a>

                        <a href="https://github.com/Saw-Pyae-Sone" className="no-underline" data-tooltips="Git">
                            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
                            <DiGithubBadge />
                            {/* <span>Git</span> */}
                            </button>
                        </a>
                
                        <a href="www.linkedin.com/in/pyae-sone-15a799302" className='no-underline' data-tooltips="LinkedIn">
                            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
                            <FaLinkedin />
                            {/* <span>LinkedIn</span> */}
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro

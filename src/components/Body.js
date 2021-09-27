import '../static/body.css'
import selfImage from "../static/self-image.jpg"
import resume from "../static/daniel-wile-resume.pdf"
import TextChanger from './TextChanger'
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaJsSquare, FaPhone, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, FaAngular, FaPython, FaMapMarkedAlt, FaGlobeAmericas, FaTwitter, FaFilePdf, FaEnvelope} from 'react-icons/fa'
import { SiMocha, SiJest, SiMongodb, SiGraphql, SiCsharp, SiDjango} from 'react-icons/si'
import { DiSqllite, DiDatabase } from 'react-icons/di'


const Body = () => {
    return (
        <div className="body" id="Top">
        <div className="aboutDiv">
            <h1 className="aboutTitle"><a className="titleName">D<a className="yellowGreen">aniel</a> W<a className="yellowGreen">ile</a></a></h1>
        </div>
        <div id="AboutMe"></div>
        <div className="stickyItem aboutPhoto">
                <div className="aboutHeader">
                    <h1 className="aboutTitle">About Me</h1>
                </div>
                <div className="aboutDetails">
                    <div className="aboutTextDiv typeWriter">
                    <TextChanger/>
                    </div>
                <div className="aboutTextDiv">
                <p>I'm Daniel Wile, I have a Bachelors of Science in Chemical Engineering from Clemson University.  
                    I am currently working on my Masters in Computer Science at ECU and plan to graduate in 2023.
                    I am passionate about Full Stack development and working to learn more every day.  I have a background in the MERN stack as well as Python, JavaScript, CSS, HTML, and SQL.</p>
                </div>
                </div>
        </div>
        <div id="Experience"></div>
        <div className="stickyItem experience">
        <div className="experienceTitleDiv">
            <h1 className="experienceTitle">Experience</h1>
        </div>
        <div className="stickyExp">
            <div className="experienceDetails">
                <div className="workEdHolder">
                <div className="edDiv">
                <h2>Education</h2>
                <div className="experienceList">
                    <h4>Masters of Science - Computer Science   -  East Carolina University 2021 - 2023(Est.)</h4>
                    <h4>Bachelors of Science - Chemical Engineering   -  Clemson University 2014 - 2018</h4>
                    <h4>Mthree program Alumni - Front End Development / Mern Stack Program  - 2021</h4>
                </div>
                </div>
                <div className="workDiv">
                <h2>Work Experience</h2>
                <div className="experienceList">
                    <h4>Front End Development Consultant - Mthree/Centene Corperation - 10/2021 - Present</h4>
                    <h4>Mthree Trainee - MERN Stack - Mthree Consulting Company 8/2021 - 10/2021</h4>
                    <h4>Product Development Engineer - Forbo Siegling  - 06/2018 - 08/2021</h4>
                    <h4>Research Associate - Clemson University - 05/2016 - 05/2018</h4>
                </div>
                </div>
                </div>
                <h2>Skills</h2>
                <div className="skillsDiv">
                    <div className="skill">
                        <h3>JavaScript</h3>
                        <FaJsSquare className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>Java</h3>
                        <FaJava className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>Python</h3>
                        <FaPython className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>C Sharp</h3>
                        <SiCsharp className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>HTML 5</h3>
                        <FaHtml5 className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>CSS 3</h3>
                        <FaCss3Alt className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>Git</h3>
                        <FaGitAlt className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>React</h3>
                        <FaReact className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>Node/Exp</h3>
                        <FaNodeJs className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>Django</h3>
                        <SiDjango className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>Mongodb</h3>
                        <SiMongodb className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>SQL</h3>
                        <DiDatabase className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>TDD</h3>
                        <SiJest className="skillIcon"/>
                    </div>
                    <div className="skill">
                        <h3>GrahpQL</h3>
                        <SiGraphql className="skillIcon"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Projects"></div>
    <div className="projectDiv stickyItem">
        <div className="projectsPhotoDiv">
            <h1 className="projectsTitle">Projects</h1>
        </div>
        <div className="projectDetails">
            <div className="projectHolder">
                <div className="project" id="projectOne">
                    <div className='projectDescription'>
                        <h2>SaveTree - A Message Board App</h2>
                        <h4>Save Tree allows users to create unique secure accounts, which they can use to create posts and comments to interact with eachother on the message board.</h4>
                        <h4>It is currently hosted and available at the link to the right. It Uses React, Node, Express, Mongodb, and Graphql</h4>
                    </div>
                    <div className="projectLinks">
                        <div className="link">
                            <h3>SaveTree</h3>
                            <FaGlobeAmericas className="skillIcon"/>
                        </div>
                        <div className="link">
                            <h3>FrontEnd</h3>
                            <FaGithub className="skillIcon"/>
                        </div>
                        <div className="link">
                            <h3>BackEnd</h3>
                            <FaGithub className="skillIcon"/>
                        </div>
                    </div>
                </div>
                <div className="project" id="projectTwo">
                    <div className='projectDescription'>
                        <h2>TO BE ADDED!</h2>
                        <h4>""</h4>
                        <h4>""</h4>
                    </div>
                    <div className="projectLinks">
                        <div className="link">
                            <h3>Link</h3>
                            <FaGlobeAmericas className="skillIcon"/>
                        </div>
                        <div className="link">
                            <h3>GitHub</h3>
                            <FaGithub className="skillIcon"/>
                        </div>
                    </div>
                </div>
                <div className="project" id="projectThree">
                    <div className='projectDescription'>
                        <h2>Daniel Wile - Portfolio Site</h2>
                        <h4>You're Already Here!</h4>
                        <h4>Responsive and Dynamic Portfolio Site. It uses React, JS(ES6), HTML5, and CSS3.</h4>
                    </div>
                    <div className="projectLinks">
                        <div className="link">
                            <h3>GitHub</h3>
                            <FaGithub className="skillIcon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="ContactMe"></div>
    <div className="contactMeDiv stickyItem">
        <div className="contactMeTitleDiv">
            <h1 className="contactMeTitle">Contact Me</h1>
        </div>
        <div className="contactMeBody">
            <div className="contactTitle">
            <h2>Contact Information</h2>
            <h3>Want to talk technicals, career, design? Reach out and I will reply to you soon!</h3>
            </div>
            <div className="contactColumnsHolder">
            <div className="contactLeftDiv">
                <div className="iconContainer">
                    <FaMapMarkedAlt className="contactIcon"/>
                    <div>
                        <h3>Location:</h3>
                        <h4>Charlotte, North Carolina</h4>
                    </div>
                </div>
                <div className="iconContainer">
                    <FaFilePdf className="contactIcon"/>
                    <div>
                        <h3>Resume:</h3>
                        <h4><a href={resume} target="_blank" rel="noreferrer" className="contactLink">Daniel Wile - Resume.pdf</a></h4>
                    </div>
                </div>
            </div>
            <div className="contactRightDiv">
            <div className="iconContainer">
                <FaEnvelope className="contactIcon"/>
                <div>
                <h3>Email:</h3>
                <a href="mailto: danielhwile@gmail.com"><h4 className="contactLink">danielhwile@gmail.com</h4></a>
                </div>
            </div>
            <div className="iconContainer">
                <FaPhone className="contactIcon"/>
                <div>
                    <h3>Phone:</h3>
                    <h4>(704)750-2037</h4>
                </div>
            </div>
            <div className="iconContainer">
                <FaTwitter className="contactIcon"/>
                <a href="https://twitter.com/daniel_wile"><h4 className="contactLink">@daniel_wile</h4></a>
            </div>
            <div className="iconContainer">
                <FaLinkedin className="contactIcon"/>
                <a href="https://www.linkedin.com/in/daniel-wile/"><h4 className="contactLink">in/daniel-wile</h4></a>
            </div>
            </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Body

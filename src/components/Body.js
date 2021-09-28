import '../static/body.css'
import selfImage from "../static/self-image.jpg"
import resume from "../static/daniel-wile-resume.pdf"
import Phone from '../static/ContactMePhone.png'
import experiencePhoto from '../static/experienceIcon.png'
import monitor from "../static/monitor.png"
import projectImg from "../static/project.png"
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaJsSquare, FaGoogle, FaPhone, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, FaAngular, FaPython, FaMapMarkedAlt, FaGlobeAmericas, FaTwitter, FaFilePdf, FaEnvelope} from 'react-icons/fa'
import { SiJest, SiMongodb, SiGraphql, SiCsharp, SiDjango} from 'react-icons/si'
import { DiDatabase } from 'react-icons/di'


const Body = () => {
    return (
        <div className="body" id="Top">
        <div className="aboutDiv">
            <div className="line lineA"></div>
            <div className="line lineB"></div>
            <div className="line lineC"></div>
            <div className="line lineD"></div>
            <div className="line lineE"></div>
            <h1 className="aboutTitle">Daniel <a className="W-Blue">W</a>ile</h1>
            <h3 className="aboutDescr">Full Stack Developer</h3>
        </div>
        <div id="AboutMe" className="anchor"></div>
        <div>
            <div className="aboutDetails">
                <h1 className="sectionTitle">About Me</h1>
                    
                <div className="aboutImageAndTextHolder">
                        <img src={selfImage} className="selfPortrait" alt="Self Portrait"width='275' height="auto"/>
                        <div className="aboutTextDiv">
                            <p>I'm Daniel Wile, I am a <a className="emphasize">Full Stack Developer</a> with Centene Corperation.  
                                I am currently working on my <a className="emphasize">Masters in Computer Science</a> at ECU and plan to graduate in 2023. I hold a Bachelors of Science in Chemical Engineering from Clemson University.
                                I am passionate about Full Stack development and working to learn more every day.  I have a background in the MERN stack as well as Python, Java, GoLang, Angular and SQL.</p>
                        </div>
                </div>
                <div className="monitorHolder">
                        <img src={monitor} className="computerImage" alt="" width='500' height="auto"/>
                        <div className="dot dotOne"></div>
                        <div className="dot dotTwo"></div>
                        <div className="dot dotThree"></div>
                </div>
            </div>
        </div>
    <div id="Experience" className="anchor"></div>
    <div className="experienceDiv">
    <img src={experiencePhoto} className="experienceImg" alt="" width='470' height="auto"/>
            <div className="experienceDetails">
            <h1 className="sectionTitle addHalfEmMargin">Experience</h1>
            
                <div className="workEdHolder">
                    <div className="edDiv">
                        <h2>Education</h2>
                        <div className="experienceList">
                            <h4><a className="emphasize">Masters of Science</a> - Computer Science   -  East Carolina University 2021 - 2023(Est.)</h4>
                            <h4><a className="emphasize">Bachelors of Science</a> - Chemical Engineering   -  Clemson University 2014 - 2018</h4>
                            <h4><a className="emphasize">Mthree program Alumni</a> - Front End Development / Mern Stack Program  - 2021</h4>
                        </div>
                    </div>
                    <div className="workDiv">
                        <h2>Work Experience</h2>
                        <div className="experienceList">
                            <h4><a className="emphasize">Full Stack Developer</a> - Mthree Consulting / Centene Corperations 10/2021 - Present</h4>
                            <h4><a className="emphasize">Mthree Trainee</a> - MERN Stack - Mthree Consulting Company 8/2021 - 10/2021</h4>
                            <h4><a className="emphasize">Product Development Engineer</a> - Forbo Siegling  - 06/2018 - 08/2021</h4>
                            <h4><a className="emphasize">Research Associate</a> - Clemson University - 05/2016 - 05/2018</h4>
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
                        <h3>GoLang</h3>
                        <FaGoogle className="skillIcon"/>
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
                        <h3>Angular</h3>
                        <FaAngular className="skillIcon"/>
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
    <div id="Projects" className="anchor"></div>
    <div className="projectDiv">
        <div className="projectDetails">
            <h1 className="sectionTitle addHalfEmMargin">Projects</h1>
            <div className="projectHolder">
                <div className="project" id="projectOne">
                    <img src={projectImg} alt="" className="projectImage" width="80" height="70"/>
                    <div className='projectDescription'>
                        <h2>SaveTree - A Message Board App</h2>
                        <h4>Save Tree allows users to create unique secure accounts, which they can use to create posts and comments to interact with eachother on the message board.</h4>
                        <h4>It is currently hosted and available at the link to the right. It Uses React, Node, Express, Mongodb, and Graphql</h4>
                    </div>
                    <div className="projectLinks">
                    <a href="https://danielhwile.github.io/SaveClient/#/"><div className="link">
                            <h3>SaveTree</h3>
                            <FaGlobeAmericas className="skillIcon"/>
                        </div></a>
                        <a href="https://github.com/danielhwile/SaveClient"><div className="link">
                            <h3>FrontEnd</h3>
                            <FaGithub className="skillIcon"/>
                        </div></a>
                        <a href="https://github.com/danielhwile/save-tree-backend"><div className="link">
                            <h3>BackEnd</h3>
                            <FaGithub className="skillIcon"/>
                        </div></a>
                    </div>
                </div>
                <div className="project" id="projectTwo">
                    <img src={projectImg} className="projectImage" alt="" width="80" height="70"/>
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
                    <img src={projectImg} className="projectImage" alt="" width="80" height="70"/>
                    <div className='projectDescription'>
                        <h2>Daniel Wile - Portfolio Site</h2>
                        <h4>You're Already Here!</h4>
                        <h4>Responsive and Dynamic Portfolio Site. It uses React, JS(ES6), HTML5, and CSS3.</h4>
                    </div>
                    <div className="projectLinks">
                        <a href="https://github.com/danielhwile/portfolio"><div className="link">
                            <h3>GitHub</h3>
                            <FaGithub className="skillIcon"/>
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="ContactMe" className="anchor"></div>
    <div className="contactMeDiv stickyItem">
        <div className="phoneAndContactMe">
        <img src={Phone} className="phoneImage" alt="" width='400' height="auto"/>
        <div className="contactMeBody">
            <h1 className="sectionTitle">Contact Me</h1>
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
                <div className="iconContainer">
                <FaEnvelope className="contactIcon"/>
                <div>
                <h3>Email:</h3>
                <a href="mailto: danielhwile@gmail.com"><h4 className="contactLink">danielhwile@gmail.com</h4></a>
                </div>
            </div>
            </div>
            <div className="contactRightDiv">
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
            <p className="footer">&copy; Created By Daniel Wile. All Rights Reserved</p>
        </div>
        </div>
    </div>
</div>
    )
}

export default Body

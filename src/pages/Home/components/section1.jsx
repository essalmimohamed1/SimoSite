import './section1.scss'
import { TypeAnimation } from 'react-type-animation';
import img1  from '../../../assets/images/porfolio1.jpeg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import img2  from '../../../assets/images/WhatsApp Image 2024-03-10 at 00.15.59.jpeg'
import img3  from '../../../assets/images/WhatsApp Image 2024-03-10 at 00.16.27.jpeg'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import img5  from '../../../assets/images/P1085112-removebg-preview.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt } from 'react-icons/fa';






export const FirstSectionHome = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
            "service_e3061fd",
            "template_o2ey5yc",
            form.current,
            "Ln92AU9ouB2tY4mXC"
            )
            .then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
            },
            (error) => {
                console.log(error.text);
            }
            );
    };
    return (
    <>  
        <div className='p-9 bg-black gap-lg-0 gap-14 flex flex-lg-row flex-col fle d-lg-flex justify-around items-center pt-24'>
            <div>
                    <TypeAnimation 
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Hi , I`m Essalmi',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Hi , I`m  Mohamed',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '3em', display: 'inline-block' , color: 'rgba(0, 102, 255, 0.532)' }}
                        repeat={Infinity}
                    /> 
                <h3 className='text-white'>Web devlopper</h3>
                <p className='text-white lg:w-[40vw]'>I am Essalmi mohamed , a dedicated and passionate Web Developer with a strong background in crafting robust and user-centric web solutions. With 2ére of experience in the field, I bring a wealth of knowledge and expertise in front-end and front-end development, coupled with a keen eye for design and usability.</p>
            </div>
            <div className='image'>
                <img src={img5} className='pr-5' alt="" />
            </div>
        </div>
        <div className='bg-black p-2 text-white text-center '  >
            <h1>About <span className='text-blue-900'>Me</span></h1>
        </div>
        <div className='d-lg-flex flex-lg-row flex-col gap-lg-0 gap-4 flex flex-col lg:items-center p-12 justify-around text-white bg-black'>
        <div >
                <img src={img1} className='lg:w-[29vw] w-[100vw] rounded h-[70vh]' alt="" />
            </div>
            <div className='flex flex-col gap-3'>
            <h2 className='text-blue-900'>Full-Stack Web Developer</h2>
            <p className='lg:w-[40vw]'>
                I am Essalmi Mohamed, a dedicated and passionate Web Developer with a strong background in crafting robust and user-centric web solutions. With 2 years of experience in the field, I bring a wealth of knowledge and expertise in front-end and back-end development, coupled with a keen eye for design and usability.
            </p>
            <div className='flex text-3xl gap-3'>
                <a href='https://github.com/essalmimohamed1' target='_blank' rel='noopener noreferrer'>
                    <FaGithub className='text-zinc-100 hover:text-yellow-600' />
                </a>
                <a href='https://www.linkedin.com/in/mohamedessalmi/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='text-blue-800 hover:text-yellow-600' />
                </a>
                <a href='https://www.instagram.com/essalmisimo/' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram className='text-pink-700 hover:text-yellow-600' />
                </a>
                <a href='https://x.com/essalmi_si83203' target='_blank' rel='noopener noreferrer'>
                    <FaXTwitter className='text-zinc-100 hover:text-yellow-600' />
                </a>
            </div>
        </div>
        </div>
        <div className='bg-black p-2 text-white text-center'>
            <h1>My <span className='text-blue-900'>SKILLS</span></h1>
        </div>
    <div className='flex flex-col'>
        <div className='d-lg-flex flex flex-lg-row flex-col  gap-2 p-5 bg-black justify-around'>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <FaHtml5 className='size-20' />
                <p>HTML</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <FaCss3Alt className='size-20' />
                <p>CSS</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <IoLogoJavascript className='size-20' />
                <p>JS.script</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <BsBootstrapFill className='size-20' />
                <p>Bootstrap</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <SiTailwindcss  className='size-20' />
                <p>Tailwind</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <FaReact  className='size-20' />
                <p>React</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <FaLaravel className='size-20' />
                <p>Laravel</p>
            </div>
        </div>
        <div className='d-lg-flex flex flex-lg-row flex-col  gap-16 lg:pl-24 bg-black'>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <FaSass  className='size-20' />
                <p>Sass</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-blue-900 hover:text-yellow-600 items-center justify-center '>
                <FaGitAlt className='size-20' />
                <p>Git</p>
            </div>
        </div>
    </div>
    <div className='bg-black p-6'>
            <div className='text-white text-center'>
                <h1 className='text-4xl font-bold'>My <span className='text-blue-900'>PROJECTS</span></h1>
            </div>
            <div className='flex flex-wrap justify-around gap-5 mt-6'>
                <div className='flex flex-col gap-3 items-center bg-gray-800 p-4 rounded-lg shadow-lg'>
                    <h2 className='text-2xl font-semibold text-white'>Social Media Application</h2>
                    <img src={img2} className='w-full max-w-[500px] border-4 border-blue-900 rounded-lg' alt="Project 1" />
                    <div className='flex gap-4 mt-4'>
                        <a href='https://github.com/your-repo-link' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                            <button className='flex items-center gap-2 border-2 border-blue-900 bg-blue-900 text-slate-50 p-2 rounded-2xl hover:bg-slate-600 hover:border-slate-600 hover:text-white transition duration-300'>
                                <FaGithub /> View Code
                            </button>
                        </a>
                        <a href='https://your-project-link' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                            <button className='flex items-center gap-2 border-2 border-white text-white p-2 rounded-2xl hover:bg-yellow-500 hover:text-white transition duration-300'>
                                <FaExternalLinkAlt /> View Project
                            </button>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center bg-gray-800 p-4 rounded-lg shadow-lg'>
                    <h2 className='text-2xl font-semibold text-white'>Web Shop</h2>
                    <img src={img3} className='w-full max-w-[500px] border-4 border-blue-900 rounded-lg' alt="Project 2" />
                    <div className='flex gap-4 mt-4'>
                        <a href='https://github.com/your-repo-link' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                            <button className='flex items-center gap-2 border-2 border-blue-900 bg-blue-900 text-slate-50 p-2 rounded-2xl hover:bg-slate-600 hover:border-slate-600 hover:text-white transition duration-300'>
                                <FaGithub /> View Code
                            </button>
                        </a>
                        <a href='https://your-project-link' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                            <button className='flex items-center gap-2 border-2 border-white text-white p-2 rounded-2xl hover:bg-yellow-500 hover:text-white transition duration-300'>
                                <FaExternalLinkAlt /> View Project
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <div className='bg-black p-2 text-white text-center'>
            <h1>Contact <span className='text-blue-900'>Us</span></h1>
        </div>
        <form className="flex bg-black flex-col items-center justify-center gap-3 p-4 " ref={form} onSubmit={sendEmail}>
                <input className="border-2 border-blue-900 p-2 lg:w-[30vw] w-[80vw]  rounded-xl bg-black" type="text" name="to_name" placeholder='Your Name' />
                <input className="border-2 border-blue-900 p-2 lg:w-[30vw] w-[80vw]  rounded-xl bg-black" type="email" name="to_email" placeholder='Your Email'/>
                <textarea className="border-2 border-blue-900 p-2 h-60 w-[80vw] lg:w-[30vw] rounded-xl bg-black" name="message" placeholder='Your Message'/>
                <input className="border-none bg-blue-900 p-2 w-[80vw] lg:w-[15vw] text-white rounded-2xl"   type="submit" value="Send" />
            </form>
    </>
    )
}

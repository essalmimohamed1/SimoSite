import './section1.scss';
import { TypeAnimation } from 'react-type-animation';
import img1 from '../../../assets/images/porfolio1.jpeg';
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaSass, FaGitAlt, FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss, SiSass, SiMysql } from "react-icons/si";
import img2 from '../../../assets/images/WhatsApp Image 2024-03-10 at 00.15.59.jpeg';
import img3 from '../../../assets/images/RcaShop.jpeg';
import img4 from '../../../assets/images/manager.jpeg';
import img7 from '../../../assets/images/2Mprj.jpeg';

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import img5 from '../../../assets/images/P1085112-removebg-preview.png';
import { FaXTwitter } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import { TbFileCv } from "react-icons/tb";




export const FirstSectionHome = () => {
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('personal');

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = 'https://simopdf.tiiny.site/';
        
        fetch(link.href)
            .then(response => {
                if (response.ok) {
                    link.download = 'simppdf.pdf';
                    link.click();
                } else {
                    console.error('File not found');
                    alert('CV not available for download.');
                }
            })
            .catch(error => {
                console.error('Error downloading the file:', error);
                alert('An error occurred while trying to download the CV.');
            });
    };
        

    const experiences = [
        {
            role: 'Full-Stack Web Developer',
            company: '2M TV',
            period: 'Jul 2024 - Present ',
            description: "At 2M TV I'm constantly learning, growing, and collaborating with a fantastic team. 🌟 I'm driven by curiosity and a passion for making a difference, and I can't wait to see where this adventure takes me",
        },
        {
            role: 'Full-Stack Web Developer',
            company: 'Freelance',
            period: 'May 2024 - Jul 2024  ',
            description: "The Freelance Shop Web is a modern e-commerce platform designed to provide freelancers and small businesses with a user-friendly online storefront. This web application allows users to seamlessly browse products, add items to their cart, and complete purchases with ease.",
        },
    ];
    const projects = [
        {
            title: 'Manage Events Application',
            img: img4,
            codeLink: 'https://github.com/your-repo-link',
            projectLink: 'https://your-project-link',
            techStack: [<FaLaravel className='text-red-600' title='Laravel' />, <FaHtml5 className='text-orange-600' title='HTML5' />, <SiTailwindcss className='text-teal-500' title='Tailwind CSS' />, <SiSass className='text-pink-600' title='SASS' />]
        },
        {
            title: 'Social Media Application',
            img: img2,
            codeLink: 'https://github.com/your-repo-link',
            projectLink: 'https://your-project-link',
            techStack: [<FaReact className='text-blue-500' title='React' />, <FaHtml5 className='text-orange-600' title='HTML5' />, <SiTailwindcss className='text-teal-500' title='Tailwind CSS' />, <BsBootstrapFill className='text-purple-600' title='Bootstrap' />, <SiSass className='text-pink-600' title='SASS' />]
        },
        {
            title: 'Web Shop',
            img: img3,
            codeLink: 'https://github.com/your-repo-link',
            projectLink: 'https://your-project-link',
            techStack: [<FaReact className='text-blue-500' title='React' />, <FaHtml5 className='text-orange-600' title='HTML5' />, <SiTailwindcss className='text-teal-500' title='Tailwind CSS' />, <BsBootstrapFill className='text-purple-600' title='Bootstrap' />, <SiSass className='text-pink-600' title='SASS' />]
        }
    ];
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
        <div id='Home' className='p-9 bg-black gap-lg-0 gap-14 flex flex-lg-row flex-col fle d-lg-flex justify-around items-center pt-24'>
            <div>
                    <TypeAnimation 
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I`m Essalmi',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Mohamed',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '3em', display: 'inline-block' , color: 'rgba(0, 102, 255, 0.532)' }}
                        repeat={Infinity}
                    /> 
                <h3 className='text-white'>Web devlopper</h3>
                <p className='text-white lg:w-[40vw]'>Full-Stack web Developer | Creating user-friendly solutions through code | Seeking opportunities in the world of tech</p>
            </div>
            <div className='image'>
                <img src={img5} className='pr-5' alt="" />
            </div>
        </div>
        <div id='About' className='bg-black p-2 text-white text-center '  >
            <h1>About <span className='text-blue-900'>Me</span></h1>
        </div>
        <div className='d-lg-flex flex-lg-row flex-col gap-lg-0 gap-4 flex flex-col lg:items-center p-12 justify-around text-white bg-black'>
        <div >
                <img src={img1} className='lg:w-[29vw]  rounded lg:h-[70vh]' alt="" />
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
                <button onClick={handleDownloadCV}>
                            <TbFileCv className='text-red-600 hover:text-yellow-600' />
                        </button>
            </div>
        </div>
        </div>



        <div id='SKILLS' className='bg-black p-2 text-white text-center'>
    <h1>My <span className='text-blue-900'>SKILLS</span></h1>
</div>
    <div className='flex flex-col'>
    <div className='flex flex-col'>
    <div className='grid grid-cols-2 lg:flex lg:flex-row gap-6 p-5 bg-black justify-around'>
        <div className='skill-item html'>
            <FaHtml5 className='text-4xl size-20' />
            <p>HTML</p>
        </div>
        <div className='skill-item css'>
            <FaCss3Alt className='text-4xl size-20' />
            <p>CSS</p>
        </div>
        <div className='skill-item javascript'>
            <IoLogoJavascript className='text-4xl size-20' />
            <p>JavaScript</p>
        </div>
        <div className='skill-item bootstrap'>
            <BsBootstrapFill className='text-4xl size-20' />
            <p>Bootstrap</p>
        </div>
        <div className='skill-item tailwind'>
            <SiTailwindcss className='text-4xl size-20' />
            <p>Tailwind</p>
        </div>
        <div className='skill-item react'>
            <FaReact className='text-4xl size-20' />
            <p>React</p>
        </div>
        <div className='skill-item laravel'>
            <FaLaravel className='text-4xl size-20' />
            <p>Laravel</p>
        </div>
        <div className='skill-item sass'>
            <FaSass className='text-4xl size-20' />
            <p>Sass</p>
        </div>
        <div className='skill-item git'>
            <FaGitAlt className='text-4xl size-20' />
            <p>Git</p>
        </div>
    </div>
</div>

    <div className='grid grid-cols-2 lg:flex lg:flex-row gap-16 lg:pl-24 bg-black'>
        
    </div>
    </div>


    <div id='Experience' className='bg-black p-8 md:p-12 text-white'>
        <div className='text-center mb-8'>
            <h1 className='text-4xl font-bold'>
            My <span className='text-blue-600'>Experience</span>
            </h1>
            <p className="text-gray-400 mt-4 text-md">
            A journey of growth and learning through various roles.
            </p>
        </div>
        <div className="space-y-10 px-4 sm:px-0">
    {experiences.map((exp, index) => (
        <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <div className="text-left space-y-2">
                    <h2 className="text-3xl font-bold text-white tracking-wide">
                        {exp.role}
                    </h2>
                    <h3 className="text-lg text-blue-400 font-medium">
                        {exp.company}
                    </h3>
                </div>
                <div className="mt-4 sm:mt-0 text-sm text-gray-400 italic tracking-wide">
                    {exp.period}
                </div>
            </div>

            {/* Decorative line */}
            <div className="my-4 h-px bg-gradient-to-r from-blue-500 to-indigo-500 w-full" />

            <p className="mt-4 text-gray-300 leading-relaxed">
                {exp.description}
            </p>

            <button className="mt-6 text-sm font-semibold text-blue-500 hover:text-blue-400 focus:outline-none transition duration-300 transform hover:translate-x-1">
                View More
            </button>
        </div>
    ))}
</div>

    </div>

        <div className='bg-black p-6'>
    <div className='text-white text-center'>
        <h1 className='text-4xl font-bold'>My <span className='text-blue-900'>PROJECTS</span></h1>
    </div>
    <div className='flex flex-col items-center mt-6'>
            {/* Navigation Tabs */}
            <div className='flex gap-4 mb-6'>
        <button 
            onClick={() => setActiveTab('personal')}
            className={`p-2 px-4 text-lg font-semibold rounded-full shadow-md transition duration-300 
                        ${activeTab === 'personal' 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'}`
            }
        >
            Personal Projects
        </button>
        <button 
            onClick={() => setActiveTab('professional')}
            className={`p-2 px-4 text-lg font-semibold rounded-full shadow-md transition duration-300 
                        ${activeTab === 'professional' 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'}`
            }
        >
            Professional Projects
        </button>
    </div>

            {/* Project Sections */}
            <div className='flex flex-wrap justify-around gap-5'>
                {activeTab === 'personal' && (
                    <>
                        {/* Personal Projects */}
                        <div className='flex flex-col gap-3 items-center bg-gray-800 p-4 rounded-lg shadow-lg animate-project'>
                            <h2 className='text-2xl font-semibold text-white'>Manage Events Application</h2>
                            <img src={img4} className='w-full max-w-[500px] border-4 border-blue-900 rounded-lg' alt="Project 1" />
                            <div className='flex gap-4 mt-4'>
                                <a href='https://github.com/essalmimohamed1/final-project-laravel-essalmi_mohamed' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                                    <button className='flex items-center gap-2 border-2 border-blue-900 bg-blue-900 text-slate-50 p-2 rounded-2xl hover:bg-slate-600 hover:border-slate-600 hover:text-white transition duration-300'>
                                        <FaGithub /> View Code
                                    </button>
                                </a>
                                <a href='https://www.youtube.com/watch?v=rLUxbHOpIKw&t=7s' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                                    <button className='flex items-center gap-2 border-2 border-white text-white p-2 rounded-2xl hover:bg-yellow-500 hover:text-white transition duration-300'>
                                        <FaExternalLinkAlt /> View Project
                                    </button>
                                </a>
                            </div>
                            <div className='flex gap-3 mt-4 text-2xl'>
                                <FaLaravel className='text-red-600' title='Laravel' />
                                <FaHtml5 className='text-orange-600' title='HTML5' />
                                <SiTailwindcss className='text-teal-500' title='Tailwind CSS' />
                                <SiSass className='text-pink-600' title='SASS' />
                                <SiMysql className='text-blue-500' title='MySQL' /> 
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 items-center bg-gray-800 p-4 rounded-lg shadow-lg animate-project'>
                            <h2 className='text-2xl font-semibold text-white'>WEB SHOP</h2>
                            <img src={img3} className='w-full max-w-[500px] border-4 border-blue-900 rounded-lg' alt="Project 3" />
                            <div className='flex gap-4 mt-4'>
                                <a href='https://github.com/essalmimohamed1/final-project-react-Mohamed-Essalmi.git' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                                    <button className='flex items-center gap-2 border-2 border-blue-900 bg-blue-900 text-slate-50 p-2 rounded-2xl hover:bg-slate-600 hover:border-slate-600 hover:text-white transition duration-300'>
                                        <FaGithub /> View Code
                                    </button>
                                </a>
                                <a href='https://essalmimohamed1.github.io/final-project-react-Mohamed-Essalmi/' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                                    <button className='flex items-center gap-2 border-2 border-white text-white p-2 rounded-2xl hover:bg-yellow-500 hover:text-white transition duration-300'>
                                        <FaExternalLinkAlt /> View Project
                                    </button>
                                </a>
                            </div>
                            <div className='flex gap-3 mt-4 text-2xl'>
                                <FaReact className='text-blue-500' title='React' />
                                <FaHtml5 className='text-orange-600' title='HTML5' />
                                <SiTailwindcss className='text-teal-500' title='Tailwind CSS' />
                                <BsBootstrapFill className='text-purple-600' title='Bootstrap' />
                                <SiSass className='text-pink-600' title='SASS' />
                            </div>
                        </div>
                    </>
                )}
                
                {activeTab === 'professional' && (
                    <>
                        {/* Professional Projects */}
                        <div className='flex flex-col gap-3 items-center bg-gray-800 p-4 rounded-lg shadow-lg animate-project'>
                            <h2 className='text-2xl font-semibold text-white'>2M PROJECT</h2>
                            <img src={img7} className='w-full max-w-[500px] border-4 border-blue-900 rounded-lg' alt="Project 3" />
                            <div className='flex gap-3 mt-4 text-2xl'>
                                <FaLaravel className='text-red-600' title='Laravel' />
                                <FaHtml5 className='text-orange-600' title='HTML5' />
                                <SiTailwindcss className='text-teal-500' title='Tailwind CSS' />
                                <SiSass className='text-pink-600' title='SASS' />
                                <SiMysql className='text-blue-500' title='MySQL' />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
</div>


<div id='Contact' className="bg-black p-2 text-white text-center">
                <h1>Contact <span className="text-blue-900">Me</span></h1>
            </div>
            <div className="flex flex-col items-center bg-black p-6 text-white">
                <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg flex items-center pt-10 flex-col gap-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="border-2 border-blue-900 p-2 lg:w-[30vw] w-[80vw]  rounded-xl bg-black"                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="border-2 border-blue-900 p-2 lg:w-[30vw] w-[80vw]  rounded-xl bg-black"                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="border-2 border-blue-900 p-2 lg:w-[30vw] w-[80vw]  rounded-xl bg-black"                        rows="5"
                        required
                    ></textarea>
                    <button type="submit" className="border-none bg-blue-900 p-2 w-[80vw] lg:w-[15vw] text-white rounded-2xl hover:bg-yellow-500">
                        Send
                    </button>
                </form>
            </div>
    </>
    )
}

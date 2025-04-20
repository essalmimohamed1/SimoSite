import './section1.scss';
import { TypeAnimation } from 'react-type-animation';
import { FaHtml5 ,FaJs, FaCss3Alt, FaReact, FaLaravel, FaSass, FaGitAlt, FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt, FaBriefcase } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { SiPython} from 'react-icons/si';


import { SiTailwindcss ,SiBootstrap, SiSass, SiMysql } from "react-icons/si";
import img2 from '../../../assets/images/WhatsApp Image 2024-03-10 at 00.15.59.jpeg';
import img3 from '../../../assets/images/RcaShop.jpeg';
import img4 from '../../../assets/images/manager.jpeg';
import img7 from '../../../assets/images/2Mprj.jpeg';
import img8 from '../../../assets/images/organigram.jpeg';

import certificate1 from '../../../assets/images/17-short-specializations-certificate-essalmi-mohamed.jpg';
import certificate2 from '../../../assets/images/lionsgeek.jpeg';


import { useRef } from "react";
import emailjs from "@emailjs/browser";
import img5 from '../../../assets/images/P1085112-removebg-preview.png';
import { FaXTwitter } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import { TbFileCv } from "react-icons/tb";
import { FaPhp } from 'react-icons/fa';

import { FaPhone, FaEnvelope } from 'react-icons/fa';




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
        
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);


const certificates = [
    {
        title: 'Back-End Development',
        issuer: 'ALX AFRICA',
        date: 'Oct 2024',
        imageUrl: certificate1
    },
    {
        title: 'Full-Stack Web Development',
        issuer: 'Lionsgeek',
        date: 'May 2024',
        imageUrl: certificate2
    }
];

    const openModal = (imageUrl) => {
        setCurrentImage(imageUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    const experiences = [
        {
          logo: "https://festivalculturesoufie.com/wp-content/uploads/2020/10/sponsors-partenaires-_0013_LOGO-2M.jpg", // Example 2M logo
          company: "2M TV",
          duration: "6 mos",
          location: "On-site",
          role: "Full Stack Developer",
          type: "Contract",
          period: "Nov 2024 - Dec 2024",
          place: "Aïn Sebaâ, Casablanca-Settat, Morocco",
          skills: ["PHP", "Laravel", "+3 skills"]
        },
        {
          logo: "https://festivalculturesoufie.com/wp-content/uploads/2020/10/sponsors-partenaires-_0013_LOGO-2M.jpg",
          company: "2M TV",
          duration: "2 month",
          location: "On-site",
          role: "Full-stack Developer",
          type: "Internship",
          period: "Jul 2024 - Oct 2024",
          place: "Aïn Sebaâ, Casablanca-Settat, Morocco",
          skills: ["React", "Node.js", "+2 skills"]
        },
        {
          logo: "https://logowik.com/content/uploads/images/freelancer.jpg",
          company: "Freelance",
          duration: "3 month",
          location: "On-site",
          role: "Full Stack Developer",
          type: "Freelance",
          period: "May 2024 - Jul 2024",
          place: "Remote",
          skills: ["Laravel", "Tailwind", "MySQL"]
        }
      ];
      
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
        { name: "Sass", icon: <FaSass className="text-pink-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> },
        { name: "Python", icon: <SiPython className="text-yellow-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-500" /> }
    ];

    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_e3061fd",   // your service ID
          "template_o2ey5yc",  // your template ID
          form.current,
          "Ln92AU9ouB2tY4mXC"  // your public key
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message sent");
            setIsSubmitted(true); // Hide the form after submit
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
    <>  
        <div id='Home' className='hero-section py-12 bg-black gap-lg-0 gap-14 flex flex-lg-row flex-col fle d-lg-flex justify-around items-center pt-24'>
            <div className='p-12 content'>
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
                            style={{ fontSize: '3em', display: 'inline-block' , color: 'rgba(0, 255, 213, 0.531)' }}
                            repeat={Infinity}
                        /> 
                    <h3 className='text-white font-poppins'>Full-Stack Web Developer</h3>
                    <p className='text-white font-creative lg:w-[40vw]'>I am Essalmi Mohamed, a dedicated and passionate Web Developer with a strong background in crafting robust and user-centric web solutions. With 2 years of experience in the field, I bring a wealth of knowledge and expertise in front-end and back-end development, coupled with a keen eye for design and usability.
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
            <div className='image'>
                <img src={img5} className='' alt="" />
            </div>
        </div>
        



        <div className="skills-section" id='SKILLS'>
      <h1 className="title">
        <span style={{ fontFamily: 'CreativeTypography' }}>Skills</span>
      </h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>




        <div className="exp-section">
                <h1 style={{ fontFamily: 'CreativeTypography' }} className="titlecert">
                    Certificates
                </h1>
                <p className="text-gray-400 text-center mb-10 text-lg max-w-xl mx-auto">
                    Showcasing my professional growth and achievements through certifications.
                </p>
            
      {/* Certificate Grid */}
      <div className=" gap-10 flex flex-lg-row flex-col justify-center items-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {/* Certificate Image */}
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-80 object-cover"
            />

            {/* Overlay with Text (Always Visible) */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h2 className="text-lg font-bold text-white">{cert.title}</h2>
              <p className="text-sm text-green-300">{cert.issuer}</p>
              <p className="text-xs text-gray-300">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div id="Experience" className="exp-sec">
        <div className='flex flex-col'>
            <h1 style={{ fontFamily: 'CreativeTypography' }}>
            Experience
            </h1>
            <p className="text-gray-400 text-center mb-10 text-lg max-w-xl mx-auto">
                    Showcasing my professional growth and achievements through certifications.
            </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="relative border-l border-[#00ff99] ml-4">
            {experiences.map((exp, index) => (
                <div key={index} className="mb-10 ml-6 relative">
                {/* Dot */}
                <div className="absolute w-4 h-4 bg-[#00ff99] rounded-full -left-2 top-2"></div>

                {/* Card */}
                <div className="bg-[#0f2a2ad5] shadow-md rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-2">
                    <img 
                        src={exp.logo} 
                        alt="Company Logo" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#00ff99]" 
                    />
                    <div>
                        <h2 className="text-lg font-semibold text-white">{exp.company}</h2>
                        <p className="text-gray-400 text-sm">{exp.duration} • {exp.location}</p>
                    </div>
                    </div>
                    <h3 className="text-md font-bold text-[#00ff99]">{exp.role}</h3>
                    <p className="text-gray-500 text-sm">{exp.type} • {exp.period}</p>
                    <p className="text-gray-400 mt-2 text-sm">{exp.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>



<div className="proj-sec flex flex-col p-6" id='Projects'>
    <div style={{ fontFamily: 'CreativeTypography' }} className="text-white text-center z-10">
            <h1 className="text-4xl text-teal-400 font-bold">
                Projects
            </h1>
    </div>

    <div className="flex flex-col items-center mt-6 z-10">
            {/* Navigation Tabs */}
            <div className="flex gap-4 mb-6">
            <button 
                onClick={() => setActiveTab('personal')}
                className={`p-2 px-4 text-lg font-semibold rounded-full shadow-md transition duration-300 
                ${activeTab === 'personal' 
                    ? 'bg-gradient-to-r from-teal-400 to-cyan-600 text-black shadow-lg' 
                    : 'bg-[#0f172a] text-gray-300 hover:bg-[#1a233a] hover:text-teal-400'}`
                }
            >
                Personal 
            </button>

            <button 
                onClick={() => setActiveTab('professional')}
                className={`p-2 px-4 text-lg font-semibold rounded-full shadow-md transition duration-300 
                ${activeTab === 'professional' 
                    ? 'bg-gradient-to-r from-teal-400 to-cyan-600 text-black shadow-lg' 
                    : 'bg-[#0f172a] text-gray-300 hover:bg-[#1a233a] hover:text-teal-400'}`
                }
            >
                Professional 
            </button>
            </div>

            <div className='flex flex-wrap justify-around gap-5'>
                        {activeTab === 'personal' && (
                            <>
                                {/* Personal Projects */}
                                <div className='flex flex-col gap-3 items-center p-4 rounded-lg shadow-lg animate-project'>
                                    <h2 className='text-2xl font-semibold text-white'>Manage Events Application</h2>
                                    <img src={img4} className='w-full max-w-[500px] border-1 border-[#00ff99] rounded-lg' alt="Project 1" />
                                    <div className='flex gap-4 mt-4'>
                                        <a href='https://github.com/essalmimohamed1/final-project-laravel-essalmi_mohamed' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                                            <button className='flex items-center gap-2 border-2 border-white text-slate-50 p-2 rounded-2xl hover:bg-slate-600 hover:border-slate-600 hover:text-white transition duration-300'>
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

                                <div className='flex flex-col gap-3 items-center  p-4 rounded-lg shadow-lg animate-project'>
                                    <h2 className='text-2xl font-semibold text-white'>WEB SHOP</h2>
                                    <img src={img3} className='w-full max-w-[500px] border-1 border-[#00ff99] rounded-lg' alt="Project 3" />
                                    <div className='flex gap-4 mt-4'>
                                        <a href='https://github.com/essalmimohamed1/final-project-react-Mohamed-Essalmi.git' target='_blank' rel='noopener noreferrer' className='text-decoration-none'>
                                            <button className='flex items-center gap-2 border-2 border-white  text-slate-50 p-2 rounded-2xl hover:bg-slate-600 hover:border-slate-600 hover:text-white transition duration-300'>
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
                                <div className='flex flex-col gap-3 items-center  p-4 rounded-lg shadow-lg animate-project'>
                                    <h2 className='text-2xl font-semibold text-white'>2M PROJECT</h2>
                                    <img src={img7} className='w-full max-w-[500px] border-1 border-[#00ff99] rounded-lg' alt="Project 3" />
                                    <div className='flex gap-3 mt-4 text-2xl'>
                                        <FaLaravel className='text-red-600' title='Laravel' />
                                        <FaHtml5 className='text-orange-600' title='HTML5' />
                                        <SiTailwindcss className='text-teal-500' title='Tailwind CSS' />
                                        <SiSass className='text-pink-600' title='SASS' />
                                        <SiMysql className='text-blue-500' title='MySQL' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 items-center p-4 rounded-lg shadow-lg animate-project'>
                                    <h2 className='text-2xl font-semibold text-white'>2M organigramme</h2>
                                    <img src={img8} className='w-full h-full max-w-[500px] border-1 border-[#00ff99] rounded-lg' alt="Project 3" />
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

    <section id="Contact" className="min-h-screen cont-sec flex flex-col lg:flex-row ">
    {/* Left - Contact Form */}
    <div className="w-full lg:w-1/2 flex z-10 justify-center items-center p-lg-10">
        {!isSubmitted ? (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[100VW] lg:w-full flex flex-col items-center max-w-lg rounded-2xl shadow-xl p-8 space-y-6"
        >
            <h1 style={{ fontFamily: 'CreativeTypography' }} className="text-3xl font-bold text-center text-[#00ff99]">CONTACT US</h1>

            <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full p-4 bg-black rounded-xl border border-[#00ff99] focus:ring-2 focus:ring-[#00ff99] outline-none text-white"
            />
            <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-4 rounded-xl bg-black border border-[#00ff99] focus:ring-2 focus:ring-[#00ff99] outline-none text-white"
            />
            <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-4 rounded-xl bg-black border border-[#00ff99] focus:ring-2 focus:ring-[#00ff99] outline-none text-white h-32 resize-none"
            ></textarea>

            <button
            type="submit"
            className="w-1/2  bg-[#00ff99] hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-all"
            >
            Submit
            </button>
        </form>
        ) : (
        <div className="text-center text-white space-y-4">
            <h2 className="text-2xl font-bold">Thank you!</h2>
            <p>We have received your message.</p>
        </div>
        )}
    </div>

    {/* Right - Updated Contact Info with Better Icons */}
    <div className="w-full lg:w-1/2 flex z-10 justify-center items-center  p-10">
    <div className="w-full max-w-md bg-teal-900 rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#00ff99]">Contact Information</h2>
        <p className="text-sm text-white">
        Feel free to connect with me using any of the options below.
        </p>

        <div className="space-y-6">
        {/* 📞 Better Phone Icon */}
        <div className="flex items-center space-x-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#00ff99]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h1.28c.446 0 .873.198 1.152.538l2.008 2.44c.277.336.375.782.26 1.195l-.57 2.08a.75.75 0 00.217.72l4.242 4.242a.75.75 0 00.72.217l2.08-.57a1 1 0 011.195.26l2.44 2.008c.34.279.538.706.538 1.152V19a2 2 0 01-2 2h-1c-9.389 0-17-7.611-17-17V5z"
                />
            </svg>
            <span className="text-base text-[#00ff99]">07-77-42-47-27</span>
        </div>



        {/* 📧 Better Email Icon */}
        <div className="flex items-center space-x-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#00ff99]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
            <a
                href="mailto:example@example.com"
                className="text-base no-underline text-[#00ff99] hover:underline"
            >
                essalmisimo0@gmail.com
            </a>
        </div>


        {/* LinkedIn */}
        <div className="flex items-center space-x-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#00ff99]"
            fill="currentColor"
            viewBox="0 0 24 24"
            >
            <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z" />
            <path d="M2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
            <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            className="text-base no-underline text-[#00ff99] hover:underline"
            >
            Your LinkedIn
            </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#00ff99]"
            fill="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                fillRule="evenodd"
                d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.08 1.85 2.83 1.32 3.52 1 .1-.78.42-1.32.76-1.62-2.66-.3-5.46-1.34-5.46-5.94 0-1.3.46-2.36 1.22-3.2-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.22a11.52 11.52 0 016 0c2.28-1.54 3.28-1.22 3.28-1.22.66 1.65.24 2.87.12 3.17.76.84 1.2 1.9 1.2 3.2 0 4.6-2.8 5.64-5.46 5.94.44.38.82 1.1.82 2.22v3.3c0 .32.22.7.84.58A12 12 0 0012 0z"
                clipRule="evenodd"
            />
            </svg>
            <a
            href="https://github.com/your-username"
            target="_blank"
            className="text-base no-underline text-[#00ff99] hover:underline"
            >
            Your GitHub
            </a>
        </div>
        </div>
    </div>
    </div>



    </section>

    </>
    )
}

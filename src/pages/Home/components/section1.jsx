import './section1.scss'
import { TypeAnimation } from 'react-type-animation';
import img1  from '../../../assets/images/WhatsApp Image 2024-02-21 at 16.07.18.jpeg'
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
import img5  from '../../../assets/images/P1083180-removebg-preview.png'






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
                        style={{ fontSize: '3em', display: 'inline-block' , color: 'red' }}
                        repeat={Infinity}
                    /> 
                <h3 className='text-white'>Web devlopper</h3>
                <p className='text-white lg:w-[40vw]'>I am Essalmi mohamed , a dedicated and passionate Web Developer with a strong background in crafting robust and user-centric web solutions. With 2ére of experience in the field, I bring a wealth of knowledge and expertise in front-end and front-end development, coupled with a keen eye for design and usability.</p>
            </div>
            <div className='image '>
                <img src={img5} className='lg:h-[50vh] lg:pl-12 pl-14  ' alt="" />
            </div>
        </div>
        <div className='bg-black p-2 text-white text-center '  >
            <h1>About <span className='text-red-600'>Me</span></h1>
        </div>
        <div className='d-lg-flex flex-lg-row flex-col gap-lg-0 gap-4 flex flex-col lg:items-center p-12 justify-around text-white bg-black'>
        <div >
                <img src={img1} className='lg:w-[32vw] w-[100vw] rounded h-[50vh]' alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='text-red-600'>Full-Stack web Developer </h2>
                <p className='lg:w-[40vw]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit quia quisquam illo autem iure libero,
                    sapiente dolore molestias rem est eius ipsum voluptas eaque. Ipsum ea ut ipsam voluptatibus!</p>
                <button className='bg-red-800 lg:w-[10vw] lg:h-[7vh] rounded-xl text-white button2'>Read More</button>
            </div>
        </div>
        <div className='bg-black p-2 text-white text-center'>
            <h1>My <span className='text-red-600'>SKILLS</span></h1>
        </div>
    <div className='flex flex-col'>
        <div className='d-lg-flex flex flex-lg-row flex-col  gap-2 p-5 bg-black justify-around'>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <FaHtml5 className='size-20' />
                <p>HTML</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <FaCss3Alt className='size-20' />
                <p>CSS</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <IoLogoJavascript className='size-20' />
                <p>JS.script</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <BsBootstrapFill className='size-20' />
                <p>Bootstrap</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <SiTailwindcss  className='size-20' />
                <p>Tailwind</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <FaReact  className='size-20' />
                <p>React</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <FaLaravel className='size-20' />
                <p>Laravel</p>
            </div>
        </div>
        <div className='d-lg-flex flex flex-lg-row flex-col  gap-16 lg:pl-24 bg-black'>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <FaSass  className='size-20' />
                <p>Sass</p>
            </div>
            <div className='flex flex-col bg-black text-2xl text-red-600 items-center justify-center '>
                <FaGitAlt className='size-20' />
                <p>Git</p>
            </div>
        </div>
    </div>
        <div className='bg-black p-2 text-white text-center'>
            <h1>My <span className='text-red-600'>PROJECT</span></h1>
        </div>
    <div className='bg-black p-6 d-lg-flex flex-lg-row flex-col gap-lg-0 gap-5 flex justify-around'>
        <div className='flex flex-col gap-3 items-center justify-center'>
            <img src={img2} className='lg:w-[40vw] border-4 border-red-600' alt="" />
            <button className='border-1 border-white text-white p-2 rounded-2xl'>View project</button>
        </div>
        <div className='flex flex-col gap-3 items-center justify-center'>
            <img src={img3} className='lg:w-[40vw] border-4 border-red-600' alt="" />
            <button className='border-1 border-white text-white p-2 rounded-2xl'>View project</button>
        </div>
    </div>
    <div className='bg-black p-2 text-white text-center'>
            <h1>Contact <span className='text-red-600'>Us</span></h1>
        </div>
        <form className="flex bg-black flex-col items-center justify-center gap-3 p-4 " ref={form} onSubmit={sendEmail}>
                <input className="border-2 border-red-600 p-2 lg:w-[30vw] w-[80vw]  rounded-xl bg-black" type="text" name="to_name" placeholder='Your Name' />
                <input className="border-2 border-red-600 p-2 lg:w-[30vw] w-[80vw]  rounded-xl bg-black" type="email" name="to_email" placeholder='Your Email'/>
                <textarea className="border-2 border-red-600 p-2 h-60 w-[80vw] lg:w-[30vw] rounded-xl bg-black" name="message" placeholder='Your Message'/>
                <input className="border-none bg-red-600 p-2 w-[80vw] lg:w-[15vw] text-white rounded-2xl"   type="submit" value="Send" />
            </form>
    </>
    )
}

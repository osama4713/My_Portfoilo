import { BsArrowRightCircle } from "react-icons/bs";
import SkillCircle from "../components/Home/SkillCircle ";
import { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Typed from 'typed.js';
import ImageProject from "../components/Home/ImageProject";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import ImageHome from '../../public/image/Home_img.jpg'
// import manImage from '../../public/image/Home2.png'
// import birdsImage from '../../public/image/birds.png'
// import ProjectImage1 from '../../public/image/Project_1.webp'
// import ProjectImage2 from '../../public/image/Project_2.webp'
// import ProjectImage3 from '../../public/image/Project_3.webp'
// import ProjectImage4 from '../../public/image/Project_4.webp'
// import ProjectImage5 from '../../public/image/Project_5.webp'
// import ProjectImage6 from '../../public/image/Project_6.webp'
// import manImage2 from '../../public/image/connect.png'


const Home = () => {

    useEffect(() => {
        const myElement = document.querySelector("#description");

        const typed = new Typed(myElement, {
            showCursor: true,
            backDelay: 1200,
            backSpeed: 80,
            loop: true,
            strings: [
                " Full Stack Web Developer",
                " Frontend Web Developer",
                " Backend Web Developer"
            ]
        });
        return () => {
            typed.destroy();
        };
    }, []);

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = scrollRef.current.clientWidth / 1.2; // Adjust scrolling amount for responsiveness
        if (direction === 'left') {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // ////////////////////////////////////////////////////////////////

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        country: 'United States',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form Data:', formData);
    };

    // ////////////////////////////////////////////////////////////////

    const [activeSection, setActiveSection] = useState('first');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <section className="relative h-[125vh] w-full" id="home">
                <img className="absolute contrast-200 z-0 w-full h-full object-cover" src="image/Home_img.jpg" alt="Background" />
                <img className="absolute contrast-125 h-96 w-auto bottom-32 right-28 transform translate-y-1/2 animate-moveUpDown" src="image/Home2.png" alt="Overlay" />
                <img className="absolute contrast-125 h-40 w-auto bottom-96 right-20 transform -translate-x-1/2 -translate-y-1/2 animate-moveUpDown" src="image/birds.png" alt="Overlay" />


                <div className="absolute w-[90%] md:w-[500px] mt-36 md:ml-28 mx-5 sm:mx-10">
                    <div>
                        <h2 className="text-center text-white text-2xl font-bold border p-3 bg-gradient-to-r from-indigo-900 to-indigo-400">
                            Welcome All In My Portfolio
                        </h2>
                        <p className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
                            Hi! I’m Osama Tamer Rizk, <span id="description"></span>
                        </p>
                    </div>

                    <div className="mt-5">
                        <span className="block text-gray-400 text-lg sm:text-xl md:text-2xl font-bold">
                            Hello everyone, I have 2 years of experience in web development
                        </span>
                        <a href="#" className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-5 inline-block">
                            Let’s Connect <BsArrowRightCircle className="inline ml-2" />
                        </a>
                    </div>
                </div>

            </section>

            <section className="w-full h-[80vh]" id="skills">
                <div className="w-[80%] mx-auto h-[75vh] -mt-16 rounded-[60px] bg-zinc-950 z-10	relative">
                    <div className="p-12">
                        <h2 className="text-5xl font-bold text-white text-center">Skills</h2>
                        <h2 className="text-2xl text-gray-400 text-center mt-5">You Can See My Skills Here </h2>
                    </div>

                    <div className="skill-carousel-container relative">
                        <button
                            onClick={() => scroll('left')}
                            className="left-arrow absolute left-2 top-[80px] transform -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full"
                        >
                            <FaAngleLeft className="text-[22px]" />
                        </button>
                        <div className="skill-carousel flex overflow-x-auto mx-auto" ref={scrollRef}>
                            <SkillCircle percentage={95} skillName="HTML" />
                            <SkillCircle percentage={95} skillName="CSS" />
                            <SkillCircle percentage={95} skillName="HTML5" />
                            <SkillCircle percentage={95} skillName="CSS3" />
                            <SkillCircle percentage={90} skillName="BOOTSTRAP" />
                            <SkillCircle percentage={90} skillName="TAILWIND" />
                            <SkillCircle percentage={80} skillName="JS" />
                            <SkillCircle percentage={85} skillName="REACT" />
                            <SkillCircle percentage={85} skillName="NODEJS" />
                            <SkillCircle percentage={90} skillName="MONGODB" />
                            <SkillCircle percentage={85} skillName="EXPRESSJS" />
                            <SkillCircle percentage={80} skillName="GIT & GITHUB" />
                        </div>
                        <button
                            onClick={() => scroll('right')}
                            className="right-arrow absolute right-2 top-[80px] transform -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full"
                        >
                            <FaAngleRight className="text-[22px]" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-full h-full mt-10" id="projects">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-4">
                    My Project
                </h2>
                <p className="text-gray-400 text-lg sm:text-xl md:text-2xl text-center mx-auto mt-4 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
                    My name is Osama, I live in Sohag, this is the 2nd project in React Dev.
                </p>

                <div className="flex items-center justify-center mt-20">
                    <div className="inline-flex flex-wrap rounded-full shadow-sm" role="group">
                        <button
                            type="button"
                            className={`w-full sm:w-[200px] lg:w-[300px] h-[60px] px-4 py-2 text-xl font-bold text-white ${activeSection === 'first' ? 'bg-blue-700' : 'bg-zinc-900'} border border-gray-200 rounded-l-full `}
                            onClick={() => handleSectionChange('first')}
                        >
                            1st Section
                        </button>
                        <button
                            type="button"
                            className={`w-full sm:w-[200px] lg:w-[300px] h-[60px] px-4 py-2 text-xl font-bold text-white ${activeSection === 'second' ? 'bg-blue-700' : 'bg-zinc-900'} border-t border-b border-gray-200 `}
                            onClick={() => handleSectionChange('second')}
                        >
                            2nd Section
                        </button>
                        <button
                            type="button"
                            className={`w-full sm:w-[200px] lg:w-[300px] h-[60px] px-4 py-2 text-xl font-bold text-white ${activeSection === 'third' ? 'bg-blue-700' : 'bg-zinc-900'} border border-gray-200 rounded-r-full `}
                            onClick={() => handleSectionChange('third')}
                        >
                            3rd Section
                        </button>
                    </div>
                </div>

                {activeSection === 'first' && (
                    <div className="w-[80%] mx-auto h-full mt-16">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <ImageProject linkImage="image/Project_1.webp" altImage="project_1" />
                            <ImageProject linkImage="image/Project_2.webp" altImage="project_2" />
                            <ImageProject linkImage="image/Project_3.webp" altImage="project_3" />
                            <ImageProject linkImage="image/Project_4.webp" altImage="project_4" />
                            <ImageProject linkImage="image/Project_5.webp" altImage="project_5" />
                            <ImageProject linkImage="image/Project_6.webp" altImage="project_6" />
                        </div>
                    </div>
                )}

                {(activeSection === 'third') && (
                    <div className="w-[80%] mx-auto h-full mt-10">
                        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl text-center mx-auto mt-4 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
                            My name is Osama, I live in Sohag, this is the 2nd project in React Dev.
                        </p>
                    </div>
                )}

                {(activeSection === 'first' || activeSection === 'second' || activeSection === 'third' ) && (
                    <div id="about" className="w-full h-[135vh] mt-20 bg-gradient-to-r from-sky-400 to-indigo-700 flex justify-center relative">
                        <div className="max-w-6xl w-full mx-4 lg:mx-auto py-8 lg:py-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex items-center justify-center">
                                    <img className="contrast-125 h-96 sm:h-auto max-w-md mt-12 sm:mt-0 animate-moveUpDown" src="image/connect.png" alt="Overlay" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 mt-10 sm:mt-0">Get In Touch</h2>
                                    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8">
                                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                autoComplete="given-name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="block w-full rounded-[20px] border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                autoComplete="family-name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="block w-full rounded-[20px] border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full rounded-[20px] border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <input
                                                type="number"
                                                name="phone"
                                                placeholder="Phone No"
                                                autoComplete="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="block w-full rounded-[20px] border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <div className="col-span-2">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    placeholder="Message"
                                                    autoComplete="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="block w-full h-[200px] rounded-[20px] border-0 p-5 pt-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <button
                                                    type="submit"
                                                    className="w-full rounded-[20px] bg-gradient-to-r from-cyan-300 to-blue-600 p-5 text-white font-bold shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </section>

            <section className="w-full h-[60vh] py-16">
                <div className="w-[90%] h-[42vh] lg:w-[80%] mx-auto bg-white rounded-[30px] lg:rounded-[60px] p-8 -mt-48 shadow-md relative">
                    <div className="flex flex-col lg:flex-row justify-center items-center p-10">
                        <div className="mb-8 lg:mb-0 lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold lg:w-96 ">See My Projects At Once & Leave Here Your E-mail Address.</h2>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex items-center">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-[20px] border-2 border-blue-300 p-5 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <button
                                type="button"
                                className="absolute right-1.5 h-[45px] sm:h-[55px] w-[100px] sm:w-[150px] bg-gradient-to-r from-cyan-300 to-blue-600 rounded-[20px] text-white font-bold text-sm sm:text-xl flex items-center justify-center"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] h-[10vh] lg:w-[80%] mx-auto mt-32">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div>
                            <span className="self-center text-5xl italic font-bold whitespace-nowrap text-white">Portfolio</span>
                        </div>
                        <div>
                            <div className="flex justify-around	w-[160px] ml-auto">
                                <a href="https://www.linkedin.com/in/osama-tamer-384378235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-1xl text-white border rounded-full p-3 bg-slate-800 icon-NB">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/osama4713" className="text-1xl text-white border rounded-full p-3 bg-slate-800 icon-NB">
                                    <FaGithubSquare />
                                </a >
                                <a href="osamatamer.rizk.fahmy@gmail.com" className="text-1xl text-white border rounded-full p-3 bg-slate-800 icon-NB">
                                    <SiGmail />
                                </a>
                            </div>
                            <h2 className="text-xl sm:text-1xl md:text-1xl lg:w-full text-gray-400">--copyrights 2023-- All Reserved Here By Osama Tamer.</h2>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home; 

import { useRef, useState } from 'react'

import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InlineWidget } from "react-calendly";
import emailjs from '@emailjs/browser';
import 'leaflet/dist/leaflet.css';

import logo from './images/icon/Logo_Compina.png';

import portadaImg1 from './images/PORTADA/IMG-1.webp';
import portadaImg2 from './images/PORTADA/IMG-2.webp';
import portadaImg3 from './images/PORTADA/IMG-3.webp';
import portadaImg4 from './images/PORTADA/IMG-4.webp';
import portadaImg5 from './images/PORTADA/IMG-5.webp';
import portadaImg6 from './images/PORTADA/IMG-6.webp';

import we from './images/NOSOTROS/OFICIAL/Nosotros.jpg'
import portada from './images/productos/PORTADA.png';
import agenda from './images/productos/Agenda.jpg';
import brochure from './images/productos/Brochure.png';
// servicio
import servicesImg1 from './images/SERVICIOS/OFICIALES/img1.webp';
import servicesImg2 from './images/SERVICIOS/OFICIALES/img2.webp';
import servicesImg3 from './images/SERVICIOS/OFICIALES/img3.webp';
import servicesImg4 from './images/SERVICIOS/OFICIALES/img4.webp';
import servicesImg5 from './images/SERVICIOS/OFICIALES/img5.webp';
import servicesImg6 from './images/SERVICIOS/OFICIALES/img6.webp';
import servicesImg7 from './images/SERVICIOS/OFICIALES/img7.webp';
import servicesImg8 from './images/SERVICIOS/OFICIALES/img8.webp';
// proyectos
import proyecto1 from './images/PROYECTOS/Proyecto 1.webp';
import proyecto2 from './images/PROYECTOS/Proyecto 2.webp';
import proyecto3 from './images/PROYECTOS/Proyecto 3.webp';
import proyecto4 from './images/PROYECTOS/Proyecto 4.webp';
import proyecto5 from './images/PROYECTOS/Proyecto 5.webp';
import proyecto6 from './images/PROYECTOS/Proyecto 6.webp';
import proyecto7 from './images/PROYECTOS/Proyecto 7.webp';
import proyecto8 from './images/PROYECTOS/Proyecto 8.webp';
import proyecto9 from './images/PROYECTOS/Proyecto 9.webp';

import marketing from './images/SERVICIOS/marketing.webp'
import GESTIÓN_SOSTENIBLE from './images/SERVICIOS/GESTION_SOSTENIBLE.webp'
import MARKETING from './images/SERVICIOS/marketingDOS.webp'
import CREATIVIDAD from './images/SERVICIOS/CREATIVIDAD.webp'
import ENERGIA_RENOVABLE from './images/SERVICIOS/ENERGIA_RENOVABLE.webp'
import ECONOMIA_CIRCULAR from './images/SERVICIOS/ECONOMIA_CIRCULAR.webp'
import ASOCIACIONES_ESTRATEGICAS from './images/SERVICIOS/ASOCIACIONES_ESTRATEGICAS.webp'

import depsa from './images/uploads/DEPSA.webp'
import jockey from './images/uploads/JOCKEY-PLAZA.webp'
import ministerio from './images/uploads/MINISTERIO-RE.webp'
import onpe from './images/uploads/ONPE.webp'
import pamer from './images/uploads/PAMER.webp'
import sise from './images/uploads/SISE.webp'
import ucv from './images/uploads/UCV.webp'

// marcas
import agua from './images/NUESTRASMARCAS/OFICIALES/AGUAFLOR.webp';
import causacircular from './images/NUESTRASMARCAS/OFICIALES/CAUSACIRCULAR.webp';
import compipro from './images/NUESTRASMARCAS/OFICIALES/COMPIPRO.webp';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import './App.css'
const GoogleMapEmbed = () => {

  return (
    <section>
      <iframe
        height="400"
        allowFullScreen
        style={{ border: 0, width: '100%', verticalAlign: 'bottom', display: 'block' }}
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5517.257715941434!2d-77.02974721743261!3d-12.092264877531202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDA1JzMxLjQiUyA3N8KwMDEnMzUuNCJX!5e0!3m2!1ses!2spe!4v1717364254242!5m2!1ses!2spe"
        width="1920"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
function App() {
  const [mensajeEnviado, setMensajeEnviado] = useState(null);
  const [sale, setSale] = useState(false);
  const form = useRef(null);
  const ref = form.current
  const sendEmail = (event) => {
    event.preventDefault();
    const serviceId = "service_0j5p4is";
    const templateId = "template_c2csmmu";
    const apikey = "FiOIebaYfaTGEnXXt";

    if (ref) {
      emailjs.sendForm(serviceId, templateId, ref, apikey)
        .then((result) => {
          console.log(result.text);
          setMensajeEnviado("Mensaje enviado exitosamente");
        })
        .catch(error => console.log(error.message));
    }
  }
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  const handleScroll = (e, ref) => {
    e.preventDefault();
    const offset = 100; // Ajusta este valor según sea necesario

    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset + window.scrollY;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };
  return (
    <div  >
      <nav className='fixed z-50 w-full'>
        <div className='relative z-50'>
          <div className='bg-mysin-400'>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
              <span className='grid sm:flex gap-0 sm:gap-2 text-sm text-gray-500'>

                <h5 >(511) 7804649 - (51) 946570562</h5><a href="mailto:info@compina.net" className='transition-all duration-200 hover:text-blue-600'> info@compina.net</a>
              </span>
            </div>
          </div>

          <div className='bg-black '>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="Flowbite Logo" />
              </a>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={sale}
                onClick={() => setSale(!sale)}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-xs md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black">
                  <li onClick={(e) => handleScroll(e, section1Ref)}>
                    <a href="#seccion1" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">WE</a>
                  </li>
                  <li onClick={(e) => handleScroll(e, section2Ref)}>
                    <a href="#seccion2" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">SERVICES</a>
                  </li>
                  <li onClick={(e) => handleScroll(e, section3Ref)}>
                    <a href="#seccion3" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">PROJECTS</a>
                  </li>
                  <li onClick={(e) => handleScroll(e, section4Ref)}>
                    <a href="#seccion4" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">CUSTOMERS</a>
                  </li>
                  <li onClick={(e) => handleScroll(e, section5Ref)}>
                    <a href="#seccion5" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">LOCATE US</a>
                  </li>
                  <li onClick={(e) => handleScroll(e, section6Ref)}>
                    <a href="#seccion6" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">CONTACT US</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`z-20 absolute inset-x-0 transition-transform rounded-b-lg duration-300 ease-in-out ${sale ? 'translate-y-0' : '-translate-y-full'} mt-0 md:hidden container mx-auto bg-black grid z-30`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-xs md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black">
            <li onClick={(e) => handleScroll(e, section1Ref)}>
              <a href="#seccion1" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">WE</a>
            </li>
            <li onClick={(e) => handleScroll(e, section2Ref)}>
              <a href="#seccion2" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">SERVICES</a>
            </li>
            <li onClick={(e) => handleScroll(e, section3Ref)}>
              <a href="#seccion3" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">PROJECTS</a>
            </li>
            <li onClick={(e) => handleScroll(e, section4Ref)}>
              <a href="#seccion4" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">CUSTOMERS</a>
            </li>
            <li onClick={(e) => handleScroll(e, section5Ref)}>
              <a href="#seccion5" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">LOCATE US</a>
            </li>
            <li onClick={(e) => handleScroll(e, section6Ref)}>
              <a href="#seccion6" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 transition-all duration-200 hover:text-mysin-400">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section className='pt-20'>
          <div >
            <Swiper
              spaceBetween={30}
              effect={'fade'}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              className="h-[80vh] mySwiper max-h-[1000px]"
              loop={true}
            >
              <SwiperSlide className='relative'>
                <img className='w-full h-full object-cover' src={portadaImg1} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
                <div className="w-full lg:w-[80vw]  px-2 absolute inset-x-0 inset-y-0 flex items-center justify-center lg:justify-end">

                  <article className="p-2 sm:p-4 bg-mysin-400 max-w-[600px] rounded-md">
                    <p className="text-4xl md:text-5xl lg:text-7xl text-white border-8 rounded border-white p-5 lg:p-10 font-semibold text-center">
                      Commercial, logistical and marketing partner
                    </p>
                  </article>

                </div>

              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full h-full object-cover' src={portadaImg2} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
                <div className="w-full lg:w-[80vw]  px-2 absolute inset-x-0 inset-y-0 flex items-center justify-center lg:justify-end">
                  <article className="p-1 sm:p-4 bg-mysin-400 max-w-[600px]  rounded-md">
                    <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white border-4 md:border-6 lg:border-8 rounded border-white p-1  md:p-5 sm:p-3 lg:p-10 font-semibold'>
                      Communicating Sustainable Marketing and Experiences
                    </p>
                  </article>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full h-full object-cover' src={portadaImg3} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
                <div className="w-full lg:w-[80vw]  px-2 absolute inset-x-0 inset-y-0 flex items-center justify-center lg:justify-end">
                  <article className="p-1 sm:p-4 bg-mysin-400 max-w-[600px]  rounded-md">
                    <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white border-4 md:border-6 lg:border-8 rounded border-white p-1  md:p-5 sm:p-3 lg:p-10 font-semibold'>
                      Sustainable Management, Environmental Preservation, Native Culture and Tourism
                    </p>
                  </article>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <img className='w-full h-full object-cover' src={portadaImg5} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
                <div className="w-full lg:w-[80vw]  px-2 absolute inset-x-0 inset-y-0 flex items-center justify-center lg:justify-end">
                  <article className="p-1 sm:p-4 bg-mysin-400 max-w-[600px]  rounded-md">
                    <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white border-4 md:border-6 lg:border-8 rounded border-white p-1  md:p-5 sm:p-3 lg:p-10 font-semibold'>
                      Eco-sustainable advertising solutions and branding
                    </p>
                  </article>
                </div>
              </SwiperSlide>

            </Swiper>

          </div>
          <section>
            <div class="inset-x-0 relative  w-full grid grid-cols-4">
              <a href="#seccion6" onClick={(e) => handleScroll(e, section6Ref)} className='cursor-pointer h-[80px] py-4 col-span-4 md:col-span-2 lg:col-span-1 flex justify-center items-center bg-mysin-400 text-white'><i class="fa-solid fa-envelope text-2xl"></i><h3 className='px-2'>CONTACT US</h3></a>
              <a href='../public/presentacion.pdf'
                download className='cursor-pointer h-[80px] py-4 col-span-4 md:col-span-2 lg:col-span-1 flex justify-center items-center bg-black text-white'><i class="fa-solid fa-file-pdf text-2xl"></i><h3 className='px-2'>VIEW PRESENTATION</h3></a>
              <a href='#seccion7' onClick={(e) => handleScroll(e, section7Ref)} className='cursor-pointer h-[80px] py-4 col-span-4 md:col-span-2 lg:col-span-1 flex justify-center items-center bg-mysin-400 text-white'><i class="fa-solid fa-building text-2xl"></i><h3 className='px-2'>OUR BRANDS</h3></a>
              <a href='#seccion4' onClick={(e) => handleScroll(e, section4Ref)} className='cursor-pointer h-[80px] py-4 col-span-4 md:col-span-2 lg:col-span-1 flex justify-center items-center bg-black text-white'><i class="fa-solid fa-users text-2xl"></i><h3 className='px-2'>CUSTOMERS</h3></a>
            </div>
          </section>

        </section>
        <section id='seccion1' className='py-5 md:py-10' ref={section1Ref}>
          <div class=" grid grid-cols-2 max-w-screen-xl gap-5  flex-wrap items-center justify-between mx-auto px-4">
            <header className='col-span-2 text-center text-3xl font-semibold'><h2 className='text-2xl md:text-3xl lg:text-4xl  font-semibold'>WE</h2></header>
            <article className='col-span-2 lg:col-span-1 gap-4 grid text-center font-light text-base'>
              <p>We are pleased to announce that we have developed innovative and effective strategies in energy, communication and sustainable marketing! Our approach in advertising, education, management, tourism and circular business is having a positive impact, promoting sustainable management, environmental education and awareness, and community participation. We are making a significant social impact. In addition, our energy efficiency and renewable energy initiatives are designed to optimise resources, reduce our carbon footprint and create a cleaner, more sustainable future.</p>
              <p>We are committed to native culture and environmental preservation, building partnerships through sustainable tourism and traditional agriculture. We also explore sustainable real estate investment opportunities. Our sustainable merchandising and branding catalogue, in collaboration with eco-friendly product suppliers, reflects our commitment to sustainability.</p>
              <p>We are excited to offer training and consultancy in Circular Economy and Renewable Energy. Through a collaborative platform, we will develop circular business models that will increase your company's competitiveness, reduce your carbon footprint and improve energy efficiency. Implementing sustainable energy solutions optimises resources and contributes to a cleaner and more sustainable future for all.
              </p>
            </article>
            <article className='col-span-2 lg:col-span-1 mx-auto'>
              <img className='rounded' src={we} alt="" />
            </article>
          </div>
        </section>
        <section className='py-5 md:py-10 grid gap-20'>
          <div className="grid gap-10 container mx-auto text-center px-2">
            <h2 className='text-2xl md:text-3xl lg:text-4xl  font-semibold'>We are what you are looking for!</h2>
            <div className="grid grid-cols-4 gap-8 justify-around">
              <span className="grid gap-2 col-span-2 md:col-span-1">
                <h3 className='text-xl md:text-2xl font-base'><CountUp start={0} end={14} duration={2} />+</h3>
                <p className='text-base md:text-lg  font-light'>Years of <br></br> experience</p>
              </span>
              <span className="grid gap-2 col-span-2 md:col-span-1">
                <h3 className='text-xl md:text-2xl  font-base'><CountUp start={0} end={1000} duration={2} />+</h3>
                <p className='text-base md:text-lg  font-light'>Trained <br></br>stakeholders</p>
              </span>
              <span className="grid gap-2 col-span-2 md:col-span-1">
                <h3 className='text-xl md:text-2xl  font-base'><CountUp start={0} end={2602} duration={2} />+</h3>
                <p className='text-base md:text-lg  font-light'>Completed <br /> proyects</p>
              </span>
              <span className="grid gap-2 col-span-2 md:col-span-1">
                <h3 className='text-xl md:text-2xl  font-base'><CountUp start={0} end={963} duration={2} />+</h3>
                <p className='text-base md:text-lg  font-light'>Customers</p>
              </span>
            </div>
          </div>
        </section>
        <section className='mb-5' >
          <div className="grid bg-[#D5D8DC] grid-cols-3 gap-6">
            <article className='col-span-3 lg:col-span-1 mx-auto'>
              <img src={portada} alt="" />
            </article>
            <article className='col-span-3 lg:col-span-2 px-2 items-center flex'>
              <div className="grid w-full items-center gap-5 mx-2 md:mx-5 pb-5">
                <h2 className='text-2xl md:text-3xl lg:text-4xl  font-normal'>WHAT DISTINGUISHES US?</h2>
                <span className='bg-[#F5F5F5] w-full h-7 rounded '>
                  <div className=" px-2 flex rounded-r items-center justify-between absolte w-[90%] bg-mysin-400 h-full">
                    <h5 className='font-semibold'>SUSTAINABLE MANAGEMENT</h5>
                    <h5 className='font-semibold'>90%</h5>
                  </div>
                </span>
                <span className='bg-[#F5F5F5] w-full h-7 rounded '>
                  <div className=" px-2 flex rounded-r items-center justify-between absolte w-[95%] bg-mysin-400 h-full">
                    <h5 className='font-semibold'>MARKETING</h5>
                    <h5 className='font-semibold'>95%</h5>
                  </div>
                </span>
                <span className='bg-[#F5F5F5] w-full h-7 rounded '>
                  <div className=" px-2 flex rounded-r items-center justify-between absolte w-[96%] bg-mysin-400 h-full">
                    <h5 className='font-semibold'>CREATIVITY</h5>
                    <h5 className='font-semibold'>96%</h5>
                  </div>
                </span>
                <span className='bg-[#F5F5F5] w-full h-7 rounded '>
                  <div className=" px-2 flex rounded-r items-center justify-between absolte w-[90%] bg-mysin-400 h-full">
                    <h5 className='font-semibold'>RENEWABLE ENERGY</h5>
                    <h5 className='font-semibold'>90%</h5>
                  </div>
                </span>
                <span className='bg-[#F5F5F5] w-full h-7 rounded '>
                  <div className=" px-2 flex rounded-r items-center justify-between absolte w-[91%] bg-mysin-400 h-full">
                    <h5 className='font-semibold'>CIRCULAR ECONOMY</h5>
                    <h5 className='font-semibold'>91%</h5>
                  </div>
                </span>
                <span className='bg-[#F5F5F5] w-full h-7 rounded '>
                  <div className=" px-2 flex rounded-r items-center justify-between absolte w-[95%] bg-mysin-400 h-full">
                    <h5 className='font-semibold'>STRATEGIC PARTNERSHIPS</h5>
                    <h5 className='font-semibold'>95%</h5>
                  </div>
                </span>
              </div>
            </article>
          </div>
        </section>
        <section className='grid gap-5 py-5 md:py-10 ' id='seccion2' ref={section2Ref}>
          <h2 className='text-center text-2xl md:text-3xl lg:text-4xl  font-semibold'>SERVICES</h2>
          <p class="max-w-screen-md text-center flex flex-wrap items-center font-light text-base justify-between mx-auto px-4">Our services are based on being strategic, coordinated and integrated based on your needs and efforts to be sustainable, being our main goal the corporate growth and brand recognition of our customers. </p>
          <div className='grid grid-cols-4 gap-x-5 gap-y-3 px-5 '>
            <span className="col-span-4 bg-white hover:bg-[#707070] hover:text-white cursor-pointer transition-all duration-200 sm:col-span-2 font-light text-base lg:col-span-1 grid transform hover:scale-105 pb-1">
              <img src={servicesImg1} alt="" className="w-full" />
              <p className="text-center flex items-center">
                Sustainable branding, communication and marketing, based on circular strategies
              </p>
            </span>
            <span className="col-span-4 bg-white hover:bg-[#707070] hover:text-white cursor-pointer transition-all duration-200 sm:col-span-2 font-light text-base lg:col-span-1 grid transform hover:scale-105 pb-1">
              <img src={servicesImg2} alt="" />
              <p className='text-center '>Strategic alliance commercial, logistical and marketing support</p>
            </span>
            <span className="col-span-4 bg-white hover:bg-[#707070] hover:text-white cursor-pointer transition-all duration-200 sm:col-span-2 font-light text-base lg:col-span-1 grid transform hover:scale-105 pb-1">
              <img src={servicesImg3} alt="" />
              <p className='text-center'>Sustainable management with social impact</p>
            </span>
            <span className="col-span-4 bg-white hover:bg-[#707070] hover:text-white cursor-pointer transition-all duration-200 sm:col-span-2 font-light text-base lg:col-span-1 grid transform hover:scale-105 pb-1">
              <img src={servicesImg4} alt="" />
              <p className='text-center'>Sustainable tourism and development of native communities</p>
            </span>
            <span className="col-span-4 bg-white hover:bg-[#707070] hover:text-white cursor-pointer transition-all duration-200 sm:col-span-2 font-light text-base lg:col-span-1 grid transform hover:scale-105 pb-1">
              <img src={servicesImg5} alt="" />
              <p className='text-center'>Investment opportunity in real estate and energy efficient projects</p>
            </span>
            <span className="col-span-4 bg-white hover:bg-[#707070] hover:text-white cursor-pointer transition-all duration-200 sm:col-span-2 font-light text-base lg:col-span-1 grid transform hover:scale-105 pb-1">
              <img src={servicesImg6} alt="" />
              <p className='text-center'>Training and consulting in renewable energies and circular economy</p>
            </span>
            <span className="col-span-4 bg-white hover:bg-[#707070] hover:text-white cursor-pointer transition-all duration-200 sm:col-span-2 font-light text-base lg:col-span-1 grid transform hover:scale-105 pb-1">
              <img src={servicesImg7} alt="" />
              <p className='text-center'>Collaborative platform for the development of projects in energy and circular economy</p>
            </span>
            <span className="col-span-4 bg-white hover:bg-[#707070] hover:text-white cursor-pointer transition-all duration-200 sm:col-span-2 font-light text-base lg:col-span-1 grid transform hover:scale-105 pb-1">
              <img src={servicesImg8} alt="" />
              <p className='text-center'>Eco-sustainable Advertising & Merchandising Solutions</p>
            </span>
          </div>
        </section>
        <section className='py-5 md:py-10 ' id='seccion3' ref={section3Ref} >

          <h2 className='text-2xl md:text-3xl lg:text-4xl  font-semibold text-center mb-5'>PROJECTS</h2>
          <div >
            <Swiper
              spaceBetween={0}
              effect={'fade'}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              className="w-full mySwiper max-h-[1080px]">
              <SwiperSlide className='relative'>
                <img className='w-full' src={proyecto1} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full ' src={proyecto2} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full ' src={proyecto3} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <img className='w-full ' src={proyecto4} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <img className='w-full ' src={proyecto5} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full ' src={proyecto6} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-full' src={proyecto7} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <img className='w-full ' src={proyecto8} />
                <div className="absolute w-full inset-0 h-full bg-black opacity-40">
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </section>
        <section className='relative '
          style={{
            backgroundImage: `url(${agenda})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >

          <div className="px-2 relative"
          >
            <h2 className='pt-2 text-2xl md:text-3xl lg:text-4xl  font-semibold text-center'>SCHEDULE YOUR MEETING</h2>
            <InlineWidget url="https://calendly.com/eddi-compina/30min"
              styles={{ height: '700px', width: '100%', paddingBottom: "10px" }}
            />
          </div>
        </section>

        <section className='bg-[#E7E8EB]' id='seccion4' ref={section4Ref}>
          <div className=' py-5 md:py-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 '>
            <h2 className='w-full mb-5 py-2 text-2xl md:text-3xl lg:text-4xl  font-semibold text-center'>CUSTOMERS</h2>
            <div className="w-full px-6 hidden lg:block ">
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}

              >
                <SwiperSlide>
                  <img className='rounded-md ' src={depsa} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={jockey} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={ministerio} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={onpe} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={pamer} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={sise} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={ucv} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-full container mx-auto block lg:hidden px-2 ">
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}

              >
                <SwiperSlide>
                  <img className='rounded-md' src={depsa} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={jockey} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={ministerio} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={onpe} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={pamer} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={sise} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='rounded-md' src={ucv} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>

          </div>

        </section>
        <section className='bg-white py-5' id='seccion7' ref={section7Ref}>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <h2 className='w-full py-2 text-2xl md:text-3xl lg:text-4xl  font-semibold text-center'>OUR BRANDS</h2>
            <div className="grid grid-cols-3 justify-center gap-2 mx-auto items-center">
              <div className="col-span-3  md:col-span-1 ">
                <img className='h-[10em] md:h-[15em] mx-auto ' src={agua} alt="" />
              </div>
              <div className="col-span-3  md:col-span-1 ">
                <img className='h-[10em] md:h-[15em] mx-auto ' src={causacircular} alt="" />
              </div>
              <div className="col-span-3  md:col-span-1 ">
                <img className=' h-[10em] md:h-[15em] mx-auto ' src={compipro} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section
          id='seccion6'
          className='relative'
          ref={section6Ref}
          style={{
            backgroundImage: `url(${brochure})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >

          <div className="grid grid-cols-2 justify-around mx-auto py-4">
            <div className="col-span-2 lg:col-span-1">
              <h2 className="w-full py-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white">
                TOGETHER TOWARDS A SUSTAINABLE FUTURE: <br /> BECOME OUR STRATEGIC PARTNER
              </h2>
            </div >
            <form ref={form} onSubmit={sendEmail} className="col-span-2 lg:col-span-1 px-2 grid mx-auto min-w-[70%]">
              <h2 className="w-full py-2 text-2xl md:text-3xl mb-4 lg:text-4xl font-semibold text-center text-mysin-400 ">
                CONTACT US
              </h2>
              <input
                type="text"
                id="disabled-input"
                name='name'
                aria-label="disabled input"
                className="mb-5 bg-gray-100 border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                placeholder='Write your name'

              />
              <input
                type="text"
                id="disabled-input"
                aria-label="disabled input"
                name='business'
                className="mb-5 bg-gray-100 border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                placeholder='Your business or enterprise'
              />
              <input
                type="email"
                id="disabled-input"
                name='email'
                aria-label="disabled input"
                className="mb-5 bg-gray-100 border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                placeholder='Write your e-mail address'

              />
              <input
                type="text"
                id="disabled-input"
                aria-label="disabled input"
                name='phone'
                className="mb-5 bg-gray-100 border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 "
                placeholder='Write your mobile phone'
              />
              <textarea name='area' id="message" rows="4" className="mb-5 bg-gray-100 border border-gray-300 text-gray-400 text-sm rounded-lg focus:outline-none block w-full p-2.5 " placeholder="Leave a comment..."></textarea>
              <div className="flex justify-end">
                <button type='submit' className='bg-mysin-400 py-1 px-5 transition-all duration-150 hover:bg-mysin-500  text-white rounded-md font-semibold cursor-pointer'>send</button>
              </div>
              {mensajeEnviado && <p>{mensajeEnviado}</p>}
            </form>
          </div>
        </section>
        <section className='pt-5 md:pt-10' id='seccion5' ref={section5Ref}>
          <h2 className='w-full py-2 text-xl md:text-2xl lg:text-3xl  font-semibold text-start px-2'>Av. Rivera Navarrete N°475, San Isidro 15046</h2>
          <GoogleMapEmbed />
        </section>
        <section className='bg-[#2C353F]'>
          <div class="max-w-screen-xl grid grid-cols-4 mx-auto p-4 text-center text-white gap-x-8 gap-y-4">
            <span className='grid gap-1 col-span-2 md:col-span-1 '>
              <i class="fa-solid fa-location-dot text-[#32B6E6] text-xl lg:text-2xl"></i>
              <h5 className='font-bold text-base'>Find us on</h5>
              <h6 className='font-light text-base'>Av. Rivera Navarrete 475
                San Isidro</h6>
            </span>
            <span className='grid gap-1 col-span-2 md:col-span-1'>
              <i class="fa-solid fa-mobile-screen-button text-[#32B6E6] text-xl lg:text-2xl"></i>
              <h5 className='font-bold text-base'>Contact us</h5>
              <h6 className='font-light text-base'>(511) 7804649 - (511) 7926135</h6>
            </span>
            <span className='grid gap-1 col-span-2 md:col-span-1'>
              <i class="fa-solid fa-envelope text-[#32B6E6] text-xl lg:text-2xl"></i>
              <h5 className='font-bold text-base'>Write to</h5>
              <a href='mailto:info@compina.net' className='font-light text-base'>marketing@compina.net</a>
            </span>
            <span className='grid gap-1 col-span-2 md:col-span-1'>
              <i class="fa-regular fa-clock text-[#32B6E6] text-xl lg:text-2xl"></i>
              <h5 className='font-bold text-base'>Timetable</h5>
              <h6 className='font-light text-base'>Monday to Friday <br />
                9:00 am - 6:00 pm  </h6>
            </span>
          </div>
        </section>
      </main>


      <footer class="bg-black ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="mailto:info@compina.net" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-8" alt="Flowbite Logo" />
            </a>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="mailto:info@compina.net" class="hover:underline">Copyright CÓMPINA</a>
            </span>
          </div>

        </div>
      </footer>


    </div>
  )
}

export default App

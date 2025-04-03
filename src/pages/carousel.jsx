import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";
import Project from "../components/projects/project";
import INFO from "../data/user";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/carousel.css";


export default function ProjectCarousel() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-4">
      <Swiper
        freeMode={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30} // Adjust spacing between slides
        modules={[FreeMode, Autoplay, Navigation, Pagination]} // Add Navigation module
        autoplay={{
          delay: 3500, // Autoplay delay
          disableOnInteraction: true,
        }}
        loop={true}
        className="w-full max-w-4xl"
        pagination={{
            clickable: true,  // Makes dots clickable
            type: 'bullets',  // Default type for pagination
            el: '.swiper-pagination',  // Connect to pagination element
          }}
        navigation={{
          prevEl: '.swiper-button-prev', // Link to custom prev button
          nextEl: '.swiper-button-next', // Link to custom next button
        }}
      >
        {INFO.projects.map((project, index) => (
          <SwiperSlide key={index} className="w-64 p-8 bg-white rounded-lg shadow-lg text-center">
            <div className="slide-container">
                <Project
                    logo={project.logo}
                    title={project.title}
                    description={project.description}
                    linkText={project.linkText}
                    link={project.link}
                />

            </div>
            
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev text-gray-800"></div>
        <div className="swiper-button-next text-gray-800"></div> 

        <div className="swiper-pagination"></div> 
      </Swiper>
    </div>
  );
}

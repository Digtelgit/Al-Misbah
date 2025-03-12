import { FC } from "react";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Gallery from "@/components/gallery";
import Marquee from "@/components/marquee";
import Image from "next/image";
import Header from "@/components/ui/header";
import Timeline from "@/components/ProcessSteps";
import { hover } from "framer-motion";


export const metadata = {
  title: "Al Misbah - Home",
  description: "Al Misbah Interior Design",
};


const images = [
  {
    id:1,
    src: "/images/gallery/egr1.jpeg",
    alt: "Image 1",
    hoverText: "EGR HOLDING OFFICE, Prestige Tower, Musaffah",
  },
  {
    id:2,
    src: "/images/gallery/benz1.jpeg",
    alt: "Image 2",
    hoverText: "MERCEDES BENZ EV Showroom",
  },
  {
    id:3,
    src: "/images/gallery/rove1.jpeg",
    alt: "Image 3",
    hoverText: "ROVE HOTEL",
  },
  {
    id:4,
    src:"/images/gallery/Publicis1.jpeg",
    alt:"Image 4",
    hoverText:"Publicis Sapient Office"
  },
  {
    id:5,
    src:"/images/gallery/Esproses1.jpg",
    alt:"Image 5",
    hoverText:"Esproses Cafe"
  },
  {
    id:6,
    src:"/images/gallery/Otaku1.jpg",
    alt:"Image 6",
    hoverText:"Otaku Restaurant"
  },
  {
    id:7,
    src:"/images/gallery/Bournhall1.jpg",
    alt:"Image 7",
    hoverText:"Bournhall Clinic"
  },
  {
    id:8,
    src:"/images/gallery/Building1.jpeg",
    alt:"Image 8",
    hoverText:"Building Khalifa City"
  },
  {
    id:9,
    src:"/images/gallery/Private1.jpg",
    alt:"Image 9",
    hoverText:"Private villa , Dubai and Sharjah"
  }

];

const Home: FC = () => {
  return (
    <>
      <Header />
      
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Testimonials />
      </section>
      <section id="workflows">
        <Timeline />
      </section>
      <section id="services">
        <Features />
      </section>
      <section id="gallery">
        <Gallery images={images} />
      </section>
      <Marquee
        className="bg-white shadow-lg p-4"
        reverse={false}
        pauseOnHover={true}
        vertical={false}
        repeat={3}
      >
        <div className="flex items-center justify-center space-x-4">
          <Image
            src="/images/Marquee/11.png"
            width={200}
            height={100}
            alt="Marquee 1"
          />
          <Image
            src="/images/Marquee/222.png"
            width={200}
            height={100}
            alt="Marquee 2"
          />
          <Image
            src="/images/Marquee/2020.png"
            width={200}
            height={100}
            alt="Marquee 3"
          />
          <Image
            src="/images/Marquee/2121.png"
            width={200}
            height={100}
            alt="Marquee 4"
          />
          <Image
            src="/images/Marquee/2222.png"
            width={200}
            height={100}
            alt="Marquee 5"
          />
          <Image
            src="/images/Marquee/2323.png"
            width={200}
            height={100}
            alt="Marquee 6"
          />
          <Image
            src="/images/Marquee/2424.png"
            width={200}
            height={100}
            alt="Marquee 7"
          />
          {/* <Image
            src="/images/Marquee/2525.png"
            width={200}
            height={100}
            alt="Marquee 8"
          /> */}
          <Image
            src="/images/Marquee/2626.png"
            width={200}
            height={100}
            alt="Marquee 9"
          />
        </div>
      </Marquee>
      <Cta />
    </>
  );
};

export default Home;

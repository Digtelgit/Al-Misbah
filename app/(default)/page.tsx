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

export const metadata = {
  title: "Al Misbah - Home",
  description: "Al Misbah Interior Design",
};

const images = [
  {
    src: "/images/gallery/1.jpeg",
    alt: "Image 1",
    hoverText: "Publicis Sapient Office in DMC",
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Image 2",
    hoverText: "Esproses Cafe in Al Ain Centre",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Image 3",
    hoverText: "Otaku Restaurant in Al Gurm, Abu Dhabi",
  },
  {
    src: "/images/gallery/4.jpeg",
    alt: "Image 4",
    hoverText: "Tomyum Thai Restaurant in Dubai Outlet Mall",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Image 5",
    hoverText: "Jiva Elite Restaurant in Karama, Dubai",
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "Image 6",
    hoverText: "Bournhall Clinic in Al Garhoud, Dubai",
  },
  {
    src: "/images/gallery/7.jpeg",
    alt: "Image 7",
    hoverText: "Building in Khalifa City, Abu Dhabi",
  },
  {
    src: "/images/gallery/8.jpg",
    alt: "Image 8",
    hoverText: "Private Villas, Dubai and Sharjah",
  },
];

const Home: FC = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
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
      <section id="about">
        <Testimonials />
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

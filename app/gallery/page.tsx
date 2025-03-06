import Header from "@/components/ui/header";
import Gallery from "./Gallery";
import { images } from "./galleryData";
import Footer from "@/components/ui/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Gallery - Al Misbah",
  description: "Explore our completed projects",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Gallery />
      </Suspense>
      <Footer />
    </>
  );
}

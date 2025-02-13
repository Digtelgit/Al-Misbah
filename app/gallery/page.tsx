import Header from "@/components/ui/header";
import Gallery from "./Gallery";
import { images } from "./galleryData";

export const metadata = {
  title: "Gallery - Al Misbah",
  description: "Explore our completed projects",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <Gallery images={images} />
    </>
  );
}

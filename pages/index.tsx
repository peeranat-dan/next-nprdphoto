import type { NextPage } from "next";
import Head from "next/head";
import GallerySection from "../views/gallerysection";
import AboutSection from "../views/aboutmesection";
import ContactSection from "../views/contactsection";
import { useScrollIntoView } from "@mantine/hooks";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const { scrollIntoView: galleryScroll, targetRef: galleryRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: aboutScroll, targetRef: aboutRef } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: contactScroll, targetRef: contactRef } =
    useScrollIntoView<HTMLDivElement>();
  return (
    <>
      <Head>
        <title>@nprdphoto</title>
        <meta name="description" content="Website that display @nprdphoto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        scrollToGallery={galleryScroll}
        scrollToAbout={aboutScroll}
        scrollToContact={contactScroll}
      >
        <main>
          <GallerySection target={galleryRef} />
          <AboutSection target={aboutRef} />
          <ContactSection target={contactRef} />
        </main>
      </Layout>
    </>
  );
};

export default Home;

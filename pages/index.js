import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Introduction of the photo gallery`}
        />
        <title>Photoshop Gallery</title>
      </Head>
      <Header />
      <Hero />
    </>
  );
}

import Head from "next/head";
import HeroHome from "../components/Hero/HeroHome";
import BoxsGrid from "../components/BoxsGrid/BoxsGrid";

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
      <HeroHome />
      <BoxsGrid />
    </>
  );
}

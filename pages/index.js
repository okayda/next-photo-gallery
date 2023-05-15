import Head from "next/head";
import HeroHome from "../components/HeroHome/HeroHome";
import BoxsGrid from "../components/BoxsGrid/BoxsGrid";
import HomeFeature from "../components/HomeFeature/HomeFeature";

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
      <HomeFeature />
    </>
  );
}

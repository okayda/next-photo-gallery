import Head from "next/head";
import HomeHero from "../components/Home/HomeHero/HomeHero";
import HomeGrid from "../components/Home/HomeGrid/HomeGrid";
import HomeFeature from "../components/Home/HomeFeature/HomeFeature";

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
      <HomeHero />
      <HomeGrid />
      <HomeFeature />
    </>
  );
}

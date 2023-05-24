import Head from "next/head";
import HomeHero from "../components/Home/HomeHero/HomeHero";
import HomeGrid from "../components/Home/HomeGrid/HomeGrid";
import HomeFeature from "../components/Home/HomeFeature/HomeFeature";

import StoriesHero from "../components/Stories/StoriesHero/StoriesHero";
import StoriesGrid from "../components/Stories/StoriesGrid/StoriesGrid";

import FeatureHero from "../components/Feature/FeatureHero/FeatureHero";
import FeatureBoxs from "../components/Feature/FeatureBoxs/FeatureBoxs";

import PricingHero from "../components/Pricing/PricingHero/PricingHero";
import PricingCards from "../components/Pricing/PricingCards/PricingCards";

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

      <PricingHero />
      <PricingCards />
    </>
  );
}

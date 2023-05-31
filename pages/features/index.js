import Head from "next/head";
import FeatureHero from "../../components/Feature/FeatureHero/FeatureHero";
import FeatureBoxs from "../../components/Feature/FeatureBoxs/FeatureBoxs";
import Banner from "../../components/Banner/Banner";

const FeaturesPage = function () {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Having a features on your photo it will make mesmerize`}
        />
        <title>Features Gallery</title>
      </Head>

      <FeatureHero />
      <FeatureBoxs />
      <Banner />
    </>
  );
};

export default FeaturesPage;

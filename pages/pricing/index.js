import Head from "next/head";
import PricingHero from "../../components/Pricing/PricingHero/PricingHero";
import PricingCards from "../../components/Pricing/PricingCards/PricingCards";
import PricingTable from "../../components/Pricing/PricingTable/PricingTable";
import Banner from "../../components/Banner/Banner";

const PricingPage = function () {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Pricing of our producst that will lead you to a magical places`}
        />
        <title>Products pricing</title>
      </Head>

      <PricingHero />
      <PricingCards />
      <PricingTable />
      <Banner />
    </>
  );
};

export default PricingPage;

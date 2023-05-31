import Head from "next/head";
import StoriesHero from "../../components/Stories/StoriesHero/StoriesHero";
import StoriesGrid from "../../components/Stories/StoriesGrid/StoriesGrid";

const StoriesPage = function () {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`The stories behind of the mother earth`}
        />
        <title>Stories Gallery</title>
      </Head>

      <StoriesHero />
      <StoriesGrid />
    </>
  );
};

export default StoriesPage;

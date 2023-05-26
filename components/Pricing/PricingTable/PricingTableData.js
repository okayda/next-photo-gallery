import check from "../../../assets/pricing/check.svg";

const title = {
  basic: "basic",
  pro: "pro",
  business: "business",
};

export const PricingTableData = [
  {
    heading: "unlimited story posting",
    title: title,
    coverage: {
      basic: <img src={check} alt="" />,
      pro: <img src={check} alt="" />,
      business: <img src={check} alt="" />,
    },
  },

  {
    heading: "unlimited photo upload",
    title: title,
    coverage: {
      basic: <img src={check} alt="" />,
      pro: <img src={check} alt="" />,
      business: <img src={check} alt="" />,
    },
  },

  {
    heading: "embedding custom content",
    title: title,
    coverage: {
      basic: false,
      pro: <img src={check} alt="" />,
      business: <img src={check} alt="" />,
    },
  },

  {
    heading: "customize metadata",
    title: title,
    coverage: {
      basic: false,
      pro: <img src={check} alt="" />,
      business: <img src={check} alt="" />,
    },
  },

  {
    heading: "advanced metrics",
    title: title,
    coverage: {
      basic: false,
      pro: false,
      business: <img src={check} alt="" />,
    },
  },

  {
    heading: "photo downloads",
    title: title,
    coverage: {
      basic: false,
      pro: false,
      business: <img src={check} alt="" />,
    },
  },

  {
    heading: "search engine indexing",
    title: title,
    coverage: {
      basic: false,
      pro: false,
      business: <img src={check} alt="" />,
    },
  },

  {
    heading: "custom analytics",
    title: title,
    coverage: {
      basic: false,
      pro: false,
      business: <img src={check} alt="" />,
    },
  },
];

import Head from "next/head";

export default function HeadLayout() {
  return (
    <Head>
      {/* Meta tags */}
      <title>Sustinable Development | Greenspark</title>
      <meta
        name="description"
        content="Discover projects with a focus on social and environmental goals. Maximize your positive impact on both the planet and its people. Learn how your funds contribute to keeping our planet clean and promoting the UN's Sustainable Development Goals"
      />
      <meta
        name="keywords"
        content="Social Impact Projects, Environmental Goals, Positive Impact Investing, Planet Conservation, Sustainable Development Initiatives, Funds for Clean Planet, UN Sustainable Development Goals, Eco-Friendly Funding, Green Finance Solutions, Community and Environmental Stewardship, Impactful Philanthropy, Earth-Friendly Investments, Clean Energy Funding, Social Responsibility Investments, Contribute to Sustainable Future"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        href="https://res.cloudinary.com/droheqpxn/image/upload/v1700214652/grenspark/CPyTqYm6tvMCEAE_dffngt.png"
      />

      {/* Open Graph tags */}
      {/* Open Graph is a technology that allows web pages to become more rich and engaging when shared on social media platforms such as Facebook, Twitter, and LinkedIn. By adding Open Graph meta tags to your web page, you can control how your page appears when it's shared on social media, including the title, description, and image that are displayed. */}
      <meta property="og:title" content="Sustinable Development | Greenspark" />
      <meta
        property="og:description"
        content="Discover projects with a focus on social and environmental goals. Maximize your positive impact on both the planet and its people. Learn how your funds contribute to keeping our planet clean and promoting the UN's Sustainable Development Goals."
      />
      <meta property="og:image" content="" />
      <meta property="og:type" content="website" />

      {/* Twitter tags */}
      {/* Twitter meta tags are similar to Open Graph tags, but are used specifically for Twitter. They allow you to control how your web page appears when it's shared on Twitter, including the title, description, and image that are displayed. */}
      <meta name="twitter:title" content="Sustinable Development | Greenspark" />
      <meta
        name="twitter:description"
        content="Discover projects with a focus on social and environmental goals. Maximize your positive impact on both the planet and its people. Learn how your funds contribute to keeping our planet clean and promoting the UN's Sustainable Development Goals."
      />
    </Head>
  );
}

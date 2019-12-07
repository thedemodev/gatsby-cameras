import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Home from "../components/Home";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Vintage Cameras"
      />
      <Home />
    </Layout>
  );
}

export default IndexPage;

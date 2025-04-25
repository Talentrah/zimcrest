import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<SEOProps> = ({
  title = "Zimcrest Technologies - Custom Software Development",
  description = "Zimcrest Technologies specializes in custom software development, delivering end-to-end solutions for fintech, ecommerce, real estate, and SaaS platforms.",
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  url = "https://zimcrest.com",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* PWA primary color */}
      <meta name="theme-color" content="#6d28d9" />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />

      {/* Fonts */}
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>
  );
};

export default Seo;

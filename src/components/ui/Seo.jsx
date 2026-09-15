import { Helmet } from "react-helmet-async";

const siteUrl = "https://marmolesbenavente.com";

export default function Seo({
  title,
  description,
  path = "",
}) {
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mármoles Benavente" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:image"
        content={`${siteUrl}/og-image.jpg`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${siteUrl}/og-image.jpg`}
      />
    </Helmet>
  );
}
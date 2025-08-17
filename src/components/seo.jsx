// src/components/Seo.jsx
import { Helmet } from "react-helmet-async";

const Seo = ({
    title,
    description,
    keywords,
    url = "https://bhuvanbhattarai07.com.np",
    image = "https://bhuvanbhattarai07.com.np/public/icon.png"
}) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Bhuvan Bhattarai",
                    "url": url,
                    "image": image,
                    "jobTitle": "Web Developer",
                    "sameAs": [
                        "https://www.linkedin.com/in/bhuvan-bhattarai-a00413322",
                        "https://github.com/bhuvan-365",
                        "https://x.com/bhuvan_365"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default Seo;

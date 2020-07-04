import React from 'react';
import { Link } from 'gatsby';

import '../styles/index.scss';
import { AppContext } from './Context';
import { Helmet } from 'react-helmet';

const PageWrapper = ({ children, meta = {}, className = '' }) => {
  const { updateTheme } = React.useContext(AppContext);

  const seo = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    twitter: meta.twitterName,
    image: `${meta.siteUrl}${
      meta.category ? `/img/headers/${meta.category}.png` : meta.image
    }`,
    url: `${meta.siteUrl}${meta.slug || ''}`,
  };

  return (
    <React.Fragment>
      <Helmet title={seo.title}>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keyword} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        {meta.slug && <meta property="og:type" content="article" />}
        <meta name="twitter:site" content={seo.twitter} />
        <meta name="twitter:creator" content={seo.twitter} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="monetization" content="$ilp.uphold.com/dDdhAM4apdQJ" />
        <meta
          name="twitter:card"
          content={meta.category ? 'summary_large_image' : 'summary'}
        />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>

      <div className={`site ${className}`}>
        <header role="banner" className="header">
          <Link
            to="/"
            aria-label="Logo that redirects to the homepage"
            className="logo">
            <svg
              fill="currentcolor"
              aria-label="Logo that redirects to the homepage"
              color="neutral.1"
              width="54px" height="54px" viewBox="0 0 280 400"
              
              display="block">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66 399.04L204 399.04L402.33 399.04L402.33 201.37L402.33 3.7L204 3.7L5.66 3.7L5.66 201.37L5.66 399.04ZM173.38 199.38C173.21 199.78 172.37 201.77 170.85 205.37L152.75 205.77L134.51 206.16C135.07 204.33 135.38 203.31 135.44 203.1C135.98 201.37 139.44 192.85 143.03 184.07C146.76 175.28 153.55 158.78 158.07 147.46C162.73 136.15 167.52 124.57 168.59 121.77C168.73 121.44 169.44 119.8 170.72 116.85C181.1 116.85 186.87 116.85 188.02 116.85C197.47 116.85 205.46 117.38 205.86 117.91C206.39 118.71 188.02 164.77 173.38 199.38ZM233.95 181.41C252.45 227.33 258.17 240.91 259.24 240.91C259.9 240.91 262.43 235.85 264.83 229.86C267.22 223.87 269.89 218.14 270.68 217.21C271.88 215.75 275.88 215.62 289.05 216.28C298.24 216.68 305.96 217.21 306.23 217.35C306.49 217.61 302.23 228.39 296.77 241.44C291.32 254.62 285.19 269.39 283.2 274.58C281.2 279.64 278.94 284.7 278.14 285.5C277.21 286.7 271.75 287.23 259.24 287.23C239.94 287.23 240.47 287.36 236.87 278.58C235.81 275.65 231.42 265.13 227.29 255.28C223.3 245.43 214.25 223.2 207.19 205.9C206.35 203.8 202.13 193.33 194.55 174.48C199.02 163.38 201.5 157.22 202 155.98C206.26 145.73 210.12 136.02 210.79 134.29C211.58 132.29 212.52 131.49 213.31 132.29C213.98 132.95 217.57 140.94 221.3 150.13C225.03 159.31 230.75 173.29 233.95 181.41ZM213.31 255.95C213.31 256.35 199.07 256.75 181.77 256.88C179.66 256.91 169.15 257.04 150.22 257.28L143.56 272.19L137.04 287.23C126.42 287.23 120.52 287.23 119.34 287.23C109.49 287.23 101.5 286.83 101.5 286.3C101.5 284.97 124.4 229.59 125.59 227.99C126.66 226.66 200.4 226 201.73 227.33C202.4 228.13 213.31 255.02 213.31 255.95Z" id="d2TFHItTV5"></path>
            </svg>
          </Link>
        
          <button
            className="icon"
            type="button"
            aria-label="theme switcher"
            onClick={updateTheme}>
            <svg
              viewBox="0 0 32 32"
              fill="currentcolor"
              display="block"
              color="neutral.1">
              <circle
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="currentcolor"
                strokeWidth="4"></circle>
              <path d=" M 16 0 A 16 16 0 0 0 16 32 z "></path>
            </svg>
          </button>
        </header>

        {children}

        <footer className="footer">
          <span>Aditya &copy; 2020</span>
          <a href="https://www.facebook.com/profile.php?id=100004027149043" alt="Link to my Facebook page">
            Facebook
          </a>
          <a href="https://github.com/inductor69" alt="Link to my Github page">
            Github
          </a>
          <a href="https://www.linkedin.com/in/aditya-kumar-b99b1519b/" alt="Link to my Dribbble page">
            Linkedin
          </a>
          <a
            href="https://www.quora.com/profile/Aditya-Kumar-248"
            alt="Link to my quora profile page">
            QUoRA
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
};

PageWrapper.defaultProps = {
  className: '',
  footer: false,
  meta: {},
};

export default PageWrapper;

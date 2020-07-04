import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const PostOverviewTemplate = ({ data }) => {
  const meta = data.site.siteMetadata;
  return (
    <Layout meta={meta}>
      <main className="content stack-large grid">
        <h1 className="title cell--middle">
          <span role="img" aria-label="waving hand">
            
          </span>{' '}
          <span>
          Hey, I'm Aditya, A Junior Undergrad at IIT-D. I write about Web and 
          Android Apps Development.
          </span>
        </h1>
      </main>
    </Layout>
  );
};

export default PostOverviewTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
        image
        twitterName
      }
    }
  }
`;

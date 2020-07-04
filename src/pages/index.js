import React from 'react';
import Layout from '../components/Layout';
import get from '../utils/get';
import Card from '../components/Card';
import { graphql } from 'gatsby';
import { formatReadingTime } from '../utils/readingTime';
import { NUM_HIGHLIGHT } from '../config';

const PostOverviewTemplate = ({ data, pageContext }) => {
  const posts = get(data, 'allMarkdownRemark.edges', []);
  const highlights = posts.slice(0, NUM_HIGHLIGHT);
  const meta = data.site.siteMetadata;

  console.log(posts);

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
        {highlights.map((p, i) => (
          <Card
            key={i}
            className={`cell--middle ${i % 2 !== 0 ? 'reverse' : ''}`}
            title={p.node.frontmatter.title}
            variant="large"
            url={p.node.fields.slug}
            subtitle={p.node.frontmatter.description}
            category={p.node.frontmatter.category}
            orientation="horizontal"
            meta={`${p.node.frontmatter.date} • ${formatReadingTime(
              p.node.wordCount.words
            )}`}
          />
        ))}
        <section className="cell--middle tiles" role="feed">
          {posts.slice(NUM_HIGHLIGHT).map((p, i) => {
            const post = p.node;
            return (
              <Card
                key={i}
                title={post.frontmatter.title}
                url={post.fields.slug}
                subtitle={post.frontmatter.description}
                category={p.node.frontmatter.category}
                orientation="vertical"
                meta={`${post.frontmatter.date} • ${formatReadingTime(
                  post.wordCount.words
                )}`}
              />
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default PostOverviewTemplate;

export const postOverviewPageQuery = graphql`
  query BlogPage {
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
    allMarkdownRemark(
      limit: 1000
      skip: 0
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { eq: false }, templateKey: { eq: "blog-post" } }
      }
    ) {
      totalCount
      edges {
        node {
          wordCount {
            words
          }
          fields {
            slug
          }
          frontmatter {
            title
            description
            category
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

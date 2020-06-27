import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Content = styled.div`
	margin: 0 auto;
	max-width: 860px;
	padding: 1.45rem 1.0875rem;
`;


const MarkerHeader = styled.h3`
	margin-top: 2rem;
	display: inline-block;
	background-image: linear-gradient(
		-100deg,
		rgba(220, 255, 0, 0.15),
		rgba(220, 255, 0, 0.8) 100%,
		rgba(220, 255, 0, 0.25)
	);
`;

const PostTitle = styled.p`
  margin-top: 0.3rem;
  display: inline-block;
  background-image: linear-gradient(rgba(220, 255, 0, 0.8), rgba(220, 255, 0, 0.8));
		background-repeat: no-repeat;
		background-size: 100% 0.2em;
		background-position: 0 88%;
		transition: background-size 0.25s ease-in;
		&:hover {
			background-size: 100% 88%;
		}

`;


const IndexPage = ({ data }) => {
  console.log(data);
	return (
		<Layout>
			<SEO title="Category" />
			<Content>
        <MarkerHeader>Book</MarkerHeader>
				{data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.frontmatter.category === 'book';
        }).map(({ node }) => {
          return (<div key={node.id}>
            <Link to={node.frontmatter.path} css={css`text-decoration: none; color: inherit;`}>
            <PostTitle>{node.frontmatter.title} - {node.frontmatter.rawDate}</PostTitle>
            </Link>
          </div>)
        })}

        <MarkerHeader>JavaScript</MarkerHeader>
				{data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.frontmatter.category === 'JavaScript';
        }).map(({ node }) => {
          return (<div key={node.id}>
            <Link to={node.frontmatter.path} css={css`text-decoration: none; color: inherit;`}>
            <PostTitle>{node.frontmatter.title} - {node.frontmatter.rawDate}</PostTitle>
            </Link>
          </div>)
        })}

        <MarkerHeader>CSS</MarkerHeader>
				{data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.frontmatter.category === 'CSS';
        }).map(({ node }) => {
          return (<div key={node.id}>
            <Link to={node.frontmatter.path} css={css`text-decoration: none; color: inherit;`}>
            <PostTitle>{node.frontmatter.title} - {node.frontmatter.rawDate}</PostTitle>
            </Link>
          </div>)
        })}

        <MarkerHeader>HTML</MarkerHeader>
				{data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.frontmatter.category === 'HTML';
        }).map(({ node }) => {
          return (<div key={node.id}>
            <Link to={node.frontmatter.path} css={css`text-decoration: none; color: inherit;`}>
            <PostTitle>{node.frontmatter.title} - {node.frontmatter.rawDate}</PostTitle>
            </Link>
          </div>)
        })}

        <MarkerHeader>React</MarkerHeader>
				{data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.frontmatter.category === 'React';
        }).map(({ node }) => {
          return (<div key={node.id}>
            <Link to={node.frontmatter.path} css={css`text-decoration: none; color: inherit;`}>
            <PostTitle>{node.frontmatter.title} - {node.frontmatter.rawDate}</PostTitle>
            </Link>
          </div>)
        })}

        <MarkerHeader>TIP</MarkerHeader>
				{data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.frontmatter.category === 'TIP';
        }).map(({ node }) => {
          return (<div key={node.id}>
            <Link to={node.frontmatter.path} css={css`text-decoration: none; color: inherit;`}>
            <PostTitle>{node.frontmatter.title} - {node.frontmatter.rawDate}</PostTitle>
            </Link>
          </div>)
        })}

        <MarkerHeader>Computer Science</MarkerHeader>
				{data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.frontmatter.category === 'Computer Science';
        }).map(({ node }) => {
          return (<div key={node.id}>
            <Link to={node.frontmatter.path} css={css`text-decoration: none; color: inherit;`}>
            <PostTitle>{node.frontmatter.title} - {node.frontmatter.rawDate}</PostTitle>
            </Link>
          </div>)
        })}

        <MarkerHeader>Network</MarkerHeader>
				{data.allMarkdownRemark.edges.filter(({ node }) => {
          return node.frontmatter.category === 'Network';
        }).map(({ node }) => {
          return (<div key={node.id}>
            <Link to={node.frontmatter.path} css={css`text-decoration: none; color: inherit;`}>
            <PostTitle>{node.frontmatter.title} - {node.frontmatter.rawDate}</PostTitle>
            </Link>
          </div>)
        })}
			</Content>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { draft: { eq: false } } }
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						rawDate: date
            path
            category
					}
					fields {
						slug
						readingTime {
							text
						}
					}
					excerpt
				}
			}
		}
	}
`;

import React from 'react';
import { graphql } from 'gatsby';
import Blog from '../components/blog';
import Layout from '../layout/layout';
import user from '../personalization/profile.json';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaTumblrSquare,
} from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

export default function Home({ data }) {
  function mapSocialMediaAccounts(socials) {
    const socialMediaAccounts = socials.map((social) => {
      if (social.username.length > 0) {
        let domain = social.platform;
        let url = 'https://' + domain + '.com';
        if (domain === 'linkedin') {
          url = url + '/in';
        }
        const capitalizedKey = domain.charAt(0).toUpperCase() + domain.slice(1);
        let icon;
        switch (domain) {
          case 'github':
            icon = <FaGithubSquare size={20} className="me-1" />;
            break;
          case 'linkedin':
            icon = <FaLinkedin size={20} className="me-1" />;
            break;
          case 'tumblr':
            icon = <FaTumblrSquare size={20} className="me-1" />;
            break;
          case 'pinterest':
            icon = <FaPinterestSquare size={20} className="me-1" />;
            break;
          case 'facebook':
            icon = <FaFacebookSquare size={20} className="me-1" />;
            break;
          case 'twitter':
            icon = <FaSquareXTwitter size={20} className="me-1" />;
            break;
          case 'instagram':
            icon = <FaSquareInstagram size={20} className="me-1" />;
            break;
          default:
            break;
        }
        return (
          <div className="col-12 col-sm-6 d-flex align-items-center">
            {icon ? icon : ''}
            <div>
              <span>{capitalizedKey}: </span>
              <a
                class={`link`}
                href={`${url}/${social.username}`}
                target="_blank"
                rel="noreferrer"
              >
                {social.username}
              </a>
            </div>
          </div>
        );
      }
    });
    return socialMediaAccounts;
  }

  return (
    <Layout>
      <div
        className="row g-0 px-5 justify-content-center"
        style={{
          width: '100%',
        }}
      >
        <div className="col col-12 col-md-4 pe-3 pb-2 text-end d-flex flex-column">
          {data.image ? (
            <>
              {' '}
              <img
                alt="profile picture"
                src={data.image.publicURL}
                style={{ width: '200px', aspectRatio: 1 / 1 }}
                className="rounded border border-secondary"
              />
            </>
          ) : (
            <div
              className="rounded border border-secondary"
              style={{ width: '200px', aspectRatio: 1 / 1 }}
            ></div>
          )}
        </div>
        <div className="col col-12 col-md-8 h-100 d-flex flex-column mb-4">
          <h4>{user.name}</h4>
          <div className="small ">{user.bio}</div>
          <hr className="m-1" />
          <div className="row">{mapSocialMediaAccounts(user.socials)}</div>
        </div>
      </div>
      <Blog data={data} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "profile_picture.jpg" }) {
      publicURL
    }

    blog: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      blog: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }

    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      projects: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`;
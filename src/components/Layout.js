import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleRight,
  faBars,
  faCheckCircle,
  faCloudDownloadAlt,
  faCogs,
  faComments,
  faCubes,
  faDollarSign,
  faExternalLinkAlt,
  faGamepad,
  faHeart,
  faHome,
  faInfoCircle,
  faNewspaper,
  faRss,
  faThumbsUp,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Container } from 'reactstrap';

library.add(
  fab,
  faHome,
  faRss,
  faExternalLinkAlt,
  faUsers,
  faNewspaper,
  faComments,
  faDollarSign,
  faCloudDownloadAlt,
  faInfoCircle,
  faThumbsUp,
  faHeart,
  faBars,
  faAngleRight,
  faCubes,
  faGamepad,
  faCheckCircle,
  faCogs
);

const Layout = ({ children, title, lead, page }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="page-wrapper">
      <div className="page-header">
        <Container>
          <img
            src={`${process.env.BACKEND_URL}/logo.png`}
            alt="Azeroth Core logo"
          />
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
          {page === 'home' && (
            <>
              <Link
                href="/wiki/installation"
                as={`${process.env.BACKEND_URL}/wiki/installation`}
              >
                <Button size="lg" color="danger" className="btn-installation">
                  Installation instructions{' '}
                  <FontAwesomeIcon
                    size="sm"
                    icon="angle-right"
                    className="btn-installation_icon"
                  />
                </Button>
              </Link>
              <div className="github-buttons">
                <iframe
                  title="github stars"
                  src="https://ghbtns.com/github-btn.html?user=azerothcore&repo=azerothcore-wotlk&type=star&count=true"
                  frameBorder="0"
                  scrolling="0"
                  width="100px"
                  height="20px"
                />
                <iframe
                  title="github forks"
                  src="https://ghbtns.com/github-btn.html?user=azerothcore&repo=azerothcore-wotlk&type=fork&count=true"
                  frameBorder="0"
                  scrolling="0"
                  width="90px"
                  height="20px"
                />
              </div>
            </>
          )}
          <div className="social-button-container">
            <ul className="social-button_list">
              <li>
                <a
                  className="nav-link_social nav-link"
                  href="https://www.facebook.com/AzerothCore/"
                >
                  <FontAwesomeIcon size="sm" icon={['fab', 'facebook-f']} />
                </a>
              </li>
              <li>
                <a
                  className="nav-link_social nav-link"
                  href="https://twitter.com/azeroth_core"
                >
                  <FontAwesomeIcon size="sm" icon={['fab', 'twitter']} />
                </a>
              </li>
              <li>
                <a
                  className="nav-link_social nav-link"
                  href="https://www.linkedin.com/company/azerothcore"
                >
                  <FontAwesomeIcon size="sm" icon={['fab', 'linkedin-in']} />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="page-content">{children}</div>
    </div>
    <style jsx>
      {`
        .page-wrapper {
          min-height: 100vh;
          width: 100%;
        }
        .page-header {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0%,
              rgba(0, 0, 0, 0.6) 100%
            ),
            url(${process.env.BACKEND_URL}/background.jpg);
          background-position: top;
          background-size: cover;
          background-repeat: no-repeat;
          padding-top: 100px;
          padding-bottom: 50px;
          color: #fff;
          text-align: center;
        }
        h1 {
          margin-top: 20px;
        }
        .page-content {
          padding: 40px 0;
        }
        .github-buttons {
          margin-top: 14px;
        }
        .social-button-container {
          justify-content: center;
          margin-top: 14px;
          display: none;
        }
        .social-button_list {
          display: none;
          flex-wrap: wrap;
          padding-left: 0;
          margin-bottom: 0;
          list-style: none;
        }
        @media (max-width: 991px) {
          .social-button-container {
            display: flex;
          }
          .social-button_list {
            display: flex;
            justify-content: center;
          }
          .page-header {
            padding-bottom: 25px;
          }
        }
        @media (max-width: 570px) {
          .lead {
            font-size: 16px;
          }
        }
      `}
    </style>
    <style jsx global>
      {`
        .btn-installation {
          background-image: linear-gradient(to bottom, #d90000, #610101);
          border-color: #610101;
        }
        .btn-installation:hover {
          background-color: unset;
          border-color: unset;
        }
        .btn-installation:active:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
        }
        .btn-installation:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
        }
        .btn-installation_icon {
          vertical-align: -0.18em;
        }
      `}
    </style>
  </>
);

Layout.defaultProps = {
  title: 'AzerothCore',
  lead: 'Complete Open Source and Modular solution for MMO',
  page: 'home',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  lead: PropTypes.string,
  page: PropTypes.string,
};

export default Layout;

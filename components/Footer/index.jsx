import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import TwitterIcon from '../icons/TwitterIcon';
import Link from '../Link';

const propTypes = {
  logoImage: PropTypes.object.isRequired,
  jobsCount: PropTypes.number,
  linksDomain: PropTypes.string,
};

const defaultProps = {
  logoImage: null,
  jobsCount: 0,
  linksDomain: 'https://seqera.io',
};

const Footer = ({ logoImage, jobsCount, linksDomain }) => {
  return (
    <>
      <footer className="bg-blue-800 text-gray-200 py-16">
        <div className="container-lg">
          <div className="row">
            {logoImage && (
              <div className="col-full">
                <Image image={getImage(logoImage)} alt="Seqera Labs logo" className="h-6 md:h-7" />
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-6 md:col-4 lg:col-3 mt-8">
              <h2 className="typo-h6 text-white mb-4">
                Company
              </h2>
              <div className="mt-4">
                <div className="typo-small">
                  <Link to={`${linksDomain}/about/`} noBorder>
                    About Us
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/news/`} noBorder>
                    Press
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/partners-and-platforms/`} noBorder>
                    Partners and platforms
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/careers/`} noBorder className="inline-flex items-center">
                    Careers
                    <span className="bg-indigo-600 text-white text-xs text-center flex items-center justify-center h-7 w-7 rounded-full font-medium ml-3">
                      {jobsCount}
                    </span>
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to="https://support.seqera.io/">
                    Support
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 md:col-4 lg:col-2 mt-8">
              <h2 className="typo-h6 text-white mb-4">
                Products
              </h2>
              <div className="mt-4">
                <div className="typo-small">
                  <Link to={`${linksDomain}/nextflow/`} noBorder>
                    Nextflow
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/tower/`} noBorder>
                    Tower Enterprise
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to="https://tower.nf/" noBorder>
                    Tower Cloud
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to="/wave/" noBorder>
                    Wave Containers
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to="/fusion/" noBorder>
                    Fusion
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 md:col-4 lg:col-2 mt-8">
              <h2 className="typo-h6 text-white mb-4">
                Case Studies
              </h2>
              <div className="mt-4">
                <div className="typo-small">
                  <Link to={`${linksDomain}/case-studies/scilifelab/`} noBorder>
                    SciLifeLab
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/case-studies/gritstone/`} noBorder>
                    Gritstone bio
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/case-studies/imeka/`} noBorder>
                    Imeka
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 md:col-4 lg:col-3 mt-8">
              <h2 className="typo-h6 text-white mb-4">
                Learn
              </h2>
              <div className="mt-4">
                <div className="typo-small">
                  <Link to={`${linksDomain}/blog/`} noBorder>
                    Blog
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/podcasts/`} noBorder>
                    Podcasts channels
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/ebooks/`} noBorder>
                    Ebooks
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/whitepapers/`} noBorder>
                    Whitepapers
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/docs/`} noBorder>
                    Documentation
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/nextflow/learn/`} noBorder>
                    Nextflow resources
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/nextflow/workshop/`} noBorder>
                    Nextflow training workshop
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 md:col-4 lg:col-2 mt-8">
              <h2 className="typo-h6 text-white mb-4">
                Events
              </h2>
              <div className="mt-4">
                <div className="typo-small">
                  <Link to={`${linksDomain}/events/webinars-and-talks/`} noBorder>
                    Webinars and talks
                  </Link>
                </div>
                <div className="typo-small mt-3">
                  <Link to={`${linksDomain}/events/conferences/`} noBorder>
                    Conferences
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-white border-t opacity-40 mt-10" />
          <div className="row mt-5">
            <div className="col-full md:col-5 mt-8">
              <h2 className="typo-h6 text-white">
                Seqera Labs, S.L.
              </h2>
              <div className="row">
                <div className="col-full md:col-6 mt-4">
                  <p className="typo-small">
                    HQ office address:
                    <br />
                    Carrer de Marià Aguiló, 28
                    <br />
                    Barcelona, 08005
                  </p>
                </div>
                <div className="col-full md:col-6 mt-4">
                  <p className="typo-small">
                    Legal office address:
                    <br />
                    Carrer Ramon Turro, 142
                    <br />
                    Barcelona, 08005
                  </p>
                </div>
              </div>
            </div>
            <div className="col-full md:col-5 mt-8 ml-auto flex flex-col">
              <div className="flex md:justify-end mb-4">
                <div className="mr-4">
                  <Link to="https://twitter.com/seqeralabs" noBorder>
                    <TwitterIcon className="h-6 w-6 text-gray-200 hover:text-white duration-200" />
                  </Link>
                </div>
                <div className="mr-4">
                  <Link to="https://github.com/seqeralabs" noBorder>
                    <GitHubIcon className="h-6 w-6 text-gray-200 hover:text-white duration-200" />
                  </Link>
                </div>
                <div>
                  <Link to="https://www.linkedin.com/company/14065390/" noBorder>
                    <LinkedInIcon className="h-6 w-6 text-gray-200 hover:text-white duration-200" />
                  </Link>
                </div>
              </div>
              <div className="mt-auto typo-small md:text-right">
                <small className="typo-small">
                  &copy; Seqera Labs, 2018-2022
                </small>
                {' | '}
                <Link to={`${linksDomain}/privacy-policy/`} noBorder>
                  Privacy Policy
                </Link>
                {' | '}
                <Link to="mailto:info@seqera.io">
                  info@seqera.io
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;

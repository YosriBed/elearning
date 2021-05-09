import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div
    className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex flex-col"
    style={{
      backgroundImage: 'url(\'https://source.unsplash.com/random\')',
      minHeight: '100vh',
    }}
  >
    <Navbar />

    <main className="bg-cover flex-grow ">{children}</main>

    <Footer />
  </div>
);
Layout.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Layout;

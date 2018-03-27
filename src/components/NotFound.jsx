import React from 'react';
import NotFoundImg from './page-not-found.png';
import Footer from './Footer';

const NotFound = props => {
  return (
    <section>
      <img className="img-fluid" src={NotFoundImg} alt=""/>
      <Footer />
    </section>
  )
}

export default NotFound;
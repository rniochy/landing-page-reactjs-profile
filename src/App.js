import React from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Portifolio from './components/portifolio/portifolio';
import Services from './components/services/services';
import Testimonials from './components/testimonials/testimonials';
import Footer from './components/footer/footer';

const App = () => {
    return (
        <div>

            <Header/>
            <Nav />
            <About/>
            <Experience/>
            <Services/>
            <Portifolio/>
            <Testimonials/>
            <Contact /> 
            <Footer />


        </div>
    );
}

export default App;

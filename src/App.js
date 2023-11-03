import React from 'react';
import Header from './components/Header/Header';
import SocialLinks from './components/SocialLinks/SocialLinks';
import ProjectLinks from './components/ProjectLinks/ProjectLinks';
import Quotes from './components/Quotes/Quotes';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <SocialLinks />
            <ProjectLinks />
            <Quotes />
            <Footer />
        </div>
    );
}

export default App;


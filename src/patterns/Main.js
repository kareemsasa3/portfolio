import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import HeaderImage from './HeaderImage';
import SecondaryHeader from './SecondaryHeader';
import Footer from './Footer';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Coursework from '../components/Coursework';
import Readings from '../components/Readings';

export default class Main extends Component {
    render() {
        return (
            <div className="ui inverted segment" style={{ backgroundColor: 'black' }}>
                <div className="ui container">
                    <BrowserRouter>
                        <div>
                            <Header />
                            <HeaderImage />
                            <div className="ui inverted segment">
                                <div className="ui grid">
                                    <SecondaryHeader />
                                    <div className="eleven wide column">
                                        <Route path="/" exact component={Home} />
                                        <Route path="/projects" exact component={Projects} />
                                        <Route path="/resume" exact component={Resume} />
                                        <Route path="/coursework" exact component={Coursework} />
                                        <Route path="/readings" exact component={Readings} />
                                    </div>
                                </div>
                                <Footer />
                            </div>
                        </div>
                    </BrowserRouter>
                </div>
            </div>  
        );
    }
};

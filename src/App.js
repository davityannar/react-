import React, {Component} from 'react';
import Card from './mainComponents/Card/Card';
import Header from './mainComponents/Header/Header';
import Footer from './mainComponents/Footer/Footer';
import SortingSection from './mainComponents/SortingSection/SortingSection';


export class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SortingSection />
                <Card />
                <Footer />
            </div>
        )
    }
}

export default App;
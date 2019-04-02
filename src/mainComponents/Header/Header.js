import React, {Component} from 'react';
import Netflix from '../../components/Netflix/Netflix';
import FindeYourMovie from '../../components/FindYourMovie/FindeYourMovie';
import { Search } from '../../components/Search/Search';

import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className='header-image'>
                <div className='header'>
                    <Netflix />
                    <FindeYourMovie />
                    <Search />
                </div>
               
            </div>
        )
    }
}

export default Header;
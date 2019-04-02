import React, {Component} from 'react';
import Netflix from '../../components/Netflix/Netflix';

import './Footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-wrapper'>
                    <Netflix />
                </div>
                
            </div>
        )
    }
}

export default Footer;
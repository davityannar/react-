import React, {Component} from 'react';
import CardItem from '../../components/CardItem/CardItem';
import './Card.scss';

import KillBill from '../../assets/KillBill.jpg';

const movies = [
    {
        imgSrc: KillBill,
        name: 'Kill Bill',
        year: 2005,
        genre: 'Crime'
    },
    {
        imgSrc: KillBill,
        name: 'Kill Bill',
        year: 2005,
        genre: 'Crime'
    },
    {
        imgSrc: KillBill,
        name: 'Kill Bill',
        year: 2005,
        genre: 'Crime'
    },
    {
        imgSrc: KillBill,
        name: 'Kill Bill',
        year: 2005,
        genre: 'Crime'
    },
    {
        imgSrc: KillBill,
        name: 'Kill Bill',
        year: 2005,
        genre: 'Crime'
    },
    {
        imgSrc: KillBill,
        name: 'Kill Bill',
        year: 2005,
        genre: 'Crime'
    },
]

export class Card extends Component {

    componentDidMount(){
        fetch('https://reactjs-cdp.herokuapp.com/movies?search=a&searchBy=title&limit=100')
        .then((data) => data.json())
        .then(console.log)
    }

    render() {
        return (
            <div className='card-wrapper'>
                {movies.map((movie, index) => <CardItem key={index} {...movie}/>)}
            </div>
        )
    }
}

export default Card;
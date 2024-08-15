import { useEffect, useState } from 'react';
import api from '../../services/api';

import './home.css'

import Arrow from './../../assets/icons/arrow.svg'

function Home() {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);

    const [pageCard, setPageCard] = useState(1);

    const url = `character/?page=${pageCard}`;


    useEffect(() => {

        async function loadCards() {
            const response = await api.get(url)

            setCard(response.data.results.slice(0, 20))
            setLoading(false);
        }

        loadCards();

    })

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando cartão...</h2>
            </div>
        )
    }

    const next = () => {
        if (pageCard === 42) {
            alert("Ultima Página")

        } else {
            setPageCard(pageCard + 1);
        }
    }
    const previous = () => {
        if (pageCard === 1) {
            alert("Primeira Página")

        } else {
            setPageCard(pageCard - 1);
        }
    }

    return (
        <div className="container">
            {card.map((card) => {
                return (
                    <div className="card" key={card.id}>

                        <img src={`${card.image}`} alt={card.name} />
                        <div>
                            <h2>{card.name}</h2>

                            <div className='status'>
                                <span className={card.status}></span>
                                <h3>{card.status} - {card.species}</h3>
                            </div>

                            <p>Status: {card.status}</p>
                            <p>Specie: {card.species}</p>


                        </div>

                    </div>
                )
            })}

            <div className='card' id="button">
                <button className='previous' onClick={previous}>
                    <img src={Arrow} id="previous-img" alt='' />
                    Previous
                </button>

                <button className='next' onClick={next}>
                    Next
                    <img src={Arrow} id="next-img" alt='' />
                </button>
            </div>

        </div>
    )
}

export default Home;
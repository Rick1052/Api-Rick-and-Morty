import { useEffect, useState } from 'react';
import api from '../../services/api';

import './home.css'

function Home() {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadCards() {
            const response = await api.get("character")

            //console.log(response.data.results.slice(0, 10));
            setCard(response.data.results.slice(0, 100))
            setLoading(false);

        }

        loadCards();

    }, [])



    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando cartão...</h2>
            </div>
        )
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

        </div>
    )
}

export default Home;
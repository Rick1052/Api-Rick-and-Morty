import { useEffect, useState } from 'react';
import api from '../../services/api';

import './home.css'

function Home() {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("character", {
                params: {

                }
            })

            //console.log(response.data.results.slice(0, 10));
            setCard(response.data.results.slice(0, 10))
            setLoading(false);

        }

        loadFilmes();

    }, [])



    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
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
                            <h3>{card.origin.name}</h3>
                            <p>Status: {card.status}</p>
                            <p>Specie: {card.species}</p>

                            {/* <Link to={`/filme/${filme.id}`}>Acessar</Link> */}
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default Home;
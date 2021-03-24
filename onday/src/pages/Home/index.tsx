import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

import LoadGif from '../../components/img/giphy.gif';
import api from '../../service/api';
import { Main, Card, Title, CardList, Input, Btn } from './styles'

interface IJoke {
    id: string;
    icon_url: string;
    value: string;
}
const Home: React.FC = () => {

    const [categoriesJoke, setCategoriesJoke] = useState([]);
    const [categorySelected, setCategorySelected] = useState<IJoke>()
    const [searchJoke, setSearchJoke] = useState('')
    const [isLoad, setIsLoad] = useState(false)
    const [resultSearch, setResultSearch] = useState<IJoke[]>([])



    useEffect(() => {
        api.get('jokes/categories').then(
            response => {
                setCategoriesJoke(response.data)
            }
        )
    }, [])

    async function handleJokes() {
        setIsLoad(true)
        const response = await api.get(`jokes/search?query=${searchJoke}`)
        setResultSearch(response.data.result)
        if (response.status === 200) {
            setIsLoad(false)
        }
    }

    async function handleJokeByCategory(e: string) {
        setIsLoad(true)
        const response = await api.get(`jokes/random?category=${e}`)
        setCategorySelected(response.data)
        if (response.status === 200) {
            setIsLoad(false)
        }



    }
    return (
        <>
            <Navbar />
            <Main>
                <section>
                    <div>
                        <ul>
                            {categoriesJoke.map((joke, index) => (
                                <li key={index} onClick={() => handleJokeByCategory(joke)}>{joke}</li>
                            ))}
                        </ul>

                        <Card>
                            <img src={categorySelected?.icon_url} alt={categorySelected?.value} />
                            <h3>{categorySelected?.value}</h3>
                        </Card>
                    </div>

                    <Title>Fid Joke</Title>
                </section>

                <article>

                    <Input placeholder="Category"  type="text" onChange={e => setSearchJoke(e.target.value)} />
                    <Btn className="btn" type="submit" onClick={handleJokes}> Find joke</Btn>

                    <Title>find results for:</Title>
                    <section>
                        {isLoad ? <img src={LoadGif} alt="load" /> : resultSearch.map(result => (
                            <CardList key={result.id}>
                                <img src={result.icon_url} alt={result.value} />
                                <h3>{result.value}</h3>
                            </CardList>
                        ))}


                    </section>
                </article>
            </Main>
        </>
    )
}
export default Home;

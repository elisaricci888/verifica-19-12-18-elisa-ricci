import React, { Component } from 'react';
import './Body.css';


class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // imposto nell'inizializzazione dello state l'array vuoto card. mi serve per metterci dentro il contenuto del json restituitomi dalla fetch 
            card: []
        }
    }

    //  dopo che tutto il DOM è montato col contenuto del render, reactjs arriva qui dove definisco la funzione della fetch
    componentDidMount() {
        this.cardFetch()
    }

    //  chiamo la funzione della fetch
    cardFetch() {
        fetch('https://jsonplaceholder.typicode.com/photos/1')
            .then(response => response.json())
            .then(json => this.setState({ card: json }))
    }

    render() {
        const { card, loading } = this.state
        return (
            //  div padre
            <div>
                {(
                    //  entro dentro il risultato della fetch e poi dentro l'array
                    card.data &&
                    //  ciclo i dati restituiti dalla fetch col ciclo map. passo alla funzione due parametri: item mi dà l'oggetto completo, idx mi dà il primo valore di item
                    card.data.map((item, idx) =>
                (
                    //  questo è il mio div principale.
            <div key={`elem-${idx}`}

                        <Card>
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                </CardBody>
                <CardImg top width="10%" src={item.avatar} alt="Immagine Card" />
                <CardBody>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida feugiat elementum.</CardText>
                </CardBody>
            </Card>
            

            <div>)
                )
        //  div padre
            </div>






export default Body;








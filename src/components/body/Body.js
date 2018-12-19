import React, { Component } from 'react';
import './Body.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

// loader
import Loader from 'react-loader-spinner'

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // imposto nell'inizializzazione dello state l'array vuoto card. mi serve per metterci dentro il contenuto del json restituitomi dalla fetch 
            card: [],
            page: [],
            loading: false
        }
    }

    //  dopo che tutto il DOM è montato col contenuto del render, reactjs arriva qui dove definisco la funzione della fetch
    componentDidMount() {
        try {
            this.setState({ loading: true })
            setTimeout(() => {
                this.pageFetch()
                this.setState({ loading: false })
            }, 5000)
        } catch (err) {
            console.log(err)
        }
    }

    //  chiamo la funzione della fetch
    pageFetch() {

        fetch('https://jsonplaceholder.typicode.com/photos/1')
            .then(response => response.json())
            .then(json => this.setState({ page: json }))


    }




    render() {
        // per non doverlo riscrivere ogni volta
        const { page, loading } = this.state
        return (
            //div padre
            <div>
                {loading ?
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    /> : (
                        page.data &&
                        //inizio del map
                        page.data.map((item, idx) =>
                            (
                                // div principale. gli assegno key, come vuole il map, 
                                <div key={`elem-${idx}`}>

                                    <Card className="Card">
                                        <CardBody>
                                            <CardImg top width="10%" src={item.thumbnailUrl} alt="Card Thumbnail" />
                                            <CardText>{item.id}</CardText>
                                            <CardTitle>{item.title}</CardTitle>
                                            <CardImg top width="10%" src={item.url} alt="Card Image" />
                                        </CardBody>
                                    </Card>

                                </div>)
                        )
                        //chiusura del map
                    )
                }
            </div>//chiusura del div padre


        )//chiusura return
    }//chiusura render
}//chiusura componente

export default Body;



/*
LE API LE PRENDO DA QUI:


https://jsonplaceholder.typicode.com/photos/1


{
"albumId": 1,
"id": 1,
"title": "accusamus beatae ad facilis cum similique qui sunt",
"url": "https://via.placeholder.com/600/92c952",
"thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
*/


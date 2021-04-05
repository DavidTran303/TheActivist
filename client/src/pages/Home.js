import React, {useEffect, useState} from "react";
import {Container, Card} from 'semantic-ui-react';
import CardData from '../Components/Card/CardData'

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
         fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data) => setProducts(data));
    }, []);

//Map methods over products
    return (
        <>
        <Container>
        <Card.Group itemsPerRow={4}>
       {products.map((product) => (
           <CardData 
           key={product.id}
           title={product.title}
           description={product.description}
           image={product.image}
           price={product.price}
           />
       ))}
        </Card.Group>
        </Container>
        </>
    )
}

export default Home

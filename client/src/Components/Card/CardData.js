import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react'

function CardData({image, title, price, category, description}) {
    return (

<Card>
  <Image src={image}/>
    <Card.Content>
<Card.Header>{title}</Card.Header>
<Card.Meta>{category}</Card.Meta>
<Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content>
      <Button color="red">Add To Cart</Button>
    </Card.Content>
</Card> 
)
}

export default CardData;

import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function VideoCard(props) {
    return (
        <Card style={{margin: "2em"}}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>{props.video.title}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Recommendation</Button>
            </Card.Body>
        </Card>
    )
}

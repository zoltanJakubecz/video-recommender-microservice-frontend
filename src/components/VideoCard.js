import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DetailsModal from './Modal'

export default function VideoCard(props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Card style={{margin: "2em"}}>
            <Card.Header as="h5">{props.video.title}</Card.Header>
            <Card.Body>
                <Card.Title>URL:</Card.Title>
                <Card.Text>
                    {props.video.url} alt="Kukutyin"
                </Card.Text>
                <Button variant="primary" onClick={() => setModalShow(true)}>Recommendation</Button>
                <DetailsModal
                    video={props.video}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Card.Body>
        </Card>
    )
}

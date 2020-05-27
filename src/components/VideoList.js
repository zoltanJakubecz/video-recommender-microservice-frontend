import React, {useContext} from 'react';
import {VideoContext} from '../contexts/VideoContext';
import VideoCard from './VideoCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function VideoList() {
    const videos = useContext(VideoContext)
    console.log(videos);

    return (
        <Container fluid="md">
            {videos.map((video, index) => (
                 <VideoCard key={index} video={video} />
            ))}
        </Container>
    )
}

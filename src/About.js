import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./About.css"

function About(){
    return(
        <Container className="align-self-start">
            <Row>
                <Col className="colOne">
                <h1 className="story">Our Story</h1>
                <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim ut. Porta nibh venenatis cras sed felis eget velit aliquet. Volutpat odio facilisis mauris sit amet. Dolor sit amet consectetur adipiscing elit duis. Id venenatis a condimentum vitae sapien pellentesque habitant. Enim facilisis gravida neque convallis a cras. Orci eu lobortis elementum nibh. Nulla facilisi etiam dignissim diam quis enim lobortis. Quis ipsum suspendisse ultrices gravida. Suscipit adipiscing bibendum est ultricies integer quis auctor.

                Magna sit amet purus gravida quis blandit turpis cursus in. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Lobortis scelerisque fermentum dui faucibus in ornare. Ut etiam sit amet nisl. Nisl purus in mollis nunc sed id semper risus. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. In mollis nunc sed id semper. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Leo urna molestie at elementum eu facilisis. Massa ultricies mi quis hendrerit dolor magna eget. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Euismod quis viverra nibh cras pulvinar mattis. Vivamus at augue eget arcu dictum varius duis. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ut morbi tincidunt augue interdum velit.

                Sed id semper risus in. Lacus viverra vitae congue eu consequat ac felis. Sagittis id consectetur purus ut. Praesent tristique magna sit amet purus gravida. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Integer enim neque volutpat ac tincidunt vitae semper. Nam at lectus urna duis. Tellus molestie nunc non blandit massa enim nec dui nunc. Semper auctor neque vitae tempus quam pellentesque. Nulla porttitor massa id neque aliquam vestibulum morbi. 
                </p>
                </Col>
                <Col className="colTwo">
                <img alt="" src="https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"></img>
                </Col>
            </Row>
        </Container>
            
    )
}

export default About
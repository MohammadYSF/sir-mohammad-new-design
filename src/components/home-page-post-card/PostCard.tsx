import React from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import classes from './styles.module.css';
export default class PostCard extends React.Component {
    render() {
        return (
            <Card className={`border-0  mt-5 ${classes.card}`}>
                <Row>
                    <Col md={2}>
                        <Card.Img className={`img-fluid rounded-0 ${classes.cardImg}`}
                            src="http://sirmohammad.ir/Images/Posts/MainImages/100x100/3ba67729-6daf-4be6-aed3-66f6737efad5.jpg"
                             />
                    </Col>
                    <Col md={10}>

                        <Card.Body className = {`text-right ${classes.cardBody}`}>
                                <Card.Title className={classes.cardTitle}>قلعه حیوانات کتاب روشنگری</Card.Title>
                                <Card.Text>قلعه حیوانات ، کتابی که جرج اورل ، نویسنده کتاب را به اوج شهرت رساند ،
                                    را می توان یکی از بهترین کتاب های نوشته شده در قرن بیستم خواند</Card.Text>
                                <Card.Text><small className="text-muted">نوشته در 22 بهمن 1400</small></Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
}
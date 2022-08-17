import React from "react";
import {Button, Card} from "react-bootstrap";
import moment from 'moment-jalaali';
import classes from './styles.module.css';
interface props extends commentType {
   cssClasses:string[]
}
type commentType = {
    name:string,
    date:Date,
    text:string
}
const Comment:React.FC<props> = (props):JSX.Element => {
    return (
        <>

            <Card className={`${props.cssClasses.join(' ')} border-0 rounded-0 ${classes.customCard}`}>
                <Card.Header className={'bg-transparent border-0'} as="h6"><span className={'text-success'}>{props.name}</span> در تاریخ {new Intl.DateTimeFormat('fa-IR').format(props.date)} فرموده : </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
export  default  Comment;
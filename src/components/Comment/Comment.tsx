import React from "react";
import {Button, Card} from "react-bootstrap";
import moment from 'moment-jalaali';
import classes from './styles.module.css';
interface props extends commentType {
   
}
type commentType = {
    name:string,
    date:Date,
    text:string
}
const Comment:React.FC<props> = (props):JSX.Element => {
    return (
        <>

            <Card className={`border-0 rounded-0 ${classes.customCard} h-50`}>
                <Card.Header className={'bg-transparent border-0'} as="h6"><span className={'text-success'}>{props.name}</span> در تاریخ {new Intl.DateTimeFormat('fa-IR').format(props.date)} فرموده : </Card.Header>
                <Card.Body>
                    <Card.Text>
                        اين يک متن تست بلند بالا مثلا است براي اينکه ببينيم که آيا اين کامپوننت از نظر بصري زيبا است يا نه و اگر زيبا نبود آن را بايدري نداشته باشيم 
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
export  default  Comment;
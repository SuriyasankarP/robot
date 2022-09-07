import React from "react";
import Card from "./card";
import {robot} from './robot'

const CardList=()=>{
    return(
        <div>
            <Card id={robot[0].id} name={robot[0].name} email={robot[0].email}/>
            <Card id={robot[1].id} name={robot[1].name} email={robot[1].email}/>
            <Card id={robot[2].id} name={robot[2].name} email={robot[2].email}/>
            <Card id={robot[3].id} name={robot[3].name} email={robot[3].email}/>
            <Card id={robot[4].id} name={robot[4].name} email={robot[4].email}/>
        </div>
    )
}
export default CardList;
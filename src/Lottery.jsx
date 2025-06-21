import {useState} from "react";
import "./Lottery.css";
import {genTicket} from "./helper"; 
import {sum} from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n,winCondition}){
    let [ticket,setTicket]=useState(()=>genTicket(n));
    let isWinning=winCondition(ticket);
    let reGenerate=()=>{
        setTicket(()=>genTicket(n));
    }
    return(
        <div>
            <h3>Lottery Game!</h3>
            <Ticket ticket={ticket}/>
            <button onClick={reGenerate}>Buy New Ticket</button>
            <br />
            <p>{isWinning?"Congratulations you won!":"Sorry! try again"}</p>
        </div>
    );
}
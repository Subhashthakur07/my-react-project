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
        <div className="Lottery">
            <h3>Lottery Game by <i>sobby</i>!</h3>
            <Ticket ticket={ticket}/>
            <button onClick={reGenerate} style={{backgroundColor:"pink"}}>Buy New Ticket</button>
            <br />
            <p>{isWinning?<p style={{color:"Green"}}>"Congratulations you won!"</p>:<p style={{color:"Red"}}>"Sorry! try again"</p>}</p>
        </div>
    );
}
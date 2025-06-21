import ProductTab from "./ProductTab.jsx";
import "./App.css";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
import LikeButton from "./LikeButton.jsx";
// import MsgBox from "./MsgBox.jsx";
import LudoGame from "./LudoGame.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx"

function App() {
  let winCondition=(ticket)=>{
    let sum=ticket.reduce((curr,sum)=>curr+sum,0);
    return sum==15;
  }
  return(
    <div className="appLottery">
      <Lottery n={3} winCondition={winCondition}/>
    </div>
    
  );
}
  

export default App;

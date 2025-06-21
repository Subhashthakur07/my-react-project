import "./Product.css";
import Price from "./Price.jsx";
function Product({title,idx})
{
    let oldPrices=["₹1500","₹1200","₹1300","₹1000"];
    let newPrices=["₹1000","₹800","₹900","₹600"];
    let description=[["delicious Gwalior ","gwalior-with-ghazak "],["delicious Mathura ","mathura-with-peda"],["delicious Jaipur ","jaipur-with-ghevar"],["delicious Agra ","agra-with-peda"]];
    return ( 
    <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p style={{fontFamily:"cursive"}}>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        
    </div>
    );
}
export default Product;
export default function Price({oldPrice,newPrice})
{
    return(
    <div style={{backgroundColor:"#e0c367",height:"25px",borderBottomLeftRadius:"14px",borderBottomRightRadius:"14px"}}>
    <span style={{textDecorationLine:'line-through'}}>{oldPrice}</span>
    &nbsp;&nbsp;
    <span style={{fontWeight:"bold"}}>{newPrice}</span>
    </div>
    );
}
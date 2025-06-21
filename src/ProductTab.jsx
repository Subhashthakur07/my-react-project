import Product from "./Product";

function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    };
    return(
        <div style={styles}>
        <Product title="Gwalior Ki Gajhak" idx={0}/>
        <Product title="Mathura ka Peda" idx={1}/>
        <Product title="Jaipur ka Ghevar" idx={2}/>
        <Product title="Agra ka Pentha" idx={3}/>
        </div>
    );
}
export default ProductTab;
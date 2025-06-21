function MsgBox({userName,textColor})
{
    let styles={color:textColor};
    return(
        <h2>Hello, <p style={styles}>{userName}</p></h2>
    );
}
export default MsgBox;
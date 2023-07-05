

function Btn({title, bgColor, color, border, clickFunc}){
    const BtnStyle = {
        background: bgColor ? bgColor : "none",
        color: color,
        borderRadius: '5px',
        cusor: 'pointer',
        padding: "10px 20px",
        border: border ? border : "none",
        outline: "none",
        display: "inline-block",
        margin: "10px",
    }
    return <button style={BtnStyle} onClick={clickFunc}> {title} </button>    
}
export default Btn;
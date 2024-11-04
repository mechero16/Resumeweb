const Infolan = (props)=>{
    return(
    
<>
    <div  style={{ fontFamily: '"Poppins", sans-serif',fontWeight: "lighter",display:'flex'}} >

    <div style={{ fontSize:'0.8vw',textAlign:'left',width:'50%'}}>{props.title}</div>

    <div style={{fontSize: '0.8vw', textAlign:'right',width:'50%'}}>{props.value}</div>

</div>

</>
 ) 

}
export default Infolan;
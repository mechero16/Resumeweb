import Circularpb from "./Circularpb"

function Lang(prog) 
{
    return (
        
            <div style={{width: '5vw', height: '5vw',margin:'0%' ,padding:'0%' , color:'#FFFFFF',fontSize: '0.7vw',fontFamily: "Poppins , sans-serif" , fontWeight: "lighter",display:"flex",alignItems:'center',flexDirection:'column'}}>

            <Circularpb  value={prog.value}  />
            <p>{prog.Lang}</p>

            </div>
            

            
    )
    
}
export default Lang;
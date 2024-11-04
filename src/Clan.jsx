import ProgressLine from './ProgressLine'



function Clan(prop) {


  let value = prop.value +"%"


  return( 
    

<>
<div style={{marginTop:'0.5vw'}}>



<div  style={{ fontFamily: '"Poppins", sans-serif',fontWeight: "lighter",display:'flex'}} >

<div style={{ fontSize:'0.8vw',textAlign:'left',width:'50%'}}>{prop.lan}</div>

<div style={{fontSize: '0.8vw', textAlign:'right',width:'50%'}}>{value}</div>

</div>  

  <div >

<ProgressLine
  backgroundColor="#191923"
  
           visualParts={[
          { 
            percentage: value ,
            color: "#FFC107"
          }
        ]}
      />
    </div>

    </div>
    </>
    
  

    )
    
}

export default Clan;
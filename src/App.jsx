import { useEffect, useState } from 'react'
import './App.css'
import Author from './Author'
import Clan from './Clan'
import Infolan from './Infolan'
import Lang from './Lang'
import { CardGroup, Col, Row } from 'react-bootstrap'
import Content from './Content'



function App() {


  const typingText = "Let's discover together";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [typingDirection, setTypingDirection] = useState(1); // 1 for typing forward, -1 for backspacing

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typingDirection === 1) {
        if (typedText.length < typingText.length) {
          setTypedText(prevText => prevText + typingText[prevText.length]);
        } else {
          setTypingDirection(-1); // Switch to backspacing
        }
      } else if (typingDirection === -1) {
        if (typedText.length > 0) {
          setTypedText(prevText => prevText.slice(0, -1));
        } else {
          setTypingDirection(1); // Switch to typing forward
        }
      }
    }, 100); // Adjust the typing speed (in milliseconds)

    return () => clearInterval(typingInterval);
  }, [typedText, typingDirection]);

  return (
    <>



  <div style={{ display: 'flex' }}>
        <div style={{ zIndex: 1 }}>  {/* Set z-index for the left section */}
          <div id='content' style={{ 'overflow-y': 'scroll', height: '36vw' }}>
          <div id='content' style={{'overflow-y': 'scroll',height:'36vw'}} >

  <div style={{position:'sticky',top:0}}>
  <Author />  
  </div>


<div style={{'border-top':'2px solid white' , color:'white', 'background-color':'#20202A',padding:"1.5vw"}} >
  
  <Infolan title="Residence:" value="India"></Infolan>
  <Infolan title="City:" value="Mangalore"></Infolan>
  <Infolan title="Age:" value="18"></Infolan>


</div>
  


<div className='infcon'  style={{'justify-content': 'center',padding:'1vw' , display: 'flex','align-items': 'center',flexDirection:'row','border-top':'2px solid white'}} >

<Lang Lang="English" value="75" />
<Lang Lang="Hindi" value="85" />
<Lang Lang="Kannada" value="75" />



</div>

<div className='infcon'  >

  <div style={{height:'7vw',width:'90%',margin:'auto'}} >

  <Clan value="90" lan="HTML"></Clan>
  <Clan value="75" lan="CSS"></Clan>
  <Clan value="45" lan="PHP"></Clan>
  <Clan value="80" lan="JavaScript"></Clan>

  </div>

</div>

<div style={{background: '#252531',position:"sticky",bottom:"0"}}>
  <a href=''><img style={{width:"2vw",padding:"2%"}} src="src\assets\git1.png" /></a>
  <a href=''><img style={{width:"2vw",padding:"2%"}} src="src\assets\whatsapp.png" /></a>
  <a href=''><img style={{width:"2vw",padding:"2%"}} src="src\assets\email.png" /></a>
</div>

      
    </div>
          </div>
        </div>



        <div id="lcontent" style={{ width: "70%", background: "#252531", height: '36vw', zIndex: 0, position: 'relative','overflow-y': 'scroll' }}>
    
          
          <img style={{ width: "75%", margin: "2vw", borderRadius: "2%" }} src="src\assets\art-7117910_1280.jpg" alt="" />
          <div style={{    position: "relative", top: "-52%",left: "40%",transform: "translate(-50%, -50%)","text-align": "center",color:"white",    "z-index": 1,"font-size": "2vw", fontFamily: 'Roboto, sans-serif'  }}>
            Discover my Amazing Art Space!
          </div>
          
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 1,"font-size": "1.5vw",fontFamily: 'Courier New, monospace', display:"flex" }}>

          <div style={{ position: 'absolute', fontFamily: 'Courier New, monospace', color: "yellow", top: '50%', left: '35%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center' }}>
  <code style={{ color: 'white' }}>
  &lt;<div style={{ color: 'yellow',display:'inline-block' }}>code</div>&gt;{typedText}&lt;<div style={{ color: 'yellow',display:'inline-block' }}>/code</div>&gt;
  </code>

  
</div>

<div style={{position:"relative",top: '182px',margin:'0'}} >
<p>My Projects</p>

<div style={{width: '61vw',height: '3vw',position:"relative",left:'42px'}}>

  <Row xs={1} md={3} className="g-1">
                <Col >
                  <Content title="AutoSearch" dis="its an webextention" />
                </Col>

                <Col >
                  <Content title=" webpage" dis="departmental cse at kpt " />
                </Col>

                <Col >
                  <Content title="Attendence teacker" dis="ofr kpt college" />
                </Col>
                
              </Row>

</div>
</div>



</div>


              
          
</div>
          

       



</div>

        
    


      


 
  </>
  )
}

export default App

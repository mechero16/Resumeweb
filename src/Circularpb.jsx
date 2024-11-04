import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';



function Circularpb(prog){
    return(
       
   <div style={{width: '3vw', height: '3vw'}} >
   
   <ProgressProvider valueStart="0" valueEnd={prog.value}>
          {value => <CircularProgressbar   strokeWidth={5} value={value} text={`${value}%`} styles={buildStyles({textColor: "white", pathColor: "#FFC107",trailColor: "#191923",
             
            })} />}
        </ProgressProvider>

   </div>
     
    )

}
export default Circularpb;

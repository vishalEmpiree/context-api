
import React, {useContext} from 'react';
import CricketContext from '../context/CricketContext'; // {a: 10}

const Cricket = () => {
      let {cricketer,setCricketer} = useContext(CricketContext)  

    //   console.log(obj) 
       // {cricketer: cricketer, setCricketer: setCricketer, count: count}

       function updateWicket(){
        setCricketer({...cricketer, wickets: 50})
       }
       


    return(
        <div>
             <h1> Cricketer is {cricketer.name}</h1>
            <p> Age is {cricketer.age}</p> 
            <p> Runs are {cricketer.runs}</p>
            <p> Wickets are {cricketer.wickets}</p>
            <button onClick={updateWicket}>Update Wicket</button>
            <p> Matches are {cricketer.matches}</p>            
        </div>
    )
}


export default Cricket;




// difficult 
// easy



{/* <CricketContext.Consumer> 
               { 
                (info) => (
                   <h1>
                      value is {info}
                   </h1>
                )
               }
</CricketContext.Consumer> */}

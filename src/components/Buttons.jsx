import axios from 'axios'
import React, { useState } from 'react'
import Leetcode from './Leetcode';

function Buttons() {

    const [leetcodeData,setLeetcodeData]=useState();
    const [lcdata,setlcdata]=useState(false);
    
    async function getdata(){
        
        axios
        .get("https://leetcode-stats-api.herokuapp.com/shashankpatil125")
        .then(function(r){
            // console.log(r.data);
            setLeetcodeData(r.data);
        })
        setTimeout(() => {
            setlcdata(true)
        }, 2000);
        
        // console.log(response.data);
    }



  return (
    <div>
        <button onClick={getdata}>Leetcode</button>
        {lcdata?<Leetcode data={leetcodeData} username="shashankpatil125"/>:null}
    </div>
  )
}

export default Buttons
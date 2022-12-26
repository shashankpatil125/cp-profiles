import axios from 'axios'
import React, { useState } from 'react'

function Leetcode(props) {
  console.log(props.data);



  return (
    <div>
        <p>Username = {props.username}</p>
        <p>Solved Problem = {props.data.totalSolved}/{props.data.totalQuestions}</p>
        <p>Easy problems = {props.data.easySolved}/{props.data.totalEasy}</p>
        <p>Medium problems = {props.data.mediumSolved}/{props.data.totalMedium}</p>
        <p>Hard problems = {props.data.hardSolved}/{props.data.totalHard}</p>
        <p>Global rank = {props.data.ranking}</p>
        <p>Acceptance rate = {props.data.acceptanceRate}</p>

        <div></div> 
    </div>
  )
}

export default Leetcode
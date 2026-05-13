import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const scores  = [
  { 이름: "John", 국어:90,영어:90,수학:80,과학:90},
  { 이름: "Peter", 국어:90,영어:90,수학:80,과학:90},
  { 이름: "Susan", 국어:90,영어:90,수학:80,과학:90},
  { 이름: "Sue", 국어:90,영어:90,수학:80,과학:90},
]
 

//let newscores = numbers.map(item=>{return item*2})
//console.log(newscores)


let numbers = [1, 2, 3]
let newscores = []
for(let i=0; i<numbers.length;i++){
  newscores.push(<td>number[i]</td>)
}   

console.log(newscores)


function App() {     
  return (
    <table>
      {newscores}
      <tr>  
        <th>이름</th>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>과학</th>
      </tr>
      {[0,1,2,3].map(idx =>
        {
     <tr> 
      <td>{scores[0].이름}</td>
      <td>{scores[0].국어}</td>
      <td>{scores[0].영어}</td>
      <td>{scores[0].수학}</td>
      <td>{scores[0].과학}</td>
      </tr>
      )
    )
  }
      </table>
  )
}
export default App

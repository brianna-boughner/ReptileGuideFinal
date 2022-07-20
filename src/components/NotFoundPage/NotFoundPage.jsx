
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap';

export default function NotFoundPage() {
  return (
    <div style={{textAlign:"center", paddingTop:"10%"}}>
   <h1>Oops!</h1>
   <h3>The page you were looking for does not exist.</h3>
   <a href="/">
   <button style={{border:"none", backgroundColor:"#EDF49A", borderRadius: "20px", color: "black", fontSize: "20px", padding: "0.5%", marginTop: "1%", paddingRight: "1%", paddingLeft: "1%"}}>Return to Home</button>
   </a>
   </div>
  )
}
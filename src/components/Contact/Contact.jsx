import './contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Instagram, TelephoneFill, Envelope } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Contact() {


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else(setIsSubmitted(true))

    setValidated(true);
  };


  const [isSubmitted, setIsSubmitted] = useState(false);
  function formSubmit(){
    setIsSubmitted(true)
  }
  console.log("validated? " + validated)
  return (
   
    <div className="contactContainer">
     <h1 style={{fontSize:"24px"}}>Contact Us</h1>
     {isSubmitted ? (
     <div>
     <h5>Thank you for your submission!</h5>
     <p>We will get back to you within 2 business days.</p>
   </div>
  ):
(

<>
     <h3 style={{fontSize:"18px"}}>Have questions? Suggestions? Fill out the form below to contact us.</h3>

     <Form validated={validated} onSubmit={handleSubmit} className="formContainer">

     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Your name</Form.Label>
    <Form.Control required size="sm" type="text"/>
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required size="sm" type="email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label >Explain your inquiry below</Form.Label>
    <Form.Control required size="sm" as="textarea" rows={3} />

  </Form.Group>

  <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Attachments (Optional)</Form.Label>
    <Form.Control size="sm" type="file" multiple />
  </Form.Group>


  <Button variant="primary" type="submit" className="submitButton">
    Submit
  </Button>
</Form>
</>










)}
</div>
)}

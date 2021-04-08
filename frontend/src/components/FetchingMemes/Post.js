import { Card,Button,Modal,Form} from 'react-bootstrap';
import './post.css';
import {useState} from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = (props) => {

  const [name, setName] = useState(props.title);
  const [caption, setCaption] = useState(props.bodyText);
  const [url, setUrl] = useState(props.url);
  const id = useState(props.id);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
  
  }; 

  function updateMeme() {

    const data = {
      name: name,
      caption: caption,
      url: url
    };

    axios.patch(`http://localhost:8081/memes/${props.id}`, data)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        console.log(data);

      });
    }

  return (
    <Form onSubmit={onLoginFormSubmit} >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Caption</Form.Label>
        <Form.Control
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Url</Form.Label>
        <Form.Control
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={updateMeme}  type="submit" block>
      Edit 
      </Button>
    </Form>
  );
};


const Post = props => {

  const [show, setShow] = useState(false);

   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleDelete() {
    console.log('clicked from frontend')

    axios.delete(`http://localhost:8081/memes/${props.id}`)
  .then((response) => {

    console.log(response.data);
  });

  toast.error("Deleted Successfully")
}


    return (
        
        <Card  className=" border-dark mb-5 mx-auto text-center memeCard  " >
            <Card.Img variant="top" src={props.imgsrc} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.redd.it/x1sr1lob3ai41.jpg"}}/>
            <Card.Body className="memeCardBody">
                <Card.Title className="memeTitle">{props.bodyText}</Card.Title>
                <Card.Text className="memeCaption">
                    This meme is submitted by {props.title || "unknown"}
                </Card.Text>
                <Button  onClick={()=> window.open(props.imgsrc, "_blank")}  className="fullview">See Full Size</Button>


                <Button variant="success" className="ml-1" onClick={handleShow}>
          Edit
        </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
          <Modal.Title>Edit Meme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm title={props.title} bodyText={props.bodyText} url={props.imgsrc} id={props.id}/>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger"  onClick={handleClose}>
            Close
          </Button>
          <ToastContainer />
        </Modal.Footer>
      </Modal>

      <Button variant="danger" className="ml-1" onClick={handleDelete}>
          Delete
        </Button>

            </Card.Body>
            </Card>
    )
}

export default Post;
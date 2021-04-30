import React, { useContext, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal';
// import { UserContext } from '../../../App';

const Contact = () => {
    const [modalShow, setModalShow] = useState(false);
    // const [loggedInUser] = useContext(UserContext);
    const [wrongMessage, setWrongMessage] = useState(false);
    const [user, setUser] = useState({});
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        // console.log(evt.target)
        const curUser = {
            from_name: evt.target.first_name.value + " " + evt.target.last_name.value,
            reply_to: evt.target.email.value,
            phone: evt.target.phone.value,
            message: evt.target.message.value
        }
        // console.log(user);
        emailjs.sendForm('itsforyou', 'template_esocsya', evt.target, 'user_z1NIIg9IrX3DIJgTQOSDK')
        .then((result) => {
            // console.log(result.text);
            if(result.text === "OK"){
                // .....MODAL Bootstrap......
                setWrongMessage(false)
                setUser(curUser);
                setModalShow(true);
            }
        }, (error) => {
            console.log(error.text);
        });
        // emailjs.sendForm('mehedi30313', 'template_t70m5mp', evt.target, 'user_FBbxAs5F2iR78ILK22cF3')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        evt.target.reset()
    }
    return (
        <div className="container py-4 pb-5">
            <h3  className="py-4 mt-5 header">CONTACT</h3>
            
            <h6 className="header pb-3">Let us handle your project, professionally</h6>
            <form onSubmit={handleSubmit} className="bg-transparent home-form">
                <div className="row justify-content-center">
                    <div className="col-md-6 form-group">
                        <input type="text" name="from_name" placeholder="First Name" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="text" name="last_name" placeholder="Last Name" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="email" name="reply_to" placeholder="Email Address" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="tel" name="phone" placeholder="Phone Number" className="form-control" required/>
                    </div>
                    <div className="col-md-12 form-group">
                        <textarea type="text" cols='15' rows="5" name="message" placeholder="Your Message" className="form-control" required/>
                    </div>
                    <div className="container form-group w-100 d-flex justify-content-center">
                        <button type="submit" className="w-100 mx-auto btn btn-outline-warning" value="">Send Message</button>
                    </div>
                </div>
            </form>
            <MyVerticallyCenteredModal
                wrongMessage={wrongMessage}
                user={user}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Contact;

function MyVerticallyCenteredModal(props) {
    const {user, wrongMessage} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header className="bg-dark btn-close-white" closeButton>
            <Modal.Body className="bg-dark text-center py-3">
            <div className="w-100 mx-auto pt-4">
                <div className="">
                    <p className="text-center text-success">Thanks for your  mail. I will response as soon as possible.</p>
                    <h4 className="text-center text-warning">Stay with me.</h4>
                </div>
            </div>
            <button className="btn btn-danger mt-5" onClick={props.onHide}>Back</button>
        </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }
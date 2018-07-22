import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../index.css'; // Importing from index.css to apply the css styling

// export default () => (<div>
//     <h2>Do Reactstrap contact form</h2>

export default class ContactForm extends React.Component {
  
  render() {
      return (
          <div><h2 className="PageHeader">Contact Us</h2>
              <div className="FormBackground">
                <Form className="ContactForm">
                    <FormGroup>
                    <Label for="exampleEmail"></Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
                    </FormGroup>
                    
                    <FormGroup>
                    <Label for="exampleName"></Label>
                    <Input type="name" name="name" id="exampleName" placeholder="Your name" />
                    </FormGroup>
                    
                    <FormGroup>
                    <Label for="exampleMessage"></Label>
                    <Input type="textarea" name="message" id="exampleMessage" placeholder="Your message"/>
                    </FormGroup>

                    {/* <span className="ContactUsSubmitButton">   */}
                     <Button className="ContactUsSubmitButton">Submit</Button>
                    {/* </span>  */}
                  </Form>
            </div>
        </div>
    );
  }
}
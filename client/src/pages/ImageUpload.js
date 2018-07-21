import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../App.css'
import { Jumbotron } from 'react-bootstrap'
import Navigation from '../components/navbar'
import Logo from '../components/Logo'
import { render } from 'react-dom'
// import cloudinary from 'cloudinary-react'
const cloudinary = require('cloudinary')

require('dotenv').config()

// Set a constant of invoice to be the invoice ID that was passed in from the InvoiceForm page.
const invoice = ''

export default class InvoiceUpload extends Component {
    handleUploadClick = (event) => {
      window.cloudinary.openUploadWidget({ cloud_name: 'dxmelc0e6', upload_preset: 'espgallery', public_id: `${artwork}`},
        function(error, result) { console.log(error, result) });
    }
      render () {
          return (
            <div>
              <Navigation />
              <Jumbotron className='jumbotron-blue'>
                <Logo />
                  <form>
                  <a onClick={this.handleUploadClick} id='upload_widget_opener'>Upload Artwork Image</a>
                  </form>
              </Jumbotron>
            </div>
    )
  }
}
import axios from 'axios';
import {saveAs} from 'file-saver';


import './App.css';

import React, { Component } from 'react'

class App extends Component {
  state = {
    name: '',
    designation: '',
    about: '',
    eq : '',
    skills : '',
    projects : '',
    pno : '',
    email : '',
    address : ''
  }

  handleChange = ({target : {value, name}})=> { 
    this.setState({[name]: value});
  }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
    .then(()=> axios.get("fetch-pdf", {responseType : 'blob'}))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type : "application/pdf"}); 

      saveAs(pdfBlob , `${this.state.name}.pdf`);
    })
  }

  render() {
    return (
      <div className="window">
        <h1>Resume Builder</h1>
        <div className='App'>
          <h2>Fill in your details</h2>
          <input type="text" placeholder='name' name='name' onChange={this.handleChange}/><br/>
          <input type="text" placeholder='designation (which position are you in currently)' name='designation' onChange={this.handleChange}/><br/>
          <textarea
          placeholder='Tell us about yourself' name='about'
          onChange={this.handleChange}
          /><br/>
          <textarea
          placeholder='What are your Educational Qualifications' name='eq'
          onChange={this.handleChange}
          /><br/>
          <textarea
          placeholder='Tell us about your skills' name='skills'
          onChange={this.handleChange}
          /><br/>
          <textarea
          placeholder='Tell us about your projects' name='projects'
          onChange={this.handleChange}
          /><br/>
          <label>How to contact you</label><br/>
          <input type="text" placeholder='Phone number' name='pno' onChange={this.handleChange}/><br/>
          <input type="text" placeholder='Email Address' name='email' onChange={this.handleChange}/><br/>
          <textarea
          placeholder='address' name='address'
          onChange={this.handleChange}
          /><br/>
          <button onClick={this.createAndDownloadPdf}>
            Build your Resume
          </button>
        </div>
        <div className='note'>
          <h2>Suggestions</h2>
          <p>You can also use html tags in the input fields for further styling of your information in the resume.</p>
          <code>
            &lt;div&gt;we can use elements like div, &lt;p&gt;&lt;/p&gt; and so on &lt;/div&gt;<br/>
            &lt;ol&gt;&lt;li&gt;Ordered lists&lt;/li&gt;&lt;/ol&gt;<br/>
            &lt;ul&gt;&lt;li&gt;Unordered lists&lt;/li&gt;&lt;/ul&gt;<br/>
            &lt;b&gt;Text formatting tags like bold&lt;b&gt;<br/>
            &lt;i&gt;Text formatting tags like italic and so on.&lt;i&gt;
          </code>
          <p>With this feature, you can format your resume in your liking on our template.</p>
        </div>
      </div>
    )
  }
}

export default App;
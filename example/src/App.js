import React, { Component } from 'react';

import InputOTP from 'react-input-otp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otpCode: '',
    };
  }

  render () {
    const handleChange = otpCode => {
      this.setState({ otpCode });
      console.log(otpCode);
    };

    return (
      <div className='container'>
        <div className='sidebar'>
          <h3 className='sidebar-title'>React OTP<em>v0.8.2</em></h3>
          <p>A fully flexible one-time password input component for ReactJS.</p>
          <div className='bottom'>
            <a href='https://github.com/onefifteen-z/react-input-otp'>
              <svg viewBox="0 0 92 92" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Git</title><g stroke="none" fill="#7f7f7f"><path d="M90.155,41.965 L50.036,1.847 C47.726,-0.464 43.979,-0.464 41.667,1.847 L33.336,10.179 L43.904,20.747 C46.36,19.917 49.176,20.474 51.133,22.431 C53.102,24.401 53.654,27.241 52.803,29.706 L62.989,39.891 C65.454,39.041 68.295,39.59 70.264,41.562 C73.014,44.311 73.014,48.768 70.264,51.519 C67.512,54.271 63.056,54.271 60.303,51.519 C58.235,49.449 57.723,46.409 58.772,43.861 L49.272,34.362 L49.272,59.358 C49.942,59.69 50.575,60.133 51.133,60.69 C53.883,63.44 53.883,67.896 51.133,70.65 C48.383,73.399 43.924,73.399 41.176,70.65 C38.426,67.896 38.426,63.44 41.176,60.69 C41.856,60.011 42.643,59.497 43.483,59.153 L43.483,33.925 C42.643,33.582 41.858,33.072 41.176,32.389 C39.093,30.307 38.592,27.249 39.661,24.691 L29.243,14.271 L1.733,41.779 C-0.578,44.092 -0.578,47.839 1.733,50.15 L41.854,90.268 C44.164,92.578 47.91,92.578 50.223,90.268 L90.155,50.336 C92.466,48.025 92.466,44.275 90.155,41.965"></path></g></svg>
              <span>Github Repo</span>
            </a>
          </div>
        </div>
        <div className='wrapper'>
          <div>
            <form>
              <h3>Please input your OTP number.</h3>
              <InputOTP
                onChange={handleChange}
                value={this.state.otpCode}
                autoFocus
              />
            </form>
            <form>
              <h4>4-Digit Number Only</h4>
              <InputOTP numberOnly otpLength={4} />
            </form>
            <form>
              <h4>Password</h4>
              <InputOTP type='password' />
            </form>
            <form>
              <h4>Default Value</h4>
              <InputOTP otpLength={6} value="123456"/>
            </form>
            <form>
              <h4>Disabled</h4>
              <InputOTP disabled/>
            </form>
            <form>
              <h4>Error</h4>
              <InputOTP errorMessage='Invalid Token.' error/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

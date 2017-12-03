import React, { Component } from "react";
import "./App.css";
import Mark_Hinschberger_PM from "./Mark_Hinschberger_PM.pdf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p>
            Hi, I'm Mark Hinschberger and I create products and build companies <i className="em em-sunglasses" />.
          </p>
          <p>I work with Javascript and use React/Redux/Node to develop applications.</p>
          <p>
            I just launched a new product to market called&nbsp;
            <a className="notice do-it" target="_blank" href={"https://www.wordup.com.tw/about"}>
              WordUp
            </a>. It's a flash card web application to help students study for exams.
          </p>
          <p>
             I'm the creator of&nbsp;
            <a className="notice do-it" target="_blank" href={"http://www.hiredcrypto.com"}>
              HiredCrypto
            </a>
              &nbsp;a job board for the cyptocurrency industry.
            I've also created a tool called
            <a className="notice do-it" target="_blank" href={"http://www.hyptocrypto.com"}> HyptoCrypto </a>
              where I track the price of bitcoin and ethereum.
          </p>
          <p>
            <a className="notice" href="mailto:markhinschberger@gmail.com">
              <span className="do-it">You Should Email me&nbsp;</span>
            </a>
            if you're in need of a product manager or front end developer
          </p>
          <p>
            You can download my resume{" "}
            <a
              className="notice"
              href={Mark_Hinschberger_PM}
              download="download"
            >
              <span className='do-it'>here</span>.
            </a>
          </p>
          <p>
            <a className="cool-icons" href='https://www.linkedin.com/in/mark-hinschberger-3370962b/'>
              <i className="fa fa-linkedin-square fa-lg" aria-hidden="true" />
            </a>
            <a className="cool-icons" href="https://www.github.com/foodaka">
              <i className="fa fa-github fa-lg" aria-hidden="true" />
            </a>
            <a className="cool-icons" href="mailto:markhinschberger@gmail.com">
              <i className="fa fa-envelope fa-lg" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Mark_Hinschberger_PM from "./Mark_Hinschberger_PM.pdf";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <p>
                        Hi, I'm Mark Hinschberger and I like to write code and
                        build cool products <i className="em em-sunglasses"></i>.
                    </p>
                    <p>
                        I work with Javascript and use React/Redux to build UI.
                    </p>
                    <p>
                        I just launched a new product to market called&nbsp;
                        <a
                            className="notice"
                            href={"http://www.wordup.com.tw/about"}
                        >
                            WordUp
                        </a>. You should&nbsp;
                        <a
                            className="notice"
                            href={"http://www.wordup.com.tw/about"}
                        >
                            definitly
                        </a> check it out.
                    </p>
                    <p>
                        <a
                            className="notice"
                            href="mailto:markhinschberger@gmail.com"
                        >
                            <span className="do-it">You Should Email me&nbsp;</span>
                        </a>
                        if you're in need of a product manager or front end
                        developer
                    </p>
                    <p>
                        You can download my resume{" "}
                        <a
                            className="notice"
                            href={Mark_Hinschberger_PM}
                            download="download"
                        >
                            here.
                        </a>
                    </p>
                    <p>
                        <a className='cool-icons' ><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a className='cool-icons' href='https://www.github.com/foodaka'><i className="fa fa-github" aria-hidden="true"></i></a>
                        <a className='cool-icons'><i className="fa fa-envelope" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        );
    }
}

export default App;

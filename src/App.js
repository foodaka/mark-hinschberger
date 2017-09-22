import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div>
             <p>
                 Hi, I'm Mark Hinschberger and I like to write code and build cool products.
             </p>
             <p>
                 I work with Javascript and use React/Redux to build UI.
             </p>
             <p>
                 I just launched a new product to market called <span className='do-it'>WordUp</span>. You can check it out here.
             </p>
             <p>
                 <a className='notice' href="mailto:markhinschberger@gmail.com">
                     <span className='do-it'>
                         You Should Email me
                    </span>
                </a>
                 if you're in need of a product manager or front end developer
             </p>
         </div>
      </div>
    );
  }
}

export default App;

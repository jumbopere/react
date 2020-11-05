import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import setAuthToken from '../setAuthToken';

export default class Home extends Component {
    render() {
        return (
      
          <footer className="footer font-small special-color-dark pt-4 ">
          
            
            <div className="">
    
              <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                  <a href = "https://facebook.com/jumbopere" className="btn-floating btn-fb mx-1">
                    <i className="fab fa-facebook-f"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href ="https://twitter.com/jumbo_pere" className="btn-floating btn-tw mx-1">
                    <i className="fab fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-gplus mx-1">
                    <i className="fab fa-google-plus-g"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-li mx-1">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href = 'https://dribble.com' className="btn-floating btn-dribbble mx-1">
                    <i className="fab fa-dribbble"> </i>
                  </a>
                </li>
              </ul>
              <div className="footer-copyright text-center py-3">© 2020 Copyright:
              <a href="https://github.com/jumbopere"> JumboPere</a>
            </div>
            </div>
            
        
            
          
          </footer>
          
        )
    }
}
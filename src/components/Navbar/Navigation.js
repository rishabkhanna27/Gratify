import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export class Navigation extends Component{
    render(){
        return(
            
            <div className=" bg-dark navv">
<Nav fill variant="tabs">
  <Nav.Item>
    <NavLink className=" text-white" to="/">Audio_Player</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink className="text-white" to="/Video">Video_Player</NavLink>
  </Nav.Item>
</Nav>
          </div> 
           
        )
    }
}
export default Navigation;
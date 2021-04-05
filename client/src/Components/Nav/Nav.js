import React from 'react'
import { Menu, Segment} from 'semantic-ui-react'
import AuthNav from '../AuthNav/AuthNav';
import {Link} from 'react-router-dom'

function Nav(){
  
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Link to="/">
          <Menu.Item
            name='home'
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
          />
          </Link>

          <Link to="/cart">
            <Menu.Item>
          <i className="fas fa-shopping-cart"></i>
            </Menu.Item>
          </Link>


          <Link>
          <Menu.Item
            name='About'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
          />
          </Link>

          <Menu.Item position="right">
            <AuthNav />
          </Menu.Item>
        </Menu>
      </Segment>
    )
}
export default Nav;
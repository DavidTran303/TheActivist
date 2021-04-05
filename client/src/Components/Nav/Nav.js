import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

function Nav(){
  
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='home'
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Cart'
            // active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name='About'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
}
export default Nav;
import React, { Component } from "react";
import { 
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen })) // callback function ensures prevState is correct 
  }                                                                         // since state is being called within setState

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img 
              id="icon"
              src="MachineryOfTheStarsOriginal.jpg"
              className="br-100 ba h3 w3 dib" alt="avatar" 
            />
          </DropdownToggle>
          <DropdownMenu 
            end
            className="b--transparent shadow-5"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.65)'}}
          >
            <DropdownItem onClick={() => this.props.toggleModal()}>View Profile</DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
      </div>
    )
  }
}

export default ProfileIcon;
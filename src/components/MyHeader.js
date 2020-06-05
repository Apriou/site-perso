import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCogs,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { ProfilMenu } from "./ProfilMenu";

import { Header, Tab, Table, Input, Label, Sidebar } from "semantic-ui-react";

import "../css/MyHeader.css";
import { MySideBar } from "./MySideBar";

class MyHeader extends Component {
  render() {
    return (
      <div id="myheader" className="myhearder">
        <Table width="100%">
          <Table.Body>
            <Table.Row className="myhearder-row">
              <Table.Cell className="myhearder-menu">
                <FontAwesomeIcon
                  className="myhearder-menu-icon"
                  onClick={this.props.onSetSidebarOpen} //Je laisse on clic si l'utilisateur est sur un tel
                  onMouseOver={this.props.onSetSidebarOpen}
                  icon={faBars}
                  size="2x"
                />
                <img src="./images/puce-trans.png" className="myheader-logo" />
                {/* 
                            <MenuIcon 
                            style={{ height: "2.3rem", width: "2.3rem" }}   
                            onClick={this.props.onSetSidebarOpen}
                            onMouseOver={this.props.onSetSidebarOpen}  
                            /> */}
              </Table.Cell>
              <Table.Cell className="myhearder-search">
                {/*     <input className="myhearder-input" placeholder="Recherche..." /> 
                            <SearchIcon style={{ height: "2.3rem", width: "2.3rem", color: "black",  backgroundColor: "white"}}/> */}
              </Table.Cell>
              <Table.Cell className="myhearder-heart">
                {/*    <FavoriteBorderIcon style={{ height: "2.3rem", width: "2.3rem" }} /> */}
              </Table.Cell>
              <Table.Cell className="myhearder-cart">
                {/*    <ShoppingCartIcon style={{ height: "2.3rem", width: "2.3rem" }} /> */}
              </Table.Cell>
              <Table.Cell className="myhearder-account">
                {/*  <AccountCircleIcon style={{ height: "2.3rem", width: "2.3rem" }} />  */}
                <ProfilMenu />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export { MyHeader };

import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProjectList, Home, Contact } from "../components";

import "react-tabs/style/react-tabs.css";
import "../css/MyTabs.css";

class MyTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      projectType: "*",
    };
  }

  componentDidUpdate(prevProps) {
    //console.log('this.props.tabIndexSelected',this.props.tabIndexSelected);
    //console.log('prevProps.tabIndexSelected',prevProps.tabIndexSelected);

    if (this.props.tabIndexSelected !== prevProps.tabIndexSelected) {
      let index = this.props.tabIndexSelected; //si on choisi une sous section dans le menu sidebar on naviguera vers la tab1
      if (
        this.props.tabIndexSelected === 11 ||
        this.props.tabIndexSelected === 12
      ) {
        index = 1;
      }

      //Mise en place du type de project qu'on veut afficher (filtre)
      let type = this.props.tabIndexSelected;
      if (this.props.tabIndexSelected === 1) {
        type = "*";
      }
      if (this.props.tabIndexSelected === 11) {
        type = "web";
      }
      if (this.props.tabIndexSelected === 12) {
        type = "mob";
      }

      //On gère la largeur du header dynamiquement si le second onglet est activé
      if (index === 1) {
        document.getElementById("myheader").style.width = "98.5%";
      } else {
        document.getElementById("myheader").style.width = "100%";
      }

      this.setState({ selectedIndex: index, projectType: type });
    }
  }

  render() {
    return (
      <Tabs
        forceRenderTabPanel
        selectedIndex={this.state.selectedIndex}
        onSelect={(index) => {
          //On gère la largeur du header dynamiquement si le second onglet est activé
          if (index === 1) {
            document.getElementById("myheader").style.width = "98.5%";
          } else {
            document.getElementById("myheader").style.width = "100%";
          }
          this.setState({ selectedIndex: index, projectType: "*" });
        }} //Dans la navigation normale des tabs on prends tous les types de projets
      >
        <TabList className="tab">
          <Tab selectedClassName="tab-disabled">Accueil</Tab>
          <Tab selectedClassName="tab-disabled">Projets et réalisations</Tab>
          <Tab selectedClassName="tab-disabled">Contact</Tab>
        </TabList>

        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <ProjectList projectType={this.state.projectType} />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </Tabs>
    );
  }
}

export { MyTabs };

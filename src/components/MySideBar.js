import React from "react";
import Sidebar from "react-sidebar";

import HomeIcon from "@material-ui/icons/Home";
/* import ReceiptIcon from '@material-ui/icons/Receipt'
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings"; */
import AppsIcon from "@material-ui/icons/Apps";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PersonIcon from "@material-ui/icons/Person";

import { MySideBarItemList, MyHeader } from ".";
import { MyTabs } from "../components";
import "../css/MySideBar.css";

/*
function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}  */

class MySideBar extends React.Component {
  items = [
    {
      name: "accueil",
      label: "Accueil",
      Icon: HomeIcon,
      onClick: (e, item) => {
        this.setState({ tabIndexSelected: 0 });
      },
    },
    {
      name: "applications",
      label: "Applications",
      Icon: AppsIcon,
      onClick: (e, item) => {
        this.setState({ tabIndexSelected: 1 });
      },
      items: [
        {
          name: "web",
          label: "Web",
          Icon: LanguageIcon,
          onClick: (e, item) => {
            this.setState({ tabIndexSelected: 11 });
          },
        },
        {
          name: "mobile",
          label: "Mobile",
          Icon: PhoneAndroidIcon,
          onClick: (e, item) => {
            this.setState({ tabIndexSelected: 12 });
          },
        },
      ],
    },
    {
      name: "contact",
      label: "Contact",
      Icon: PersonIcon,
      onClick: (e, item) => {
        this.setState({ tabIndexSelected: 2 });
      },
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      tabIndexSelected: -1,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  /* onClick2(e, item) {
  window.alert(JSON.stringify(item, null, 2));  
} */

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    /*   const items = [
      { name: "home", label: "Home", Icon: HomeIcon, onClick },
      {
        name: "billing",
        label: "Billing",
        Icon: ReceiptIcon,
        items: [
          { name: "statements", label: "Statements", onClick },
          { name: "reports", label: "Reports", onClick }
        ]
      },
      "divider",
      {
        name: "settings",
        label: "Settings",
        Icon: SettingsIcon,
        items: [
          { name: "profile", label: "Profile" },
          { name: "insurance", label: "Insurance", onClick },
          "divider",
          {
            name: "notifications",
            label: "Notifications",
            Icon: NotificationsIcon,
            items: [
              { name: "email", label: "Email", onClick },
              {
                name: "desktop",
                label: "Desktop",
                Icon: DesktopWindowsIcon,
                items: [
                  { name: "schedule", label: "Schedule" },
                  { name: "frequency", label: "Frequency" }
                ]
              },
              { name: "sms", label: "SMS" }
            ]
          }
        ]
      }
    ]; */

    return (
      <>
        <MyHeader onSetSidebarOpen={() => this.onSetSidebarOpen(true)} />
        <Sidebar
          sidebar={
            <b>
              <MySideBarItemList items={this.items} />
            </b>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{
            sidebar: {
              //background: "white",
              paddingTop: "4rem",
              background: "rgba(0, 0, 0, 0.7)", //opacité
              color: "white", //couleur du texte
              width: "auto",
            },
          }} //Style du menu à droite
        >
          {/*  <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button> */}
          <div
            className="sidebar-div"
            style={{
              background: `url(${"./images/intel.jpg"})`,
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
            }}
          >
            <MyTabs tabIndexSelected={this.state.tabIndexSelected} />
          </div>
        </Sidebar>
      </>
    );
  }
}

export { MySideBar };

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
//import LoopIcon from "@material-ui/icons/Loop";
import GetAppIcon from "@material-ui/icons/GetApp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "../css/Project.css";

/* const useStyles = makeStyles({
    root: {
      width: "15rem",      
      marginRight: "4rem",
      marginBottom: "3rem",
      background: 
    },
    media: {
      height: 120,
    },
  }); */

library.add(faSpinner);

class Project extends Component {
  goTo = () => {
    //console.log('goto url', this.props.url);
    window.location.href = this.props.url;

    return null;
  };

  render() {
    const {
      title,
      descs,
      tools,
      logoPath,
      logoDesc,
      type,
      url,
      status,
    } = this.props;

    //console.log('props: ', this.props);

    return (
      <div className="card">
        <img
          className="card-img"
          src={logoPath}
          alt={logoDesc}
          title={logoDesc}
        />
        <h2>{title}</h2>
        {descs.map((desc, index) => {
          return <p key={index}>- {desc}</p>;
        })}
        <p>Outils : {tools}</p>
        <p>
          Status : {status} &nbsp;&nbsp;
          {status === "Recherche..." ? (
            <FontAwesomeIcon
              icon={faSpinner}
              pulse
              size="1x"
              className="fa-faSpinner"
            />
          ) : status === "Online" ? (
            <SettingsInputAntennaIcon className="online" />
          ) : (
            <SettingsInputAntennaIcon className="offline" />
          )}
          {/* {status === "Online" ? (
            <SettingsInputAntennaIcon className="online" />
          
          ) : (
            <SettingsInputAntennaIcon className="offline" />
          )} */}
        </p>
        {type === "mob" ? (
          <p>
            Version Androïd : &nbsp;&nbsp;
            <a href={url} download>
              <GetAppIcon className="download" />
            </a>
          </p>
        ) : url !== "" ? (
          <p>
            <a href={url} className="link">
              Voir le site
            </a>
          </p>
        ) : (
          <p />
        )}
      </div>
    );
  }
}

export { Project };

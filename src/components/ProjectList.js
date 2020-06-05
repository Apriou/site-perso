import React, { Component } from "react";
import { Project } from "../components";
import { getByUrl } from "../utils/GetRequests";

import "../css/ProjectList.css";

const projects = [
  //Je met les status Offline par défault pour les projets web. Les projets mobiles => Online
  {
    id: 8,
    title: "Clone de Twitch site de streaming de jeux video",
    descs: [
      "Recherche et visualisation de jeux en ligne, de streamers",
      "Connexion via compte Twitch",
      "Menu responsive",
    ],
    tools: "ReactJS 16, React-router, API Twitch, Twitch Player",
    logoPath: "./images/react.png",
    logoDesc: "react",
    type: "web",
    //url: "http://apriou.freeboxos.fr:49164/",
    url: "https://apriou-twitch-clone.herokuapp.com/",
    //status: "Recherche...",
    status: "Online",
  },
  {
    id: 7,
    title: "Clone de Twitch site de streaming de jeux video",
    descs: [
      "Recherche et visualisation de jeux en ligne, de streamers",
      "Connexion via compte Twitch",
      "Menu responsive",
    ],
    tools: "ReactJS 16, React-router, API Twitch, Twitch Player",
    logoPath: "./images/react.png",
    logoDesc: "react",
    type: "web",
    //url: "http://apriou.freeboxos.fr:49164/",
    url: "https://apriou-twitch-clone.herokuapp.com/",
    //status: "Recherche...",
    status: "Online",
  },
  {
    id: 6,
    title: "Site web de films",
    descs: [
      "Recherche et visualisation de films",
      "Informations détaillées",
      "Gestion de favoris",
      "Connexion via compte Google (seul actif sur le site démo), Facebook, Github...",
      "Abonnement et paiement via Paypal (désactivé sur le site de démo)",
    ],
    tools:
      "ReactJS 16, React-router, Redux, API TheMovieDB, React Player, FireBase, Paypal",
    logoPath: "./images/react.png",
    logoDesc: "react",
    type: "web",
    //url: "http://apriou.freeboxos.fr:49162/",
    url: "https://apriou-allmovies.herokuapp.com/",
    //status: "Recherche...",
    status: "Online",
  },
  {
    id: 5,
    title: "Application mobile de films",
    descs: [
      "Recherche de films",
      "Informations détaillées sur les films",
      "Gestion de favoris",
      "Intégration de l'appareil photo dans l'application",
      "Persistance des données",
    ],
    tools:
      "React-Native 2.0.1, Redux, React router, JavaScript, API TheMovieDB",
    logoPath: "./images/react-native.png",
    logoDesc: "react native",
    type: "mob",
    url: "./ressources/MoviesAndMe.apk",
    status: "Online",
  },
  {
    id: 4,
    title: "Application mobile de photos",
    descs: ["Effectuer des photos", "Géolocation", "Persistance des données"],
    tools: "Ionic 5, TypeScript, API Google Map",
    logoPath: "./images/ionic.jpeg",
    logoDesc: "ionic",
    type: "mob",
    url: "./ressources/NatureView.apk",
    status: "Online",
  },
  {
    id: 3,
    title: "Site web de E-commerce",
    descs: [
      "Connexion utilisateur",
      "Recherche de produits par mot clés ou par critères",
      "Gestion d'un panier",
    ],
    tools: "Angular 8, Node.js, MongoDB, Express, Javascript, TypeScript",
    logoPath: "./images/angular.png",
    logoDesc: "angular",
    type: "web",
    //url: "http://apriou.freeboxos.fr:49157/",
    url: "",
    //status: "Recherche...",
    status: "Offline",
  },
  // {
  //   id: 2,
  //   title: "Site web pour un cabinet de médecins",
  //   descs: ["Gestion des rendez-vous et des créneaux"],
  //   tools: "ASP.NET, C#, Spring, Entity, LinQ, SQLServer",
  //   logoPath: "./images/net.png",
  //   logoDesc: ".net",
  //   type: "web",
  //   url: "http://apriou.freeboxos.fr:49155/",
  //   status: "Recherche...",
  // },
  {
    id: 1,
    title: "Site web pour une association d'assistantes maternelles",
    descs: [
      "Calcul du salaire des membres",
      "Calcul des impôts",
      "Fiche de paie",
      "Edition PDF",
    ],
    tools:
      "ASP.NET, MVC, Ajax, C#, Service Web WCF, Spring, Nhibernate, SQL Server, Nunit, iTextSharp",
    logoPath: "./images/net.png",
    logoDesc: ".net",
    type: "web",
    //url: "http://apriou.freeboxos.fr:49154/",
    url: "",
    //status: "Recherche...",
    status: "Offline",
  },
];

class ProjectList extends Component {
  state = {
    statusAndId: [],
  };

  renderList = (projects) => {
    if (this.props.projectType === "*") {
      //On prends tous les types de projets
      return projects.map((project, index) => {
        // let status = "Recherche..."; //En Recherche par défault pour tous les projets
        // console.log(project.type);

        // if (project.type === "mob") {
        //   //Online par défault sur projet mobile
        //   status = project.status;
        // } else { //On va cher
        //   if (
        //     this.state.statusAndId.find((stat) => stat.id === project.id) !==
        //       undefined &&
        //     this.state.statusAndId.find((stat) => stat.id === project.id) !==
        //       null
        //   ) {
        //     console.log(
        //       "statusAndId",
        //       this.state.statusAndId.find((stat) => stat.id === project.id)
        //         .status
        //     );
        //     status = this.state.statusAndId.find(
        //       (statuAndId) => statuAndId.id === project.id
        //     ).status;
        //   }
        // }
        // console.log("RenderList", project.id + " " + status);
        return (
          <Project
            key={index}
            title={project.title}
            descs={project.descs}
            tools={project.tools}
            logoPath={project.logoPath}
            logoDesc={project.logoDesc}
            type={project.type}
            url={project.url}
            //status={status}
            status={project.status}
          />
        );
      });
    } else {
      //On filtre les types de projets
      return projects
        .filter((project) => project.type === this.props.projectType)
        .map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              descs={project.descs}
              tools={project.tools}
              logoPath={project.logoPath}
              logoDesc={project.logoDesc}
              type={project.type}
              url={project.url}
              status={project.status}
            />
          );
        });
    }
  };

  async componentDidMount() {
    // const myStatus = await this.getStatus();
    // console.log("myStatus", myStatus);
    // this.setState({ statusAndId: myStatus });
  }

  getStatus = async () => {
    let promise = [];
    const webProjects = projects.filter((project) => project.type === "web");
    console.log("webProjects", webProjects);

    for (let i = 0; i < webProjects.length; i++) {
      const status = await getByUrl(webProjects[i].url);
      console.log("status", status);
      if (status === 200) {
        promise.push({ id: webProjects[i].id, status: "Online" });
      } else {
        promise.push({ id: webProjects[i].id, status: "Offline" });
      }
      console.log("promise", promise);
    }
    return Promise.all(promise);
  };

  render() {
    return (
      <div className="projectList">
        <div className="projectList--grid">{this.renderList(projects)}</div>
      </div>
    );
  }
}

export { ProjectList };

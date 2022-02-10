import React from "react";
import { Link, Outlet } from "react-router-dom";
import workData from "../../Data/workData";

const Works = () => {
  return (
    <div className="bodyContent">
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p className="worksText">
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </p>
      <nav>
        <div className="works">
          {workData.map((client, id) => {
            return (
              <Link
                className="navbar"
                to={`${client.name.toLowerCase()}-study-case`}
                key={id}
              >
                {" "}
                {client.name}{" "}
              </Link>
            );
          })}
        </div>
        <Outlet />
      </nav>
    </div>
  );
};

export default Works;
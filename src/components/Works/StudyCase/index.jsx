import React from "react";
import { useParams } from "react-router-dom";
import workData from "../../../Data/workData";

export default function StudyCase() {
  const { clientname } = useParams();
  const clientName2 =
    clientname.substring(0, clientname.indexOf("-"))[0].toUpperCase() +
    clientname.substring(0, clientname.indexOf("-")).substring(1);
  const clientDetails = workData.find((client) => client.name === clientName2);
  console.log("je suis ici");
  console.log(clientName2);

  return (
    <div className="studyCase">
      <p>{clientDetails.title}</p>
      <p className="worksText">{clientDetails.body}</p>
    </div>
  );
}

import React from "react";
import { Header } from "semantic-ui-react";

export default function AdviseBox({ sameEntry, emptyEntry, invalidNumber}) {
  return (
    <div>
      {sameEntry ? (
        <Header className="ui adviseBoxHeader" as="h4" color="red">
          The party already exists!
        </Header>
      ) : emptyEntry ? (
        <Header className="ui adviseBoxHeader" as="h4" color="red">
          The party name cannot be empty
        </Header>
      ) :  invalidNumber ? (
        <Header className="ui adviseBoxHeader" as="h4" color="red">
          Invalid number! The previous votes cannot be: 
          <ul>
            <li>Negative</li>
            <li>Contain letters</li>
            <li>Empty</li>
          </ul>
        </Header>
         ) : <Header className="ui adviseBoxHeader" as="h4" color="red">
         none
       </Header>}
    </div>
      )}


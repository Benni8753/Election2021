import React from "react";
import { Segment, Header } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Segment  fixed="top" className="ui nav">
      <Header as="h1">Election 2021</Header>
    </Segment>
  );
}

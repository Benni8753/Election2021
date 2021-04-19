import React from "react";
import PartyListItem from "./PartyListItem";

import { Table, Header } from "semantic-ui-react";

export default function PartyList({
  setEditFormOpenFromApp,
  allMyPartiesFromED,
  selectPartyFromAppJSX,
  deletePartyFromED,
  partyCount,
  decreasePartyCountFromED,
  addVoteToPartyFromED,
}) {
 
  return (
    <div>
      <Header>{partyCount} parties are listed.</Header>
      <Table>
        <Table.Header>
          <Table.Row id="tableHeader">
            <Table.HeaderCell>Party</Table.HeaderCell>
            <Table.HeaderCell>Previous Votes</Table.HeaderCell>
            <Table.HeaderCell>Votes vs. previous Votes</Table.HeaderCell>
            <Table.HeaderCell>Votes</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {allMyPartiesFromED.map((aParty) => (
            <PartyListItem
              aParty={aParty}
              selectPartyFromAppJSX={selectPartyFromAppJSX}
              deletePartyFromED={deletePartyFromED}
              decreasePartyCountFromED={decreasePartyCountFromED}
              setEditFormOpenFromApp={setEditFormOpenFromApp}
              addVoteToPartyFromED={addVoteToPartyFromED}
              key={aParty.id}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

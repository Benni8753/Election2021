import React from "react";
import PartyListItem from "./PartyListItem";

import { Table, Header, Button } from "semantic-ui-react";

export default function PartyList({
  setEditFormOpenFromApp,
  allMyPartiesFromED,
  selectPartyFromAppJSX,
  deletePartyFromED,
  partyCount,
  decreasePartyCountFromED,
  addVoteToPartyFromED,
  deleteVoteOfPartyFromED,
  filterSmallPartiesFromED,
  setFilterButton,
  filterButton,
  sortPartiesByName,
  sortByV
}) {
 
  return (
    <div>
      <Header>{partyCount} parties are listed.
      {!filterButton ? <Button  floated="right" onClick={() => filterSmallPartiesFromED("filter")}>Filter</Button>
      : <Button floated="right" onClick={() => filterSmallPartiesFromED("unfilter")}>Unfilter</Button>
      }
      <Button floated="right" onClick={() => sortPartiesByName()}>Sort by Name</Button>

      </Header>
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
              deleteVoteOfPartyFromED={deleteVoteOfPartyFromED}
              key={aParty.id}
              filterButton={filterButton}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

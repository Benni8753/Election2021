import React from "react";
import { Button, Table } from "semantic-ui-react";

export default function PartyListItem({
  setEditFormOpenFromApp,
  aParty,
  deletePartyFromED,
  decreasePartyCountFromED,
  selectPartyFromAppJSX,
  addVoteToPartyFromED,
  deleteVoteOfPartyFromED,
  filterButton,
}) {
  function deleteClick(partyId) {
    decreasePartyCountFromED();
    deletePartyFromED(partyId);
    setEditFormOpenFromApp(false);
  }

  return (
    <Table.Row key={aParty.id}>
      <Table.Cell>{aParty.partyName}</Table.Cell>
      <Table.Cell>{aParty.previousVotes}</Table.Cell>
      <Table.Cell>
        {Math.floor((aParty.votes / aParty.previousVotes) * 100)} %
      </Table.Cell>
      <Table.Cell>{aParty.votes}</Table.Cell>
      <Table.Cell>
        <Button
          disabled={filterButton}
          onClick={() => addVoteToPartyFromED(aParty.id)}>
          {" "}
          +{" "}
        </Button>
        <Button
          disabled={filterButton}
          onClick={() => deleteVoteOfPartyFromED(aParty.id)}>
          {" "}
          -{" "}
        </Button>
        <Button
          disabled={filterButton}
          primary
          onClick={() => selectPartyFromAppJSX(aParty)}
          color="teal">
          Edit
        </Button>
        <Button
          disabled={filterButton}
          color="red"
          onClick={() => deleteClick(aParty.id)}>
          X
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}

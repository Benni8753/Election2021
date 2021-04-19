import React from "react";
import { Button, Table } from "semantic-ui-react";

export default function PartyListItem({
  setEditFormOpenFromApp,
  aParty,
  deletePartyFromED,
  decreasePartyCountFromED,
  selectPartyFromAppJSX,
  addVoteToPartyFromED
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
      <Table.Cell>{aParty.previousVotes / aParty.votes} %</Table.Cell>
      <Table.Cell>{aParty.votes}</Table.Cell>
      <Table.Cell>
        <Button onClick={() => addVoteToPartyFromED(aParty.id)} > + </Button>
        <Button> - </Button>
        <Button
          primary
          onClick={() => selectPartyFromAppJSX(aParty)}
          color="teal">
          Edit
        </Button>
        <Button color='red' onClick={() => deleteClick(aParty.id)}>X</Button>
      </Table.Cell>
    </Table.Row>
  );
}

import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import AddPartyForm from "./AddPartyForm";
import PartyList from "./PartyList";
import EditPartyForm from "./EditPartyForm";

export default function ElectionDashboard({
  selectPartyFromAppJSX,
  selectedPartyFromAppJSX,
  editFormOpenFromApp,
  setEditFormOpenFromApp,
}) {
  const [allMyPartiesFromED, setAllMyPartiesFromED] = useState([]);
  const [partyCount, setPartyCount] = useState(0);

  function createPartyFromED(aParty) {
    setAllMyPartiesFromED([...allMyPartiesFromED, aParty]);
  }

  function editPartyFromEd(editedParty) {
    setAllMyPartiesFromED(
      allMyPartiesFromED.map((aParty) =>
        aParty.id === editedParty.id ? editedParty : aParty
      )
    );
    selectPartyFromAppJSX(null);
  }

  function deletePartyFromED(partyId) {
    setAllMyPartiesFromED(
      allMyPartiesFromED.filter((aParty) => aParty.id !== partyId)
    );
  }
  function increasePartyCountFromED() {
    setPartyCount((previousState) => previousState + 1);
  }
  function decreasePartyCountFromED() {
    setPartyCount((previousState) => previousState - 1);
  }
  // the function gets called by a button click of the PartyListItem component
  function addVoteToPartyFromED(partyId) {
    setAllMyPartiesFromED(
      allMyPartiesFromED.map((aParty) =>
        aParty.id === partyId ? aParty.votes++ : aParty
      )
    );

    console.log(allMyPartiesFromED);
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={6}>
          <AddPartyForm
            setAllMyPartiesFromED={setAllMyPartiesFromED}
            createPartyFromED={createPartyFromED}
            selectedPartyFromAppJSX={selectedPartyFromAppJSX}
            increasePartyCountFromED={increasePartyCountFromED}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
          <PartyList
            setEditFormOpenFromApp={setEditFormOpenFromApp}
            deletePartyFromED={deletePartyFromED}
            allMyPartiesFromED={allMyPartiesFromED}
            selectPartyFromAppJSX={selectPartyFromAppJSX}
            partyCount={partyCount}
            decreasePartyCountFromED={decreasePartyCountFromED}
            addVoteToPartyFromED={addVoteToPartyFromED}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {editFormOpenFromApp && (
            <EditPartyForm
              setEditFormOpenFromApp={setEditFormOpenFromApp}
              setAllMyPartiesFromED={setAllMyPartiesFromED}
              selectedPartyFromAppJSX={selectedPartyFromAppJSX}
              editFormOpenFromApp={editFormOpenFromApp}
              createPartyFromED={createPartyFromED}
              editPartyFromEd={editPartyFromEd}
              key={selectedPartyFromAppJSX ? selectPartyFromAppJSX.id : null}
            />
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

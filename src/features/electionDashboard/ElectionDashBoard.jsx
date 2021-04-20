import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import AddPartyForm from "./AddPartyForm";
import PartyList from "./PartyList";
import EditPartyForm from "./EditPartyForm";
import AdviseBox from "../helper/AdviseBox";

export default function ElectionDashboard({
  selectPartyFromAppJSX,
  selectedPartyFromAppJSX,
  editFormOpenFromApp,
  setEditFormOpenFromApp,
}) {
  const [allMyPartiesFromED, setAllMyPartiesFromED] = useState(() => {
    const localData = localStorage.getItem('allParties');
    return localData ? JSON.parse(localData) : [];
  });
  const [interimStorageFromED, setInterimStorageFromED] = useState([]);
  const [partyCount, setPartyCount] = useState(0);
  const [filterButton, setFilterButton] = useState(false);
  const [emptyEntry, setEmptyEntry] = useState(false);
  const [sameEntry, setSameEntry] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);

  // <<MODEL>>
  function createPartyFromED(aParty) {
    if (aParty.partyName.trim() === "") {
      setEmptyEntry(true);
      setSameEntry(false);
      setInvalidNumber(false);
    } else if (
      aParty.previousVotes <= 0 ||
      typeof aParty.previousVotes == String
    ) {
      setInvalidNumber(true);
      setEmptyEntry(false);
      setSameEntry(false);
    } else if (
      allMyPartiesFromED.some(
        (theParty) => theParty.partyName === aParty.partyName
      )
    ) {
      setSameEntry(true);
      setEmptyEntry(false);
      setInvalidNumber(false);
    } else {
      setAllMyPartiesFromED([...allMyPartiesFromED, aParty]);
      setEmptyEntry(false);
      setSameEntry(false);
      setInvalidNumber(false);
      increasePartyCountFromED();
    }
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
        aParty.id === partyId ? { ...aParty, votes: aParty.votes + 1 } : aParty
      )
    );
  }

  function deleteVoteOfPartyFromED(partyId) {
    setAllMyPartiesFromED(
      allMyPartiesFromED.map((aParty) =>
        aParty.id === partyId ? { ...aParty, votes: aParty.votes - 1 } : aParty
      )
    );
  }

  function filterSmallPartiesFromED(filterEvent) {
    if (filterEvent === "unfilter") {
      setFilterButton(false);
      setAllMyPartiesFromED(interimStorageFromED);
    } else if (filterEvent === "filter") {
      setFilterButton(true);
      setInterimStorageFromED(allMyPartiesFromED);
      setAllMyPartiesFromED(
        allMyPartiesFromED.filter((aParty) => aParty.votes > 3)
      );
    }
  }

  useEffect(() => {
    localStorage.setItem('allParties', JSON.stringify(allMyPartiesFromED))
  }, [allMyPartiesFromED])

  function sortPartiesByName() {
    console.log(allMyPartiesFromED)
    setAllMyPartiesFromED([...allMyPartiesFromED].sort(function(a, b) {
      if(a.partyName < b.partyName) {
        return -1
      }
      if(a.partyName > b.partyName) {
        return 1
      }
      return 0
    }))
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
            filterButton={filterButton}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {(emptyEntry || sameEntry || invalidNumber) && (
          <AdviseBox
            sameEntry={sameEntry}
            emptyEntry={emptyEntry}
            invalidNumber={invalidNumber}
          />
        )}
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
            deleteVoteOfPartyFromED={deleteVoteOfPartyFromED}
            filterSmallPartiesFromED={filterSmallPartiesFromED}
            setFilterButton={setFilterButton}
            filterButton={filterButton}
            sortPartiesByName={sortPartiesByName}
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
              sameEntry={sameEntry}
              emptyEntry={emptyEntry}
              invalidNumber={invalidNumber}
            />
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

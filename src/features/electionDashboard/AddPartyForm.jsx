import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import cuid from "cuid";

export default function AddPartyForm({
  setAllMyPartiesFromED,
  createPartyFromED,
  selectedPartyFromAppJSX,
  increasePartyCountFromED,
  filterButton
}) {

  let defaultValues = {
    partyName: "",
    previousVotes: "",
    votesPercentage: 0,
    votes: 0,
    id: 1,
  };

  const [values, setValues] = useState(defaultValues);

  function formSubmit() {
    createPartyFromED({
      ...values,
      id: cuid(),
      votes: 0,
      votesInPercentage: 0
    });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Form onSubmit={formSubmit} className="formAdd">
      <Form.Field>
        <input
          type="text"
          placeholder="e.g. National party"
          name="partyName"
          value={values.partyName}
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder="previous Votes"
          type="number"
          name="previousVotes"
          value={values.previousVotes}
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Field>
      
      <Button disabled={filterButton} type="submit" positive>
        Add Party
      </Button>
    </Form>
  );
}

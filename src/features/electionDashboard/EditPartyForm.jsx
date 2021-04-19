import cuid from "cuid";
import React, { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";

export default function EditPartyForm({
  setEditFormOpenFromApp,
  editFormOpenFromApp,
  setAllMyPartiesFromED,
  selectedPartyFromAppJSX,
  createPartyFromED,
  editPartyFromEd,
}) {
  const initialValues = selectedPartyFromAppJSX ?? {
    partyName: "",
    previousVotes: 0,
    votes: 0,
  };

  const [values, setValues] = useState(initialValues);

  function handleFormSubmitFromPartyForm() {
    selectedPartyFromAppJSX
      ? editPartyFromEd({ ...selectedPartyFromAppJSX, ...values })
      : createPartyFromED({
          ...values,
          id: cuid(),
          partyName: "Green Party",
          previousVotes: 666,
        });
    setEditFormOpenFromApp(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <Segment clearing>
      <Header content="Edit party" />
      <Form onSubmit={handleFormSubmitFromPartyForm}>
        <Form.Field>
          <input
            type="text"
            placeholder="Party name"
            name="partyName"
            value={values.partyName}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="previous votes"
            name="previousVotes"
            value={values.previousVotes}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="votes"
            name="votes"
            value={values.votes}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>

        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => setEditFormOpenFromApp(false)}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}

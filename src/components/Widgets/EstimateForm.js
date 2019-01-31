import React from "react";
import { Form, Header, TextArea } from "semantic-ui-react";

const EstimateForm = () =>
  <Form>
    <Form.Group widths="equal">
      <Form.Field
        label="First Name"
        control="input"
        placeholder="John"
        required
      />
      <Form.Field
        label="Last Name"
        control="input"
        placeholder="Urbina"
        required
      />
    </Form.Group>
    <Form.Group widths="equal">
      <Form.Field
        label="Phone"
        control="input"
        placeholder="123-456-7890"
        required
      />
      <Form.Field
        label="Email"
        control="input"
        placeholder="curious_customer@gmail.com"
        required
      />
    </Form.Group>
    <Form.Field
      label="Street Address"
      control="input"
      placeholder="55 Landscaper Lane"
      required
    />
    <Form.Group widths="equal">
      <Form.Field label="City" control="input" placeholder="Salem" required />
      <Form.Field
        label="Zip Code"
        control="input"
        placeholder="97304"
        required
      />
    </Form.Group>
    <Form.Group grouped>
      <label>I prefer to be contacted by: </label>
      <Form.Field
        label="Phone"
        control="input"
        type="radio"
        name="htmlRadios"
        checked
      />
      <Form.Field
        label="Email"
        control="input"
        type="radio"
        name="htmlRadios"
      />
      <Form.Field
        label="Either one!"
        control="input"
        type="radio"
        name="htmlRadios"
      />
    </Form.Group>
    <Header
      as="h1"
      style={{
        marginTop: "1.5em"
      }}
    >
      Project Details
    </Header>
    <Header
      size="medium"
      style={{
        marginBottom: "2.5em"
      }}
    >
      Tell us what you're working on.
    </Header>
    <Form.Group>
      <Form.Field
        label="Project Zipcode"
        control="input"
        width={4}
        placeholder="97304"
        required
      />
      <Form.Select
        width={4}
        fluid
        label="Project Type"
        options={[
          { key: "r", text: "Residential", value: "residential" },
          { key: "b", text: "Business", value: "business" },
          { key: "o", text: "Other", value: "other" }
        ]}
        placeholder="Residential"
        required
      />
    </Form.Group>
    <Form.Select
      width={8}
      fluid
      label="Project Scope"
      options={[
        {
          key: "s",
          text: "Small Changes (ie. plant flowers, trim shrubs)",
          value: "small"
        },
        {
          key: "l",
          text: "Large Project (ie. plant trees, install sprinkler system)",
          value: "large"
        },
        {
          key: "r",
          text: "Complete Renovation (ie. replace soil, hardscape surfaces)",
          value: "renovation"
        }
      ]}
      placeholder="Small Changes"
      required
    />
    <Form.Select
      width={8}
      fluid
      label="Do you have existing landscape plans?"
      options={[
        {
          key: "n",
          text: "No, and I could use design suggestions.",
          value: "none"
        },
        {
          key: "p",
          text: "No, but I have preferences.",
          value: "preferences"
        },
        {
          key: "y",
          text: "I have the plans, you have the manpower!",
          value: "solid"
        }
      ]}
      placeholder="Do you have landscape plans?"
      required
    />

    <label>Hardscape Services Available (Check all that apply)</label>
    <Form.Group widths="equal">
      <Form.Group
        style={{
          marginTop: "1.5em"
        }}
        grouped
      >
        <Form.Field label="Patio" control="input" type="checkbox" />
        <Form.Field label="Walkway" control="input" type="checkbox" />
        <Form.Field label="Driveway" control="input" type="checkbox" />
        <Form.Field label="Artificial Turf" control="input" type="checkbox" />
      </Form.Group>
      <Form.Group
        style={{
          marginLeft: "3em",
          marginTop: "1.5em"
        }}
        grouped
      >
        <Form.Field label="Arbor or Trellis" control="input" type="checkbox" />
        <Form.Field label="Retaining Wall" control="input" type="checkbox" />
        <Form.Field
          label="Water Feature Install"
          control="input"
          type="checkbox"
        />
        <Form.Field label="Boulder Placement" control="input" type="checkbox" />
        <Form.Field label="Other" control="input" type="checkbox" />
      </Form.Group>
    </Form.Group>

    <label>Softscape Services Available (Check all that apply)</label>
    <Form.Group widths="equal">
      <Form.Group
        style={{
          marginTop: "1.5em"
        }}
        grouped
      >
        <Form.Field label="Plant flower beds" control="input" type="checkbox" />
        <Form.Field
          label="Plant trees/shrubs"
          control="input"
          type="checkbox"
        />
        <Form.Field label="Apply mulch" control="input" type="checkbox" />
        <Form.Field
          label="Remove trees/shrubs"
          control="input"
          type="checkbox"
        />
        <Form.Field label="Remove tree stump" control="input" type="checkbox" />
      </Form.Group>
      <Form.Group
        style={{
          marginLeft: "3em",
          marginTop: "1.5em"
        }}
        grouped
      >
        <Form.Field label="Install grass/sod" control="input" type="checkbox" />
        <Form.Field
          label="Install/repair outdoor lighting"
          control="input"
          type="checkbox"
        />
        <Form.Field
          label="Install/repair sprinklers"
          control="input"
          type="checkbox"
        />
        <Form.Field
          label="Install/repair drainage system"
          control="input"
          type="checkbox"
        />
        <Form.Field label="Other" control="input" type="checkbox" />
      </Form.Group>
    </Form.Group>
    <Form.Group>
      <Form.Select
        width={8}
        fluid
        label="Roughly how large is the project area?"
        options={[
          {
            key: "s",
            text: "Small (< 1,000 sqft).",
            value: "1000 sqft"
          },
          {
            key: "m",
            text: "Medium (1,000 - 5,000 sqft)",
            value: "1000 to 5000 sqft"
          },
          {
            key: "l",
            text: "Large (5,000 - 10,000 sqft)",
            value: "5000 to 10000 sqft"
          },
          {
            key: "xl",
            text: "Very Large (> 10,000 sqft)",
            value: "10000+ sqft"
          }
        ]}
        placeholder="Area in square feet"
        required
      />
    </Form.Group>
    <Form.Group
      style={{
        margin: "2em 0"
      }}
      grouped
    >
      <label>Which areas will the work be taking place in?</label>
      <Form.Group
        style={{
          marginTop: "1.5em"
        }}
        grouped
      >
        <Form.Field label="Front Yard" control="input" type="checkbox" />
        <Form.Field label="Back Yard" control="input" type="checkbox" />
        <Form.Field label="Side Yard" control="input" type="checkbox" />
        <Form.Field label="Driveway" control="input" type="checkbox" />
        <Form.Field label="Entire Property" control="input" type="checkbox" />
        <Form.Field label="Other" control="input" type="checkbox" />
      </Form.Group>
    </Form.Group>

    <Form.Field
      label="Anything else we should know?"
      control={TextArea}
      placeholder="Type here.."
      required
    />

    <Form.Field label="Done?" control="button">
      Submit
    </Form.Field>
  </Form>;

export default EstimateForm;

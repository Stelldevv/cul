import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  TextArea
} from "semantic-ui-react";

export default class EstimateForm extends Component {
  state = {
    clientFirst: "",
    clientLast: "",
    phone: "",
    email: "",
    addressStreet: "",
    addressCity: "",
    addressZIP: "",
    preference: "",
    projectDate: "",
    projectZIP: "",
    projectType: "",
    projectScope: "",
    projectPlans: "",
    projectSize: "",
    projectHardServices: [],
    projectSoftServices: [],
    projectAreas: [],
    message: "",
    formSubmitted: false
  };

  handleChangeClientFirst = this.handleChangeClientFirst.bind(this);
  handleChangeClientLast = this.handleChangeClientLast.bind(this);
  handleChangePhone = this.handleChangePhone.bind(this);
  handleChangeEmail = this.handleChangeEmail.bind(this);
  handleChangeAddressStreet = this.handleChangeAddressStreet.bind(this);
  handleChangeAddressCity = this.handleChangeAddressCity.bind(this);
  handleChangeAddressZIP = this.handleChangeAddressZIP.bind(this);
  handleChangePreference = this.handleChangePreference.bind(this);
  handleChangeProjectDate = this.handleChangeProjectDate.bind(this);
  handleChangeProjectZIP = this.handleChangeProjectZIP.bind(this);
  handleChangeProjectType = this.handleChangeProjectType.bind(this);
  handleChangeProjectScope = this.handleChangeProjectScope.bind(this);
  handleChangeProjectPlans = this.handleChangeProjectPlans.bind(this);
  handleChangeProjectSize = this.handleChangeProjectSize.bind(this);
  handleChangeProjectHardServices = this.handleChangeProjectHardServices.bind(
    this
  );
  handleChangeProjectSoftServices = this.handleChangeProjectSoftServices.bind(
    this
  );
  handleChangeProjectAreas = this.handleChangeProjectAreas.bind(this);
  handleChangeMessage = this.handleChangeMessage.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = "TestBot@mailmg.stelldevel.com";

  handleChangeClientFirst(event) {
    this.setState({
      clientFirst: event.target.value
    });
  }

  handleChangeClientLast(event) {
    this.setState({
      clientLast: event.target.value
    });
  }

  handleChangePhone(event) {
    this.setState({
      phone: event.target.value
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChangeAddressStreet(event) {
    this.setState({
      addressStreet: event.target.value
    });
  }

  handleChangeAddressCity(event) {
    this.setState({
      addressCity: event.target.value
    });
  }

  handleChangeAddressZIP(event) {
    this.setState({
      addressZIP: event.target.value
    });
  }

  handleChangePreference(event) {
    this.setState({
      preference: event.target.value
    });
  }

  handleChangeProjectDate(event) {
    this.setState({
      projectDate: event.target.value
    });
  }

  handleChangeProjectZIP(event) {
    this.setState({
      projectZIP: event.target.value
    });
  }

  handleChangeProjectType(event) {
    this.setState({
      projectType: event.target.textContent
    });
  }

  handleChangeProjectScope(event) {
    this.setState({
      projectScope: event.target.textContent
    });
  }

  handleChangeProjectPlans(event) {
    this.setState({
      projectPlans: event.target.textContent
    });
  }

  handleChangeProjectSize(event) {
    this.setState({
      projectSize: event.target.textContent
    });
  }

  handleChangeProjectHardServices(event) {
    var serviceList = this.state.projectHardServices;
    if (!serviceList.includes(" " + event.target.value)) {
      serviceList.push(" " + event.target.value);
      this.setState({
        projectHardServices: serviceList
      });
    } else {
      serviceList.splice(serviceList.indexOf(" " + event.target.value), 1);
      this.setState({
        projectHardServices: serviceList
      });
    }
  }

  handleChangeProjectSoftServices(event) {
    var serviceList = this.state.projectSoftServices;
    if (!serviceList.includes(" " + event.target.value)) {
      serviceList.push(" " + event.target.value);
      this.setState({
        projectSoftServices: serviceList
      });
    } else {
      serviceList.splice(serviceList.indexOf(" " + event.target.value), 1);
      this.setState({
        projectSoftServices: serviceList
      });
    }
  }

  handleChangeProjectAreas(event) {
    var areaList = this.state.projectAreas;
    if (!areaList.includes(" " + event.target.value)) {
      areaList.push(" " + event.target.value);
      this.setState({
        projectAreas: areaList
      });
    } else {
      areaList.splice(areaList.indexOf(" " + event.target.value), 1);
      this.setState({
        projectAreas: areaList
      });
    }
  }

  handleChangeMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var estimate = {
      clientName: this.state.clientFirst + " " + this.state.clientLast,
      phone: this.state.phone,
      email: this.state.email,
      addressStreet: this.state.addressStreet,
      addressCity: this.state.addressCity,
      addressZIP: this.state.addressZIP,
      preference: this.state.preference,
      projectDate: this.state.projectDate,
      projectZIP: this.state.projectZIP,
      projectType: this.state.projectType,
      projectScope: this.state.projectScope,
      projectPlans: this.state.projectPlans,
      projectSize: this.state.projectSize,
      projectAreas: this.state.projectAreas,
      projectHardServices: this.state.projectHardServices,
      projectSoftServices: this.state.projectSoftServices,
      message: this.state.message
    };

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendEstimate(template, this.sender, receiverEmail, estimate);

    this.setState({
      formSubmitted: true
    });
    alert("Estimate received. We'll get back to you shortly!");
  }

  sendEstimate(templateId, senderEmail, receiverEmail, estimate) {
    window.emailjs
      .send("mailgun_cul_test", templateId, {
        senderEmail,
        receiverEmail,
        estimate
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error("Failed to send estimate. Error: ", err));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            label="First Name"
            control="input"
            placeholder="John"
            onChange={this.handleChangeClientFirst}
            required
          />
          <Form.Field
            label="Last Name"
            control="input"
            placeholder="Urbina"
            onChange={this.handleChangeClientLast}
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            label="Phone"
            control="input"
            placeholder="123-456-7890"
            onChange={this.handleChangePhone}
            required
          />
          <Form.Field
            label="Email"
            control="input"
            placeholder="curious_customer@gmail.com"
            onChange={this.handleChangeEmail}
            required
          />
        </Form.Group>
        <Form.Field
          label="Street Address"
          control="input"
          placeholder="55 Landscaper Lane"
          onChange={this.handleChangeAddressStreet}
          required
        />
        <Form.Group widths="equal">
          <Form.Field
            label="City"
            control="input"
            placeholder="Salem"
            onChange={this.handleChangeAddressCity}
            required
          />
          <Form.Field
            label="Zip Code"
            control="input"
            placeholder="97304"
            onChange={this.handleChangeAddressZIP}
            required
          />
        </Form.Group>
        <Form.Group grouped>
          <label>I prefer to be contacted by: </label>
          <Form.Field
            label="Phone"
            value="Phone"
            control="input"
            type="radio"
            name="htmlRadios"
            onChange={this.handleChangePreference}
          />
          <Form.Field
            label="Email"
            value="Email"
            control="input"
            type="radio"
            name="htmlRadios"
            onChange={this.handleChangePreference}
          />
          <Form.Field
            label="Either one!"
            value="Whatever"
            control="input"
            type="radio"
            name="htmlRadios"
            onChange={this.handleChangePreference}
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
        <Form.Group widths="equal">
          <Form.Field
            label="Estimated Start Date"
            control="input"
            type="date"
            onChange={this.handleChangeProjectDate}
            required
          />
          <Form.Field
            label="Project Zipcode"
            control="input"
            placeholder="97304"
            onChange={this.handleChangeProjectZIP}
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="Project Type"
            onChange={this.handleChangeProjectType}
            options={[
              { key: "r", text: "Residential", value: "residential" },
              { key: "b", text: "Business", value: "business" },
              { key: "o", text: "Other", value: "other" }
            ]}
            placeholder="Residential"
            required
          />
          <Form.Select
            fluid
            label="Project Scope"
            onChange={this.handleChangeProjectScope}
            options={[
              {
                key: "s",
                text: "Small Changes (ie. plant flowers, trim shrubs)",
                value: "small"
              },
              {
                key: "l",
                text:
                  "Large Project (ie. plant trees, install sprinkler system)",
                value: "large"
              },
              {
                key: "r",
                text:
                  "Complete Renovation (ie. replace soil, hardscape surfaces)",
                value: "renovation"
              }
            ]}
            placeholder="Small Changes"
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="Do you have existing landscape plans?"
            onChange={this.handleChangeProjectPlans}
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
            placeholder="Existing plans?"
            required
          />
          <Form.Select
            fluid
            label="Roughly how large is the project area?"
            onChange={this.handleChangeProjectSize}
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
          <label
            style={{
              fontWeight: "bold"
            }}
          >
            Hardscape Services Requested (Check all that apply)
          </label>
          <Form.Group
            style={{
              marginTop: "1em",
              paddingLeft: "1.5em"
            }}
            grouped
          >
            <Form.Field
              label="Patio"
              value="Patio"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Walkway"
              value="Walkway"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Driveway"
              value="Driveway"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Artificial Turf"
              value="Artificial Turf"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Arbor or Trellis"
              value="Arbor/Trellis"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Retaining Wall"
              value="Retaining Wall"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Water Feature Install"
              value="Water Feature Install"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Boulder Placement"
              value="Boulder Placement"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Other"
              value="Other"
              onChange={this.handleChangeProjectHardServices}
              control="input"
              type="checkbox"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group
          style={{
            margin: "2em 0"
          }}
          grouped
        >
          <label style={{ fontWeight: "bold", marginTop: "2em" }}>
            Softscape Services Requested (Check all that apply)
          </label>
          <Form.Group
            style={{
              marginTop: "1em",
              paddingLeft: "1.5em"
            }}
            grouped
          >
            <Form.Field
              label="Plant Flower Beds"
              value="Plant Flower Beds"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Plant Trees/Shrubs"
              value="Plant Trees/Shrubs"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Apply Mulch"
              value="Apply Mulch"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Remove Trees/Shrubs"
              value="Remove Trees/Shrubs"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Remove Tree Stump"
              value="Remove Tree Stump"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Install Grass/Sod"
              value="Install Grass/Sod"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Install/Repair Outdoor Lighting"
              value="Install/Repair Outdoor Lighting"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Install/Repair Sprinklers"
              value="Install/Repair Sprinklers"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Install/Repair Drainage System"
              value="Install/Repair Drainage System"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Other"
              value="Other"
              onChange={this.handleChangeProjectSoftServices}
              control="input"
              type="checkbox"
            />
          </Form.Group>
        </Form.Group>
        <Form.Group
          style={{
            margin: "2em 0"
          }}
          grouped
        >
          <label style={{ fontWeight: "bold", marginTop: "2em" }}>
            Which areas will the work be taking place in?
          </label>
          <Form.Group
            style={{
              marginTop: "1em",
              paddingLeft: "1.5em"
            }}
            grouped
          >
            <Form.Field
              label="Front Yard"
              value="Front Yard"
              onChange={this.handleChangeProjectAreas}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Back Yard"
              value="Back Yard"
              onChange={this.handleChangeProjectAreas}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Side Yard"
              value="Side Yard"
              onChange={this.handleChangeProjectAreas}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Driveway"
              value="Driveway"
              onChange={this.handleChangeProjectAreas}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Entire Property"
              value="Entire Property"
              onChange={this.handleChangeProjectAreas}
              control="input"
              type="checkbox"
            />
            <Form.Field
              label="Other"
              value="Other"
              onChange={this.handleChangeProjectAreas}
              control="input"
              type="checkbox"
            />
          </Form.Group>
        </Form.Group>

        <Form.Field
          label="Anything else we should know?"
          control={TextArea}
          placeholder="Type here.."
          onChange={this.handleChangeMessage}
          value={this.state.message}
        />
        <Container textAlign="center">
          <h3
            style={{
              marginTop: "2em"
            }}
          >
            All Done?
          </h3>
          <Button
            primary
            size="medium"
            animated="fade"
            style={{
              marginTop: "2em",
              marginBottom: "4em"
            }}
            type="submit"
          >
            <Button.Content
              style={{
                color: "white"
              }}
              visible
            >
              Submit!
            </Button.Content>

            <Button.Content
              style={{
                color: "white"
              }}
              hidden
            >
              <Icon name="cloud" />
            </Button.Content>
          </Button>
        </Container>
      </Form>
    );
  }
}

EstimateForm.propTypes = {
  env: PropTypes.object.isRequired
};

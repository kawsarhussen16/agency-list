import React from "react";
import { connect } from "react-redux";
import { addAgency } from "../../../Redux/actions/agencies";
import "./index.scss";

const initialState = {
  name: "",
  location: "",
};
class AddAgency extends React.Component {
  state = { ...initialState };
  clearState = () => {
    this.setState({ ...initialState });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  generatedId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  validateForm = () => {
    const { name, location } = this.state;
    const isInvalid = !name || !location;
    return isInvalid;
  };
  createNewAgency = (e) => {
    e.preventDefault();
    let id = this.generatedId();
    const newAgency = { ...this.state, id };
    this.props.addAgency(newAgency);
    this.clearState();
  };
  render() {
    return (
      <form className="add-agency-form">
        <h5>Create a new Agency</h5>
        <div className="add-agency-form-item">
          <label>
            <input
              className="input-box"
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Agency Name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="input-box"
              name="location"
              type="text"
              value={this.state.location}
              placeholder="Agency Location"
              onChange={this.handleChange}
            />
          </label>
          <button
            className="btn button-primary"
            type="submit"
            disabled={this.validateForm()}
            onClick={this.createNewAgency}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
const mapDispatchToProps = { addAgency };

export default connect(mapStateToProps, mapDispatchToProps)(AddAgency);

import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAgencyData } from "../../Redux/actions/agencies";

class UpdateAgency extends Component {
     state = {
          name: "",
          location: "",
     };
     handleInput = e => {
          this.setState({ [e.target.name]: e.target.value });
     };
     handleChange = e => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }
     validateForm = () => {
          const { name, location } = this.state;
          const isInvalid = !name || !location;
          return isInvalid;
     };
     UpdateAgency = () => {
          const updatedData = this.state;
          let id = this.props.id;
          this.props.updateAgencyData(id, updatedData)
     }
     render() {
          const { name, location } = this.state;
          return (
               <div>
                    <form>
                         <input
                              value={name}
                              type="text"
                              name="name"
                              onChange={this.handleInput}
                         />
                         <input
                              value={location}
                              type="text"
                              name="location"
                              onChange={this.handleInput}
                         />
                         <button
                              className="button-primary"
                              type="submit"
                              disabled={this.validateForm()}
                              onSubmit={this.updateAgency}
                         >
                              Update
                         </button>

                    </form>
               </div>
          );
     }
}

export default connect(null, updateAgencyData)(UpdateAgency)
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAgencyData } from "../../../Redux/actions/agencies";

class UpdateAgency extends Component {
     state = {
          name: "",
          location: "",
     };
     componentDidMount() {
          let { name, location } = this.props.currentData;
          this.setState({ name, location })
     }

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
     updateAgency = (e) => {
          e.preventDefault();
          const updatedData = this.state;
          let id = this.props.currentData.id;
          this.props.updateAgencyData(id, updatedData)
     }
     componentDidUpdate(prevProps, prevState) {
          if (prevProps.currentData.id !== this.props.currentData.id) {
               this.setState(this.props.currentData);
          }
     }
     render() {
          const { name, location } = this.state;
          return (
               <div className="update-form-container">
                    <h5>Update Agency information</h5>
                    <form className="update-form">
                         <input
                              className="input-box"
                              value={name}
                              type="text"
                              name="name"
                              onChange={this.handleInput}
                         />
                         <input
                              className="input-box"
                              value={location}
                              type="text"
                              name="location"
                              onChange={this.handleInput}
                         />
                         <button
                              className="btn button-primary"
                              type="submit"
                              disabled={this.validateForm()}
                              onClick={(e) => this.updateAgency(e)}
                         >
                              Update
                         </button>
                         <button className="btn button-cancel" onClick={this.props.cancelUpdate}>
                              cancel
                         </button>
                    </form>
               </div>
          );
     }
}

export default connect(null, { updateAgencyData })(UpdateAgency)
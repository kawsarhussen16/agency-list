import React from 'react'
import { connect } from 'react-redux'
import { addAgency } from "../../Redux/actions/agencies";
const initialState = {
     name: "",
     location: "",
}
class AddAgency extends React.Component {
     constructor(props) {
          super(props);
          this.state = { ...initialState };
     }
     clearState = () => {
          this.setState({ ...initialState });
     };
     handleChange = e => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }
     generatedId = () => {
          return (
               "_" +
               Math.random()
                    .toString(36)
                    .substr(2, 9)
          );
     };
     validateForm = () => {
          const { name, location } = this.state;
          const isInvalid = !name || !location;
          return isInvalid;
     };
     createNewAgency = e => {
          e.preventDefault();
          let id = this.generatedId();
          const newAgency = { ...this.state, id }
          this.props.addAgency(newAgency);
          this.clearState();
     }
     render() {
          return (
               <form>
                    <h4>Create a new Agency</h4>
                    <label> Agency Name:
                              <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label> Agency Location:
                              <input name="location" type="text" value={this.state.location} onChange={this.handleChange} />
                    </label>
                    <button className="button-primary"
                         type="submit" disabled={this.validateForm()} onClick={this.createNewAgency}>Add</button>
               </form>
          )
     }
}

function mapStateToProps(state) {
     return {
          data: state.data
     }
}
const mapDispatchToProps = { addAgency };


export default connect(mapStateToProps, mapDispatchToProps)(AddAgency);

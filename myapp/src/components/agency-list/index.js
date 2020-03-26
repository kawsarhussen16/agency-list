import React from 'react'
import { connect } from 'react-redux';
import Displaydata from "./display-data";
import AddAgency from "./addform";
import UpdateForm from "./updateForm";
import "./index.scss";
import { addAgency, deleteAgencyData } from "../../Redux/actions/agencies";

class AgencyList extends React.Component {
     state = { currentData: "", update: false }
     deleteAgency = (id) => {
          this.props.deleteAgencyData(id)
     }
     updateAgency = async (agency) => {
          await this.setState({ currentData: agency, update: true })
     }
     cancelUpdate = () => {
          if (this.state.update !== false) this.setState({ update: false });
     };

     render() {
          return (
               <div>
                    <div>
                         {this.state.update ? <UpdateForm cancelUpdate={this.cancelUpdate} currentData={this.state.currentData} /> : <AddAgency />}
                    </div>
                    <h4>Agency List :</h4>
                    <div className="agency-list-container">
                         {this.props.data.map(agency =>
                              <div key={agency.id}>
                                   <Displaydata updateAgency={this.updateAgency} deleteAgency={this.deleteAgency} agency={agency} />
                              </div>
                         )}
                    </div>

               </div>
          )
     }
}

function mapStateToProps(state) {
     return {
          data: state.data
     }
}

const mapDispatchToProps = { addAgency, deleteAgencyData };
export default connect(mapStateToProps, mapDispatchToProps)(AgencyList);

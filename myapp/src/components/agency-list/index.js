import React from 'react'
import { connect } from 'react-redux';
import Displaydata from "../display-data";
import AddAgency from "./addForm";
import { addAgency, deleteAgencyData } from "../../Redux/actions/agencies";

class AgencyList extends React.Component {
     deleteAgency = (id) => {
          this.props.deleteAgencyData(id)
     }

     render() {
          return (
               <div>
                    <AddAgency />
                    <div>{this.props.data.map(agency =>
                         <div key={agency.id}>
                              <Displaydata deleteAgency={this.deleteAgency} agency={agency} />
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

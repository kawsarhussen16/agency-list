import React from 'react';
import "./index.scss";

const DisplayData = ({ agency, deleteAgency, updateAgency }) => {
     let { id, name, location } = agency;
     return (
          <div className="agency-list-item" key={id}>
               <div>
                    <div className="agency-list-title">
                         {name}
                    </div>
                    <p>
                         Location: {location}
                    </p>

               </div>
               <div>
                    <button className="btn button-secondary" onClick={() => deleteAgency(id)}>
                         Delete
                    </button>
                    <button className="btn button-update" onClick={() => updateAgency(agency)}>
                         Update
                    </button>
               </div>

          </div>
     )
}

export default DisplayData;
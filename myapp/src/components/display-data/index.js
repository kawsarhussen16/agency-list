import React from 'react';
import "./index.style.scss";

const DisplayData = ({ agency, deleteAgency, updateAgency }) => {
     let { id, name, location } = agency;
     return (
          <div className="agency-list-item" key={id}>
               <div>
                    <h4 >
                         Agency: {name}
                    </h4>
                    <p>
                         Location: {location}
                    </p>

               </div>
               <div>
                    <button className="btn" onClick={() => deleteAgency(id)}>
                         Delete
                    </button>
                    <button className="btn" onClick={() => updateAgency(agency)}>
                         Update
                    </button>
               </div>

          </div>
     )
}

export default DisplayData;
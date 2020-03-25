import React from 'react';

const DisplayData = ({ agency, deleteAgency }) => {
     let { id, name, location } = agency;
     return (
          <div key={id}>
               <div>
                    <h4 >
                         Agency: {name}
                    </h4>
                    <p>
                         Location: {location}
                    </p>

               </div>
               <div>
                    <button onClick={() => deleteAgency(id)}>
                         Delete
                    </button>
                    <button>
                         Update
                    </button>
               </div>

          </div>
     )
}

export default DisplayData;
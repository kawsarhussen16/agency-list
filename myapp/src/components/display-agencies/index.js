import React from 'react';

const DisplayAgencies = ({ data }) => {
     return (
          <div>
               {data.map(agency => {
                    return (
                         <div key={agency.id}>
                              <h4 >
                                   {agency.id} {agency.name}
                              </h4>
                              <p>
                                   {agency.location}
                              </p>
                         </div>

                    )
               })}

          </div>
     )
}

export default DisplayAgencies;
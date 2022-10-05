import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ updateGender, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => {
            return (
              <FilterBTN
                name="gender"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={updateGender}
                input={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gender;



// import React from 'react'

// const Gender = () => {
//   return (
//     <div className="accordion-item">
//         <h2 className="accordion-header" id="headingOne">
//             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                 Gender
//             </button>
//         </h2>
//         <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//             <div className="accordion-body">
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Gender
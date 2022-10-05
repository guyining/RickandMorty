import React from "react";
import Gender from "./Category/Gender";
import Status from "./Category/Status";

const Filter = ({
  pageNumber,
  setPageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };
  return (
    <div>
      <div style={{cursor:"pointer"}} onClick={clear} className='text-center text-primary text-decoration-underline mb-4'>Clear Filter</div>
        <div className="accordion mb-5" id="accordionStatus"> 
          <div className="accordion" id="accordionExample">
            <Status
              setPageNumber={setPageNumber}
              updateStatus={updateStatus}
            />
            <Gender
              setPageNumber={setPageNumber}
              updateGender={updateGender}
            />
          </div>
        </div>
    </div>
  );
};

export default Filter;





// import React from 'react'
// //import Gender from '../Filters/Category/Gender'
// import Gender from './Category/Gender'
// import Status from './Category/Status'
// import styles from './Filters.module.scss'

// const Filters = () => {
//   return (
//     <div>
//       <div style={{cursor:"pointer"}} className='text-center text-primary text-decoration-underline mb-4'>Clear Filter</div>
//       <div className="container">
//         <div className="row">
//           <div className="accordion mb-5" id="accordionStatus"> 
//             <div className="row">
//               <div className="col">     
//                 <Status />           
//               </div>
//               <div className="col">     
//                 <Gender />           
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </div>
//   )
// }

// export default Filters
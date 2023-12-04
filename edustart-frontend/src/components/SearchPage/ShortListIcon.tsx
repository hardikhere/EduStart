// import React, { useEffect, useState } from "react";

// const ShortListIcon = (props) => {
//   const [isShortlisted, setisShortlisted] = useState(false);
//   useEffect(() => {
//     const shortlist =
//       JSON.parse(window.localStorage.getItem("shortlist")) || [];
//     if (shortlist.includes(props.sid)) setisShortlisted(true);
//   }, [props, isShortlisted]);

//   const handleShortList = () => {
//     var shortlist = JSON.parse(localStorage.getItem("shortlist")) || [];
//     if (!shortlist.includes(props.sid)) {
//       shortlist.push(props.sid);
//       setisShortlisted(true);
//     } else {
//       //remove if already exists
//       shortlist = shortlist.filter((el) => {
//         if (el === props.sid) return false;
//         else return true;
//       });
//       setisShortlisted(false);
//     }
//     console.log(shortlist);
//     window.localStorage.setItem("shortlist", JSON.stringify(shortlist));
//   };

//   return (
//     <React.Fragment>
//       {props.isProfile ? (
//         <Button onClick={handleShortList}>
//           {!isShortlisted ? (
//             <i className="pi pi-bookmark mr-1"></i>
//           ) : (
//             <FontAwesomeIcon icon={faBookmark} className="mr-1" />
//           )}
//           {isShortlisted ? "Shortlisted" : "Shortlist"}
//         </Button>
//       ) : (
//         <div className="mark-container" onClick={handleShortList}>
//           {!isShortlisted ? (
//             <i className="pi pi-bookmark filled"></i>
//           ) : (
//             <FontAwesomeIcon icon={faBookmark} />
//           )}
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default ShortListIcon;
import React from "react";

const ShortListIcon = () => {
  return <div>ShortListIcon</div>;
};

export default ShortListIcon;

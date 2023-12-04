// import React, { useState } from "react";
// import {
//   TwitterShareButton,
//   FacebookShareButton,
//   TwitterIcon,
//   FacebookIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
// } from "react-share";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

// const ShareButtonGroup = ({ url }) => {
//   const [showShareButton, setShowShareButton] = useState(false);

//   return (
//     <div>
//       <FontAwesomeIcon
//         icon={faShareAlt}
//         size="lg"
//         onClick={() => setShowShareButton(!showShareButton)}
//         style={{ marginTop: "20px", marginLeft: "20px" }}
//       />
//       {showShareButton ? (
//         <>
//           <TwitterShareButton url={url}>
//             <button className="btn btn-circle">
//               <TwitterIcon size={32} round />
//             </button>
//           </TwitterShareButton>
//           <FacebookShareButton url={url}>
//             <button className="btn btn-circle">
//               <FacebookIcon size={32} round />
//             </button>
//           </FacebookShareButton>
//           <WhatsappShareButton url={url}>
//             <button className="btn btn-circle">
//               <WhatsappIcon size={32} round />
//             </button>
//           </WhatsappShareButton>
//         </>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default ShareButtonGroup;
import React from "react";

const ShareButtonGroup = () => {
  return <div>ShareButtonGroup</div>;
};

export default ShareButtonGroup;

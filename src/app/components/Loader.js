// import React from "react";
// import "./loader.css";
// import Image from "next/image";

// const Loader = () => {
//   const mySrc = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
//   return (
//     <Image
//       className="spinner"
//       src={mySrc}
//       alt="loading"
//       width={50}
//       height={50}
//     />
//   );
// };

// export default Loader;

import React from 'react';
import './loader.css';
import Image from 'next/image';

// const mySrc = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";

const Loader = () => {
  return (
    <div className="spinner">
      {/* <Image src={mySrc} alt="loading" width={50} height={50} />
       */}
      <h1>loading...</h1>
    </div>
  );
};

export default Loader;

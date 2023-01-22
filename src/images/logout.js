import * as React from "react";
const Logout = (props) => (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    id="Layer_1"
    color="white"
    // stroke="white"
    fill="white"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      {/* <style>{".cls-1{fill:#ffffff;}.cls-2{clip-path:url(#clip-path);}"}</style> */}
      <clipPath id="clip-path">
        <rect className="cls-1" x={0.21} y={-0.21} width={24} height={24} />
      </clipPath>
    </defs>
    <title>{"circle-logout"}</title>
    <g className="cls-2">
      <path d="M20.87,13h0l-8.26,0a.76.76,0,0,1-.75-.76.75.75,0,0,1,.75-.74h0l8.25,0a.75.75,0,0,1,0,1.5Z" />
      <path d="M15.36,16.84a.75.75,0,0,1-.54-.22l-3.88-3.9a.75.75,0,0,1-.22-.53.72.72,0,0,1,.23-.53l3.9-3.88a.75.75,0,0,1,1.06,0,.75.75,0,0,1,0,1.06L12.53,12.2l3.36,3.36a.75.75,0,0,1,0,1.06A.7.7,0,0,1,15.36,16.84Z" />
      <path d="M11.59,21.21a9.24,9.24,0,0,1-5.36-1.72A9.21,9.21,0,0,1,17,4.51a.75.75,0,0,1,.17,1,.74.74,0,0,1-1,.17,7.71,7.71,0,1,0-.57,12.91.75.75,0,1,1,.76,1.29A9.24,9.24,0,0,1,11.59,21.21Z" />
    </g>
  </svg>
);
export default Logout;

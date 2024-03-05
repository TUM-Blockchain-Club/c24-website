import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 flex p-5">
      <a
        href="https://www.tum-blockchain.com/imprint"
        target="_blank"
        rel="noopener noreferrer"
        className="flex cursor-pointer text-white text-sm ml-2"
      >
        Imprint
      </a>
      <a
        href="https://tum-blockchain.notion.site/Privacy-Policy-3af6ed14b0b3429191a161f3dd0b379d"
        target="_blank"
        rel="noopener noreferrer"
        className="flex cursor-pointer text-white text-sm ml-2"
      >
        Privacy Policy
      </a>
    </div>
  );
};

export default Footer;

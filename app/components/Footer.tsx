import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 flex p-5 space-x-8">
      <a
        className="text-neutral-500 text-xs md:text-base"
        href="mailto:relations@tum-blockchain.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
      <a
        className="text-neutral-500 text-xs md:text-base"
        href="https://www.tum-blockchain.com/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
      <a
        className="text-neutral-500 text-xs md:text-base"
        href="https://www.tum-blockchain.com/imprint"
        target="_blank"
        rel="noopener noreferrer"
      >
        Impressum
      </a>
    </div>
  );
};

export default Footer;

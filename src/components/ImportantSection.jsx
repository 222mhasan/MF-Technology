import React from "react";
import BracLogo from "../images/brac_logo.png";
import RightArrow from "../images/rightArrow.gif";
import RightArrow2 from "../images/RightArrow2.gif";

const ImportantSection = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-1 text-black bg-sky-300">
        Important Links
      </h1>
      <div>
        <button className="btn bg-white text-black border-[#e5e5e5] w-full">
          <img className="w-[20px]" src={RightArrow2} alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://login.brac.net/"
          >
            Trendx
          </a>
        </button>
        {/* ERO */}
        <button className="btn bg-white text-black border-[#e5e5e5] w-full">
          <img className="w-[20px]" src={RightArrow2} alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://login.brac.net/realms/brac/protocol/openid-connect/auth?scope=openid&state=mQweZAOG_VppKWPpc7KKMqWwZ4XtaHc-dpzgLxSZjZI.lGxe8xdkT5c.0adjB31-S9ejN-oNWdpr2Q&response_type=code&client_id=erp&redirect_uri=https%3A%2F%2Ferp.brac.net%2Fidp%2Frealms%2Fbrac%2Fbroker%2Fsso%2Fendpoint&nonce=h-MGPs-1GOF2_9Z6skWIsg"
          >
            ERP
          </a>
        </button>

        {/* My Brac */}
        <button className="btn bg-white text-black border-[#e5e5e5] w-full">
          <img className="w-[20px]" src={RightArrow2} alt="" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://login.brac.net/realms/brac/protocol/openid-connect/auth?client_id=mybrac-v2&redirect_uri=https%3A%2F%2Fmybrac.brac.net%2F&state=75a7010c-e613-4b41-907a-314d76796f8e&response_mode=fragment&response_type=code&scope=openid&nonce=b2c8a029-2173-4ffb-846b-3428012e7d7b"
          >
            My Brac
          </a>
        </button>
      </div>
    </div>
  );
};

export default ImportantSection;

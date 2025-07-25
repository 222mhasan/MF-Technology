import React, {  useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const MailFormat = () => {

    const [mails, setmails]= useState([]);

    useEffect(() => {
        fetch("/mailformat.json")
            .then((res) => res.json())
            .then((data) => setmails(data));
    }, []);

  return (
    <div>
      {/* Mail format start */}
      <div>
        <h1 className="text-xl font-semibold text-center mb-1 text-black bg-sky-300">Mail Format</h1>
        <div>
            {
                mails.map(mail=> <div key={mail.id}>
                    <a
                                    className="text-blue-500 text-sm py-1 underline flex gap-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={mail.link}
                                  >
                                    <span>
                                      <FaArrowRight className="font-bold text-xl text-black" />
                                    </span>
                                    {mail.title}
                                  </a>
                </div>)
            }
        </div>
      </div>
      {/* Mail format end */}
    </div>
  );
};

export default MailFormat;

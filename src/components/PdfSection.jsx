import React, { useEffect, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const PdfSection = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    fetch("/pdf.json")
      .then((res) => res.json())
      .then((data) => setPdfs(data));
  });

  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-1 text-black bg-sky-300 font-montserrat">
        PDF
      </h1>
      <div className="px-1">
        {pdfs.map((pdf) => (
          <div key={pdf.id}>
            <a
              className="text-blue-500 text-sm py-1 underline flex gap-2"
              target="_blank"
              rel="noopener noreferrer"
              href={pdf.link}
            >
              <span>
                <FaRegHandPointRight className="font-bold text-xl text-black" />
              </span>
              {pdf.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfSection;

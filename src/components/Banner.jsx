import { useEffect, useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import ParvezVai from "../images/parvez-bhai.png"; // Assuming you have an image for the Zonal Lead

const Banner = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(5);

  const showMore = () => {
    setVisible(items.length); // show all items
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json"); // ✅ Accessing from public
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to load data.json:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" text-center my-3">
      <h1 className="text-3xl font-semibold mb-4">Our Team</h1>

      {/* Zonal Lead */}
      <div className="flex justify-center mb-4 md:mb-8">
        <div className=" w-96 shadow-sm">
          <figure className="px-10 w-[300px] mx-auto">
            <img src={ParvezVai} alt="Shoes" className="rounded-full" />
          </figure>
          <div className=" items-center text-center mb-3">
            <h2 className="text-center text-2xl">Parvez Mosaraf</h2>
            <p>Deputy Manager, South-West</p>
            <p className="flex items-center justify-center gap-1 font-semibold">
              <FaPhoneAlt />
              01712345678
            </p>
            <p className="flex items-center justify-center gap-1 font-semibold">
              <AiTwotoneMail />
              parvez.mosaraf@brac.net
            </p>
          </div>
        </div>
      </div>

      {/* Team members */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {items.slice(0, visible).map((item) => (
          <div
            className="id border border-gray-300 shadow-sm p-2 rounded-md"
            key={item.id}
          >
            <img
              className="w-[170px] h-[170px] mx-auto rounded-full border border-gray-400"
              src={item.image}
              alt="image"
            />
            <h1 className="text-lg font-semibold">{item.name}</h1>
            <p>{item.base}</p>
            <p className="flex items-center justify-center gap-1 font-semibold">
              <FaPhoneAlt />
              {item.phone}
            </p>
            <p className="flex items-center justify-center gap-1 font-semibold">
              <AiTwotoneMail />
              {item.email}
            </p>
          </div>
        ))}
      </div>

      {/* show more button */}
      {visible < items.length && (
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md mt-3"
          onClick={showMore}
        >
          <MdKeyboardDoubleArrowDown />
          Show full Team
        </button>
      )}
    </div>
  );
};

export default Banner;

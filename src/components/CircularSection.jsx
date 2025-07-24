import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CircularSection = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-1">All Circulars</h1>
      <div className="mx-1">
        <ul>
          <li className="flex gap-2 ">
            <FaArrowRight className="font-bold" />
            <a
              className="text-blue-600 text-sm"
              href="https://drive.google.com/file/d/1QDjTKwQwbNbjkFXsboSRuWtMYrnqtySq/view?usp=sharing"
            >
             
              ল্যাপটপ লোন সার্কুলার- সংযোজনী
            </a>
          </li>
          <li className="flex gap-2 ">
            <FaArrowRight className="font-bold text-2xl" />
            <a
              className="text-blue-600 text-sm"
              href="https://drive.google.com/file/d/1QDjTKwQwbNbjkFXsboSRuWtMYrnqtySq/view?usp=sharing"
            >
             
              ডিভাইস বেনিফিট আবেদন, সুপারিশ, অনুমোদন-এর অপারেশন ম্যানুয়াল
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <FaArrowRight className="font-bold" />
            <a
              className="text-blue-600 text-sm"
              href="https://drive.google.com/file/d/1QDjTKwQwbNbjkFXsboSRuWtMYrnqtySq/view?usp=sharing"
            >
             
              ল্যাপটপ লোন সার্কুলার- সংযোজনী
            </a>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
};

export default CircularSection;

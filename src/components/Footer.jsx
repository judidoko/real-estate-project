import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" h-[200px] bg-gray-900 text-white flex flex-wrap space-x-12 py-8 px-16">
        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">Real Estate Project</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Aperiam eligendi atque debitis, <br /> doloribus rerum ex
            voluptatem! Dolorem reiciendis sequi accusamus, <br /> aliquam
            deleniti adipisci illo expedita quis quos consequatur eum beatae.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Quick Lick</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Social Media Link</h2>

          <div className="flex gap-3">
            <div>facebook</div>
            <div>Twitter</div>
            <div>Linkedin</div>
            <div>Youtube</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React, { useState } from "react";

const CreateListing = () => {
  // formData Hook
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    packing: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
  });
  // Destructuring formData
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    packing,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;
  // onChange function
  function onChange() {}

  return (
    <>
      <main className="max-w-md px-2 mx-auto">
        <h1 className="text-3xl text-center mt-6 font-bold">
          Create a Listing
        </h1>
        <form>
          <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
          <div className="flex space-x-4">
            <button
              type="button"
              id="type"
              value="Sale"
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                type === "rent"
                  ? "bg-white text-black"
                  : "bg-slate-600 text-white"
              }`}
            >
              Sell
            </button>
            <button
              type="button"
              id="type"
              value="Sale"
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                type === "sale"
                  ? "bg-white text-black"
                  : "bg-slate-600 text-white"
              }`}
            >
              Rent
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Name</p>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Name"
            maxLength="32"
            minLength="10"
            onChange={onChange}
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <div className="flex space-x-6 justify-start mb-6">
            <div>
              <p className="text-lg font-semibold">Bed Room(s)</p>
              <input
                type="number"
                id="bedrooms"
                value={bedrooms}
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white text-center border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                onChange={onChange}
                min="1"
                max="50"
                required
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Bath Room(s)</p>
              <input
                type="number"
                id="bathrooms"
                value={bathrooms}
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white text-center border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
                onChange={onChange}
                min="1"
                max="50"
                required
              />
            </div>
          </div>
          <p className="text-lg mt-6 font-semibold">Packing Space</p>
          <div className="flex space-x-4">
            <button
              type="button"
              id="packing"
              value={true}
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                !packing ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              id="packing"
              value={true}
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                packing ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              No
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Furnished</p>
          <div className="flex space-x-4">
            <button
              type="button"
              id="furnished"
              value={true}
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              id="furnished"
              value={false}
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                furnished ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              No
            </button>
          </div>
          <p className="text-lg mt-6 font-semibold">Address</p>
          <textarea
            type="text"
            id="address"
            value={address}
            placeholder="Enter Address..."
            onChange={onChange}
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <p className="text-lg font-semibold">Description</p>
          <textarea
            type="text"
            id="description"
            value={description}
            placeholder="Description What You Are Advertising..."
            onChange={onChange}
            required
            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <p className="text-lg font-semibold">Offer</p>
          <div className="flex space-x-4 mb-6">
            <button
              type="button"
              id="offer"
              value={true}
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                !offer ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              id="offer"
              value={false}
              onClick={onChange}
              className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
                offer ? "bg-white text-black" : "bg-slate-600 text-white"
              }`}
            >
              No
            </button>
          </div>
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Regular Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                  type="number"
                  id="regularPrice"
                  value={regularPrice}
                  onChange={onChange}
                  required
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      <span>&#8358;</span>/Annum
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {offer && (
            <div className="flex items-center mb-6">
              <div className="">
                <p className="text-lg font-semibold">Discounted Price</p>
                <div className="flex w-full justify-center items-center space-x-6">
                  <input
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                    type="number"
                    id="discountedPrice"
                    value={discountedPrice}
                    onChange={onChange}
                    required={offer}
                  />
                  {type === "rent" && (
                    <div className="">
                      <p className="text-md w-full whitespace-nowrap">
                        <span>&#8358;</span>/Annum
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="mb-6">
            <p className="text-lg font-semibold">Images</p>
            <p className="text-gray-600">
              The first image will be the cover image (max-images 6)
            </p>
            <input
              type="file"
              id="images"
              onChange={onChange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:bg-white focus:border-slate-600"
            />
          </div>
          <button
            type="submit"
            className="w-full mb-6 px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out"
          >
            Create Listing
          </button>
        </form>
      </main>
    </>
  );
};

export default CreateListing;

import React from 'react'

const AdvertisementNewspaper = () => {
  return (
    <div >
      <div className="bg-white rounded-lg p-8">
      <div class="w-full max-w-md mx-auto">
        <h2 className="text-xl text-rv100  font-bold mb-4">Enter Description of Files</h2>
        <form >
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" for="format">
        Format
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Format"
              id="Format"
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="contribution">
          Contribution
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Contribution"
            />
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" for="subject">
        Subject
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Subject"
              id="Subject"
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="rights">
          Rights
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Rights"
              id="Rights"
            />
      </div>
    </div>

    <div className="w-full">
    <label class="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" for="description">
          Description
        </label>
      <textarea
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Description"
              id="Description"
            />
    </div>

    <div className="flex justify-start">
            <button
              type="submit"
              className="mr-2 bg-rv100 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>

            <button
              type="button"
              className="border border-gray-400 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>

        </form>
    </div>
    </div>
    </div>
  )
}

export default AdvertisementNewspaper
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'


export default function App() {

  const [value5, setValue5] = React.useState(0)
  const [value10, setValue10] = React.useState(0)
  const [value50, setValue50] = React.useState(0)
  const [value100, setValue100] = React.useState(0)
  const [value200, setValue200] = React.useState(0)
  const [totalValue, setTotalValue] = React.useState(0)

  function onfiveChange(event) {
    
    var val = parseInt(event.target.value)

    console.log("the chane in 5 is: ",val)
    // try {
    //   var val = parseInt(event.target.value)
    // } catch (err) {
    //   console.log("the error is: ", err)

    //   val = 0
    // }
    if (isNaN(val)) {
      console.log("The value is empty")
      val = 0
    }
    // // var newval = 
    setValue5(val * 5)
  }

  function ontenchange(event) {    
    
    var val = parseInt(event.target.value)

    // var newval = 
    console.log("the chane in 10 is: ", val)
    // try {
    //   var val = parseInt(event.target.value)
    // } catch (err) {
    //   console.log("the error is: ", err)

    //   val = 0
    // }
    if (isNaN(val)) {
      console.log("The value is empty")
      val = 0
    }
    // // var newval = 
    setValue10(val * 10)
  }

  function on50change(event) {    
    
    var val = parseInt(event.target.value)

    // var newval = 
    console.log("the chane in 50 is: ", val)
    // try {
    //   var val = parseInt(event.target.value)
    // } catch (err) {
    //   console.log("the error is: ", err)

    //   val = 0
    // }
    if (isNaN(val)) {
      console.log("The value is empty")
      val = 0
    }
    // // var newval = 
    setValue50(val * 50)
  }

  function on100change(event) {    
    
    var val = parseInt(event.target.value)

    // var newval = 
    console.log("the chane in 100 is: ", val)
    // try {
    //   var val = parseInt(event.target.value)
    // } catch (err) {
    //   console.log("the error is: ", err)

    //   val = 0
    // }
    if (isNaN(val)) {
      console.log("The value is empty")
      val = 0
    }
    // // var newval = 
    setValue100(val * 100)
  }

  function on200change(event) {    
    
    var val = parseInt(event.target.value)

    // var newval = 
    console.log("the chane in 200 is: ", val)
    // try {
    //   var val = parseInt(event.target.value)
    // } catch (err) {
    //   console.log("the error is: ", err)

    //   val = 0
    // }
    if (isNaN(val)) {
      console.log("The value is empty")
      val = 0
    }
    // // var newval = 
    setValue200(val * 200)
  }

  return (
    <form>
      <div className="space-y-12 p-10">
        <div className="mx-auto max-w-lg border-b border-gray-900/10 pb-12">
          <div className='mx-auto flex flex-col justify-center'>
            <h2 className="text-3xl mx-auto font-bold leading-7 text-gray-900">{value5 + value10 + value50 + value50 + value100 + value200}</h2>
          </div >
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                200
              </label>
              <div className="mt-2">
                <input
                  onChange={on200change}
                  id="two-hundred"
                  name="two-hundred"
                  type="number"
                  placeholder="Enter the 10's "
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                100
              </label>
              <div className="mt-2">
                <input
                  onChange={on100change}
                  id="hundred"
                  name="hundred"
                  type="number"
                  placeholder="Enter the 100's "
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                50
              </label>
              <div className="mt-2">
                <input
                  onChange={on50change}
                  id="fifty"
                  name="fifty"
                  type="number"
                  placeholder="Enter the 50's "
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                10
              </label>
              <div className="mt-2">
                <input
                  onChange={ontenchange}
                  id="ten"
                  name="ten"
                  type="number"
                  placeholder="Enter the 10's "
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                5
              </label>
              <div className="mt-2">
                <input
                  onChange={onfiveChange}
                  id="five"
                  name="five"
                  type="number"
                  placeholder="Enter the 5's "
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                10
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

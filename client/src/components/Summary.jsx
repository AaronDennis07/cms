import React from 'react';
import { useAuth } from '../provider/authProvider';
import { ErrorMessage } from "@hookform/error-message"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
const Summary = ({handleSubmitOrder}) => {
  const { cart, handleCartDelete } = useAuth();
  const { register, handleSubmit, formState: { errors, touchedFields,isSubmitting } } = useForm({
    mode: 'onBlur' || 'onSubmit'
})
  const computeTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    return  total.toPrecision(4);
  };
  return (
    <div className="py-3 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="mt-2 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start  px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 ">
              Cart
            </p>
            {cart.map((item) => (
            <div className="mt-3  flex  flex-col justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
             
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-[10%] flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-md font-semibold leading-2 ">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex justify-between space-x-3 items-start w-[50%]">
                    <p className="text-base xl:text-lg leading-6  ml-28">
                      {item.quantity}
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 ">
                      &#8377; {item.price}
                    </p>
                  </div>
                  <div>
                    <a
                      className="text-red-600 cursor-pointer hover:underline"
                      onClick={() => handleCartDelete(item.id)}
                    >
                      Remove
                    </a>
                  </div>
                </div>
              
            </div>
            ))}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full  space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 ">Summary</h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 ">Subtotal</p>
                  <p className="text-base leading-4 ">
                    &#8377; {computeTotal()}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 ">Total</p>
                <p className="text-base font-semibold leading-4 ">
                  &#8377; {computeTotal()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="   flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col mt-full">
          <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
              <form
                className="w-full    "
                onSubmit={handleSubmit(handleSubmitOrder)}
              >
                <div className=" mb-4">
                  <label
                    htmlFor="name"
                    className=" text-lg block mr-7 mb-2 w-full"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={` input input-bordered 
                ${errors.name && 'input-error'}  ${
                      touchedFields.name && !errors.name && 'input-success'
                    } w-full `}
                    name="name"
                    id="name"
                    {...register('name', {
                      required: 'name is required',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => (
                      <p className="text-red-600">{message}</p>
                    )}
                  />
                </div>
                <div className=" mb-4">
                  <label
                    htmlFor="address"
                    className=" text-lg block mr-7 mb-2 w-full"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className={` input input-bordered 
                ${errors.address && 'input-error'}  ${
                      touchedFields.address && !errors.address && 'input-success'
                    } w-full `}
                    address="address"
                    id="address"
                    {...register('address', {
                      required: 'address is required',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="address"
                    render={({ message }) => (
                      <p className="text-red-600">{message}</p>
                    )}
                  />
                </div>
          
                <input
                    type="text"
                    hidden
                    name="total"
                    id="total"
                    {...register('total',{
                        value:computeTotal()
                    })}
                  />
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                <button className="mt-6     btn btn-success  font-medium w-96 text-lg ">
                  Place Order
                </button>
              </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

import React from 'react'

const ViewSingleOrder = ({order}) => {
    console.log(order)
  return (
    <div className="py-3 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
         
            <div className="mt-2 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start  px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 ">Cart</p>
                        {order?.products?.map((product,i)=>(
                            <div className="mt-3  flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                          
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-md font-semibold leading-2 ">{product.name}</h3>
                                    
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
        
                                    <p className="text-base xl:text-lg leading-6  ml-28">{order.quantities[i]}</p>
                                    <p className="text-base xl:text-lg font-semibold leading-6 ">&#8377; {product.price}</p>
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
                                    <p className="text-base leading-4 ">&#8377; {order.total}</p>
                                </div>
                              
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 ">Total</p>
                                <p className="text-base font-semibold leading-4 ">&#8377; {order.total}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className=" w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 ">Customer</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        
                        <div className="flex justify-between items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-1 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left ">Name</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 ">{order.name}</p>
                                </div>
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-1 ">
                                    <p className="text-base font-semibold  text-center md:text-left ">USN</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 ">{order.address}</p>
                                </div>
                        
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ViewSingleOrder
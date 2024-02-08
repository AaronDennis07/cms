import React from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../provider/authProvider';

const OrderItem = ({items}) => {
   const {addToCart,cart } = useAuth()

  const handleAddToCart = (item, selectedQuantity) => {
   addToCart(item,selectedQuantity)

    toast.success('Added to Cart');
    console.log(cart)
  };
  return (
    <div className="mt-8">
      <div className=" flex gap-4 flex-wrap mx-12">
        {items.map((item)=>(
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
           <figure>
             <img
               src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
               alt="Shoes"
             />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{item.name}</h2>
 
             <div className="flex items-center w-[100%]">
               <div className="justify-start">
                 <h3 className="text-xl">&#8377;{item.price}</h3>
               </div>
               <div className="flex w-48 ml-32 gap-4 mr-3">
                 {/* <select className="select select-bordered select-sm w-full max-w-xs" onChange={(e) => {
                    const selectedQuantity = parseInt(e.target.value);
                    console.log(selectedQuantity)
                    handleAddToCart(item, selectedQuantity);
                  }}>
                   <option value="1" selected>1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                 </select> */}
                 
                 </div>
                 <button className=" btn btn-success "  onClick={() => handleAddToCart(item, 1)}>Add to cart</button>
               
             </div>
           </div>
         </div>
        ))}
       
        
      </div>
    </div>
  );
};

export default OrderItem;

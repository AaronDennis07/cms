import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = ({items,handleDelete}) => {
  const navigate = useNavigate()
  return (
    <div className="mt-5">
      <div className=" flex gap-4 flex-wrap mx-12">
        
        {items.map((item)=>(
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>

            <div className="flex items-center w-[100%]">
              <div className="justify-start">
                <h3 className="text-xl">&#8377;{item.price}</h3>
              </div>
              <div className="flex justify-end w-48 ml-32 gap-4">
                <button className=" btn btn-primary " onClick={()=>navigate(`/admin/editItem?id=${item.id}`)} >Update</button>
                <button className=" btn btn-error " onClick={()=>handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashBoard;

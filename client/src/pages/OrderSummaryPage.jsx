import React from "react";
import Summary from "../components/Summary";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OrderSummaryPage = () => {
    const {cart,token} = useAuth()
    const navigate = useNavigate()
    const products = cart.map((item)=>item.id)
    const quantities = cart.map((item)=>item.quantity)
    console.log(products)
    console.log(quantities);
    const handleSubmitOrder = (data,event)=>{
        axios.post("http://localhost:8080/api/v1/orders",{
            userId:token.userId,
            name:data.name,
            quantities,
            total:data.total,
            usn:data.usn,
            roomNo:data.roomNo,
            productsIds:products
        }).then(()=>{
            toast.success("Order placed successfully")
        })
        
        navigate("/")
    }
    return (
        <div>
            <Navbar user="user"/>
        <Summary handleSubmitOrder={handleSubmitOrder}/>
        </div>
    );
};

export default OrderSummaryPage;
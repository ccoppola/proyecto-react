import React,{useContext } from "react";
import CustomerForm from "./CustomerForm/CustomerForm";
import { cartContext } from "../../storage/cartContext";
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom"
import { createBuyOrder } from "../../service/firebase";


function Checkout(){
    const { cart , clearCart} = useContext(cartContext);
    const { totalTicket } = useContext(cartContext);
    const navigate = useNavigate();

    function handleCheckout(buyerData) {
        const orders = {
          buyer: buyerData,
          items: cart,
          total: totalTicket(),
          date: new Date(),
        };
        createBuyOrder(orders)
            .then((id) => {
                Swal("Orden realizada con éxito", "ID de su Orden " + id, "success")
                .then(()=>{
                    clearCart();
                    navigate("/");
                })
            })     
      }
    

      console.log(createBuyOrder)
    return(
        <>
            <CustomerForm
            onCheckout ={handleCheckout}
            />
        </>
    )
}

export default Checkout;
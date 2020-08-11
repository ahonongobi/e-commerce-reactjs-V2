import React from 'react';

// import { Container } from './styles';

export default function EmptyCart() {
  return (
    <div style={{marginBottom:  '30%'}} className="container mt-5 mb-10">
        <div className="row">
           <div className="col-10 mx-auto text-center text-title">
               <h1>your cart is currently empty</h1>
           </div>
        </div>
    </div>
  );
}

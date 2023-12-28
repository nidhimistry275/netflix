import React, { useState, useEffect } from "react";
import "./PlanScreen.css";
import db from "../firebase";

function PlanScreen() {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     db.collection("products")
  //       .where("active", "==", true)
  //       .get()
  //       .then((querySnapshot) => {
  //         const products = {};
  //         querySnapshot.forEach(async (productDoc) => {
  //           products[productDoc.id] = productDoc.data();
  //           const priceSnap = await productDoc.ref.collection("prices").get();
  //           priceSnap.docs.forEach(doc =>{
  //             products[productDoc.id].prices = {
  //                 priceId: doc.id,
  //                 priceData: priceSnap.data(),
  //             }
  //           })
  //         });
  //         setProducts(products);
  //       });
  //   }, []);
  // console.log(Products)
  return (
    <div className="planScreen">
      <div className="planScreen_plan">
        <div className="planScreen_info">
          <h5>Name</h5>
          <h6>Description</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlanScreen;

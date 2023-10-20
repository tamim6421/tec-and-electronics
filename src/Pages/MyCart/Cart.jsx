import { useState } from "react";
import Swal from "sweetalert2";

const Cart = ({ product }) => {
    const{_id, name, bName, price, reating, photo,description} = product
  console.log(product);

  const [cartProduct, setCartProduct] = useState(product)

  const handleDelete =(id) =>{
        console.log('delete', id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(`https://tec-and-electronics-server.vercel.app/carts/${id}`,{
                   method:"DELETE"
               })
    
               .then(res => res.json())
               .then(data =>{
                   console.log(data)
                   if(data.deletedCount > 0){
                     Swal.fire(
                       'Deleted!',
                       'Your file has been deleted.',
                       'success'
                     )
                   
                   const remaining = cartProduct.filter(use => use._id !== id)
                   setCartProduct(remaining)
                   console.log(remaining)
                   }
                  
               })
          }
        })
    
  }


  return (
    <div>
      <div className="card h-[600px] bg-base-100 shadow-xl p-1">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl w-[320px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{bName}</h2>
          <p>{description}</p>
          <p>Price : {price} </p>
          <div className="card-actions">
            <button onClick={() =>handleDelete(_id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

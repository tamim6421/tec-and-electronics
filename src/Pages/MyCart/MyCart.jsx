import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";
import { useState } from "react";


const MyCart = () => {
    const allProducts = useLoaderData()
    const [products, setProducts] = useState(allProducts)

    console.log(products)

    const handleDelete = (id) =>{
          
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
    
            fetch(`http://localhost:5000/carts/${id}`,{
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
                   
                   const remaining = products.filter(use => use._id !== id)
                   setProducts(remaining)
                   }
                  
               })
          }
        })

    }

    return (
        <div>
            <Navbar></Navbar>

            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-1">
                {
                    products.map( product =>  <div key={product._id}>
                        <div className="card h-[600px] bg-base-100 shadow-xl p-1">
                          <figure className="px-10 pt-10">
                            <img
                              src={product.photo}
                              alt="Shoes"
                              className="rounded-xl w-[320px]"
                            />
                          </figure>
                          <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <h2 className="card-title">{product.bName}</h2>
                            <p>{product.description}</p>
                            <p>Price : {product.price} </p>
                            <div className="card-actions">
                              <button onClick={()=>handleDelete(product._id)} className="btn btn-primary">Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;
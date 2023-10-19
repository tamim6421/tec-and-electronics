const Cart = ({ product }) => {
    const{_id, name, bName, price, reating, photo,description} = product
  console.log(product);

  const handleDelete =(id) =>{
        console.log('delete', id)
        
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

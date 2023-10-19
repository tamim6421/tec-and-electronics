import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const{_id, name, bName, price, reating, photo} = product
    // console.log(product)
    return (
        <div>
            <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border p-2">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={photo}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {bName}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        ${price}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      {name}
      <div className="badge ml-2 badge-secondary">NEW</div>
    </p>

    <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>



  </div>
  <div className="p-6 pt-0">
  <Link to={`/update/${_id}`} > <button className="btn"> Update</button></Link>
   <Link to={`/details/${_id}`}><button className="btn"> details</button></Link>
  </div>
</div>
            </div>
        </div>
    );
};

export default ProductCard;
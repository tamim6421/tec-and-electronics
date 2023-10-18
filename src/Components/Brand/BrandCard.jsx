const BrandCard = ({ item }) => {
  const { brand_name, brand_image, id } = item;
  console.log(item);
  return (
    <div>
      <div className="card h-[300px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={brand_image}
            alt="Shoes"
            className="rounded-xl w-36"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand_name}</h2>
         
          <div className="card-actions">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

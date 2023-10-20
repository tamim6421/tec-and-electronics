import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex h-[40vh] text-xl my-36 justify-center content-center ">
            <div className="text-center" id="error-page">
      <h1>Oops!</h1>
      <div>
      <div className="card w-80">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/B4pL1Mh/images.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
   
    <div className="card-actions ">
     <Link to='/'> <button className="btn btn-warning">go to home</button></Link>
    </div>
  </div>
</div>
      </div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
        </div>
    );
};

export default ErrorPage;
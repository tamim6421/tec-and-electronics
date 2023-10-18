
import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const SocialLogin = () => {

    const{ googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSocialLogin = (social) =>{
        social()
        .then( res =>{
            // eslint-disable-next-line no-unused-vars
            const user = res.user
            toast.success('Login Successful')
            navigate('/')

        })
        .catch( error =>{
            toast.error(error.message)
        })

    }

    return (
        <div>
               <div>
             <h1 className="text-center font-semibold text-rose-300 divider">Login With</h1>
               <div className=" justify-around">
               <button onClick={()=>handleSocialLogin(googleLogin) } className="btn btn-outline w-full text-white hover:bg-[#6e6e6edd]  ">
         <FaGoogle  className="text-2xl text-blue-600 "></FaGoogle>
         LOgin With Google
        </button>
        <button className="btn btn-outline w-full mt-2 text-white hover:bg-[#6e6e6edd]  ">
         <FaGithub className="text-2xl text-black"></FaGithub>
         LOgin With GitHub
        </button>
               </div>
        </div>
        </div>
    );
};

export default SocialLogin;
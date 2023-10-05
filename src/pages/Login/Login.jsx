import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {

    const {SignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('Location in the login page',location);


    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email =form.get('email')
        const password =form.get('password')
        console.log(email, password);

        //Validation
        if(password.length < 6){
            alert('password choto')
        }

        SignIn(email, password)
        .then((result) => {
            console.log(result.user);

        //Navigate after login
         navigate(location?.state ? location.state : '/')


          })
          
          .catch((error) => {
          console.log(error.message);
          });
        



    }



    return (
        <div>
                <Navbar ></Navbar>
                <div className="bg-base-200 min-h-screen">
                    <h2 className="text-3xl text-center py-5">Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto bg-white rounded">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                        <p className="text-sm text-center mt-4"> Don`t have an account <Link to="/register" className="text-blue-800 font-bold">Register</Link></p>
                    </form>

                
                </div>
                
        </div>
    );
};

export default Login;
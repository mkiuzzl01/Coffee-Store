import { useContext } from "react";
import { Link, json } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
  const {logIn} = useContext(AuthContext); 
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email,password)
        .then(result=>{
          const lastSign = result.user?.metadata?.lastSignInTime;
          const newInfo = {email,lastSign};

          fetch('http://localhost:5000/users',{
            method:'PATCH',
            headers:{
              'content-type':'application/json',
            },
            body:JSON.stringify(newInfo)
          })
          
          .then(res=> res.json())
          .then(data=>{
            if(data.matchedCount>0){
              alert('SignIn Successful');
              form.reset();
            }
          })
          console.log(result)
        })
        .catch(error=>{
          console.log(error);
        })
        

    }
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content w-full flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-lg border-2 border-red-300 bg-[#ECEAE3]">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D2B48C]">Login</button>
                <span>
                  If you have a account? Please{" "}
                  <Link to="/Registration">
                    <span className="font-semibold link">Register</span>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

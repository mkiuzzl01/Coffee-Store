import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
    const {createUser,updateUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email,password)
        .then((result)=>{
          updateUser(name,photo)
          .then(()=>{         
            const Name = result.user?.displayName;
          const Image = result.user?.photoURL;
          const email = result.user?.email;
          const creationAt = result.user?.metadata?.creationTime;
          const userInfo = {email,Name,Image,creationAt}

          fetch('http://localhost:5000/users',{
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(userInfo)
          })
          .then(res=> res.json())
          .then(data=>{
            if(data.acknowledged){
              alert('Registration Successfully')
            }
              form.reset()
          })
          })
          .catch((error)=>{
            console.error(error);
          })
            // console.log(result);
        })
        .catch(error=>{
            console.error(error);
        })
    }
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content w-full flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card w-full max-w-2xl border-2 border-red-300 bg-[#ECEAE3]">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
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
                <button className="btn bg-[#D2B48C]">Register</button>
                <span>
                  If you have a account? Please{" "}
                  <Link to="/LogIn">
                    <span className="font-semibold link">LogIn</span>
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

export default Registration;

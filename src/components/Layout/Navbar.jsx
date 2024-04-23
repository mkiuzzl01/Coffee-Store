import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
const {user,logOut} = useContext(AuthContext);
const handleLogOut=()=>{
    logOut()
    .then(()=>{
        alert('LogOut Successful');
    })
}
  const navLink = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Add_Coffee">Add Coffee</NavLink>
      <NavLink to="/Users">Users</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar rounded-b-lg bg-[#D2B48C]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link className=" font-semibold lg:text-3xl" to='/'>Coffee-Store</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">{navLink}</ul>
        </div>
        <div className="navbar-end">
            <span className="space-x-2">
                {
                    user?.email? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn">LogOut</button>
                    </>
                     :
                     <Link to='/LogIn'><button className="btn">LogIn</button></Link>
                }
            </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

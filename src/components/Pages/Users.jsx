import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers)

  const handleDelete = _id =>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE',
         })
         .then(res=> res.json())
         .then(data=>{
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                 });
            const remaining = users.filter(cof=> cof._id !== _id);
            setUsers(remaining);
            }
         })
        }
      });

  }
  return (
    <div>
      <h1 className="text-center text-2xl">Total Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Photo URL</th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>LastLog At Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{user.Name}</td>
                <td>{user.Image}</td>
                <td>{user.email}</td>
                <td>{user.creationAt}</td>
                <td>{user.lastLogAt}</td>
                <td>
                    <button onClick={()=> handleDelete(user._id)} className="btn btn-error">x</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

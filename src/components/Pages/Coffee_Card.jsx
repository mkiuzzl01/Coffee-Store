import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee_Card = ({coffee,coffees,setCoffees}) => {
  const {_id ,photo, price, quantity, name } = coffee;

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
         fetch(`http://localhost:5000/coffee/${_id}`,{
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
            const remaining = coffees.filter(cof=> cof._id !== _id);
            setCoffees(remaining);
            }
         })
        }
      });
  }
  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] border-2 p-4">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="flex justify-between items-center w-full">
          <div>
            <h2><span className="font-semibold">Name:</span> {name}</h2>
            <p><span className="font-semibold">Price:</span> {price}</p>
            <p><span className="font-semibold">Available Quantity:</span> {quantity}</p>
          </div>
          <div>
            <div className="join join-vertical space-y-4">
              <button className="btn join-item bg-[#D2B48C] text-white">View</button>
              <Link to={`/Update/${_id}`}><button className="btn join-item bg-[#3C393B] text-white">Edit</button></Link>
              <button onClick={()=>handleDelete(_id)} className="btn join-item bg-[#EA4744] text-white">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee_Card;

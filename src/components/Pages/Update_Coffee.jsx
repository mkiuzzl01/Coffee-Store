import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update_Coffee = () => {
    const coffee = useLoaderData();
    const {_id,name,supplier,quantity,test,category,details,photo,price} = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const supplier = form.Supplier.value;
        const quantity = form.Quantity.value;
        const test = form.Test.value;
        const category = form.Category.value;
        const details = form.Details.value;
        const photo = form.Photo.value;
        const price = form.Price.value;
        const coffeeInfo = {name,supplier,quantity,test,category,details,photo,price}
        console.log(coffeeInfo);
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(coffeeInfo)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            form.reset();
        })
    }
    return (
        <div className="max-w-4xl m-auto bg-[#F4F3F0] p-6">
        <div>
          <div className="space-y-4 mb-4">
          <h1 className="text-4xl text-center">Update Coffee</h1>
          </div>
          <form onSubmit={handleUpdateCoffee} className="form-control p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="form-control">
                <label htmlFor="name">
                  <span>Coffee Name:</span>
                </label>
                  <input
                  name="name"
                    defaultValue={name}
                    type="text"
                    placeholder="Coffee Name"
                    id="name"
                    className="input input-bordered w-full"
                  />
              </div>
              <div className="form-control">
                <label htmlFor="Supplier">
                  <span>Supplier:</span>
                </label>
                  <input
                  defaultValue={supplier}
                  name="Supplier"
                    type="text"
                    placeholder="Supplier"
                    id="Supplier"
                    className="input input-bordered w-full"
                  />
              </div>
              <div className="form-control">
                <label htmlFor="Quantity">
                  <span>Available Quantity:</span>
                </label>
                  <input
                  defaultValue={quantity}
                  name="Quantity"
                    type="text"
                    placeholder="Available Quantity"
                    id="Quantity"
                    className="input input-bordered w-full"
                  />
              </div>
              <div className="form-control">
                <label htmlFor="Test">
                  <span>Test:</span>
                </label>
                  <input
                  defaultValue={test}
                  name="Test"
                    type="text"
                    placeholder="Test"
                    id="Test"
                    className="input input-bordered w-full"
                  />
              </div>
              <div className="form-control">
                <label htmlFor="Category">
                  <span>Category:</span>
                </label>
                  <input
                  defaultValue={category}
                  name="Category"
                    type="text"
                    placeholder="Category"
                    id="Category"
                    className="input input-bordered w-full"
                  />
              </div>
              <div className="form-control">
                <label htmlFor="Details">
                  <span>Details:</span>
                </label>
                  <input
                  defaultValue={details}
                  name="Details"
                    type="text"
                    placeholder="Details"
                    id="Details"
                    className="input input-bordered w-full"
                  />
              </div>
              <div className="form-control">
                <label htmlFor="Photo">
                  <span>Photo:</span>
                </label>
                  <input
                  defaultValue={photo}
                  name="Photo"
                    type="text"
                    placeholder="Photo"
                    id="Photo"
                    className="input input-bordered w-full"
                  />
              </div>
              <div className="form-control">
                <label htmlFor="Price">
                  <span>Price:</span>
                </label>
                  <input
                  defaultValue={price}
                  name="Price"
                    type="text"
                    placeholder="Price"
                    id="Price"
                    className="input input-bordered w-full"
                  />
              </div>
              <div className="lg:col-span-2">
                  <input type="submit" className="btn bg-[#D2B48C] w-full" value="Update" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Update_Coffee;
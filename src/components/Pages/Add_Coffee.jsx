import Swal from 'sweetalert2'

const Add_Coffee = () => {

    const handleAddCoffee = event =>{
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
        // console.log(coffeeInfo);

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(coffeeInfo)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Data Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
            form.reset();
            console.log(data);
        })
    }
  return (
    <div className="max-w-4xl m-auto bg-[#F4F3F0] p-6">
      <div>
        <div className="space-y-4 mb-4">
        <h1 className="text-4xl text-center">Add Coffee</h1>
        <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
        <form onSubmit={handleAddCoffee} className="form-control p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="form-control">
              <label htmlFor="name">
                <span>Coffee Name:</span>
              </label>
                <input
                name="name"
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
                name="Price"
                  type="text"
                  placeholder="Price"
                  id="Price"
                  className="input input-bordered w-full"
                />
            </div>
            <div className="lg:col-span-2">
                <input type="submit" className="btn bg-[#D2B48C] w-full" value="Add Coffee" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Coffee;

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    
    const handleUpdateCoffee= (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo};
        console.log(updatedCoffee);
        fetch(`http://localhost:5000/coffees/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee updated Successfully',
              icon: 'Success',
              confirmButtonText: 'Ok'
            })
          }
        })
      }
      
    
      return (
        <div className="bg-lime-100 p-24">
          <h1 className="text-3xl font-extrabold text-center mb-5">Update Coffee : {name}</h1>
          <form onSubmit={handleUpdateCoffee}>
            {/* from name and quantity row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Coffee Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Coffee Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold">Available Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="quantity"
                    defaultValue={quantity}
                    placeholder="Available Quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* from supplier row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Supplier Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Supplier Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    placeholder="Taste"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* from category and details row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Category"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text font-bold">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="Details"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* from photo url row */}
            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input type="submit" className="btn btn-block" value="UPDATE COFFEE" />
          </form>
        </div>
      );
};

export default UpdateCoffee;
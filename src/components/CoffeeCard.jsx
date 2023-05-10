import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your Coffee item has been deleted.',
                  'success'
                )
                const remaining = coffees.filter(cof=> cof._id !== id)
                setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-lime-200 p-12 shadow-lg">
      <figure>
        <img src={photo} alt="Photo" />
      </figure>
      <div className="flex w-full justify-between items-center">
        <div className="ml-5">
          <h2 className="card-title">Name : {name}</h2>
          <h2 className="card-title">Quantity : {quantity}</h2>
          <h2 className="card-title">Supplier : {supplier}</h2>
          <h2 className="card-title">Taste : {taste}</h2>
          <h2 className="card-title">Category : {category}</h2>
          <h5 className="card-title">Details : {details}</h5>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical mr-5 space-y-4">
            <button className="btn bg-purple-600">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-orange-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

function AddCart() {
  return (
    <div class="d-grid gap-2 col-5">
      <button
        type="button"
        class="btn btn-outline-warning btn-lg"
        onClick={() => {}}
      >
        {" "}
        <BsFillCartPlusFill className="BackButton" />
      </button>
    </div>
  );
}

export default AddCart;

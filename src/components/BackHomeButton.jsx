import React from "react";
import { useNavigate } from "react-router-dom";
import { BiHome } from "react-icons/bi";

export default function BackHomeButton() {
  const navigate = useNavigate();

  return (
    <div>
      <div class="d-grid gap-0 col-1 mx-0">
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          <BiHome className="BackHomeButton" />
        </button>
      </div>
    </div>
  );
}

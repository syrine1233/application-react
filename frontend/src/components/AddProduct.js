import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ onImageChange }) => {
 

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form >
        <div className="field">
            <label className="label">Product Name</label>
            <input
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    
                    />
          </div>
          <div className="field">
            <label className="label"> Price</label>
            <input
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    
                    />
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>        </form>
      </div>
    </div>
  );
};

export default AddProduct;

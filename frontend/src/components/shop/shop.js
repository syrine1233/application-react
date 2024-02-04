// Dans Shop.js
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Shop() {
  const [img, setImg] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [allImage, setAllImage] = useState([]);
  
  const imagebase64 = (file)=>{
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};
 const handleUploadImage = async(e)=>{
  const file = e.target.files[0]
  const image = await imagebase64(file)
  setImg(image)
 }

 const fetchimage = async()=>{
  const res = await fetch("http://localhost:3001/")
  const data = await res.json()
  setAllImage(data.data)
  }

 

    // Fonction pour supprimer un produit

    const getAllProduct=()=>{
      fetch("http://localhost:3001/",{
        method: "GET",
      })
      .then((res) => res.json())
      .then((data)=>{
        console.log(data,"productdata");
      })
    }

    const deleteProduct = async (id, title) => {
      const confirmDelete = window.confirm(`Are you sure you want to delete ${title}?`);
    
      if (confirmDelete) {
        try {
          const response = await fetch("http://localhost:3001/deleteProduct", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              productid: id,
            }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            alert(data.data);
            getAllProduct(); // Refresh the product list after successful deletion
          } else {
            alert("Failed to delete product");
          }
        } catch (error) {
          console.error("Error deleting product:", error);
          alert("An error occurred while deleting the product");
        }
      }
    };
    
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (img) {
      const res = await fetch("http://localhost:3001/upload", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ img: img }),
      });

      const data = await res.json();
      console.log(data);
      if (data.success) {
        alert(data.message);
        setImg('');
        fetchimage();
      }
    }
  }

  useEffect(()=>{
    fetchimage()
    getAllProduct()

  },[])
  return (
    <section className="shop_section layout_padding" id='shop'>
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>       
        <div className='imageContainer'>
          <form >
            <label htmlFor='uploadImage'>
              <div className='uploadBox'>
                <input type='file' id="uploadImage" onChange={handleUploadImage}/>
                {img ? (
                 <img src={img} alt="Selected" />
                     ) : (
                      <div>
                        </div>
                      )}
              </div>
            </label>
            <div className="button is-success">
              <button onClick={handleSubmit}>Add New</button>
            </div>
          </form>
        </div>
        
        {/* Afficher l'image sélectionnée */}
        {selectedImage && <img src={selectedImage} alt="Selected" />}
        
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box">
              <a href="">
                <div className="img-box">
                  <img src="app1/images/p1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h6>Ring</h6>
                  <h6>
                    Price
                    <span>200DT</span>
                  </h6>
                </div>
                <div className="new">
                  <span>New</span>
                </div>
              </a>
              <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a>
                  Delete
                </a>
              </footer>
            </div>
            
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="app1/images/p2.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Watch
                </h6>
                <h6>
                  Price
                  <span>
                    300DT
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
            <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a>
                  Delete
                </a>
              </footer>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="app1/images/p3.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Teddy Bear
                </h6>
                <h6>
                  Price
                  <span>
                    110DT
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
            <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a>
                  Delete
                </a>
              </footer>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="app1/images/p4.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Flower Bouquet
                </h6>
                <h6>
                  Price
                  <span>
                    45DT
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
            <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a>
                  Delete
                </a>
              </footer>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="app1/images/p5.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Teddy Bear
                </h6>
                <h6>
                  Price
                  <span>
                    95DT
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
            <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a>
                  Delete
                </a>
              </footer>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="app1/images/p6.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Flower Bouquet
                </h6>
                <h6>
                  Price
                  <span>
                    70DT
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
            <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a>
                  Delete
                </a>
              </footer>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="app1/images/p7.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Watch
                </h6>
                <h6>
                  Price
                  <span>
                    400DT
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
            <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a>
                  Delete
                </a>
              </footer>
          </div>
          
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="app1/images/p8.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Ring
                </h6>
                <h6>
                  Price
                  <span>
                    450DT
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </a>
            <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a>
                  Delete
                </a>
              </footer>
          </div>
         
        </div>
          {allImage.map((e1) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3" key={e1._id}>
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src={e1.image} alt={e1.title} />
                    </div>
                    <div className="detail-box">
                      <h6>{e1.title}</h6>
                      <h6>
                        Price
                        <span>{e1.price}DT</span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>New</span>
                    </div>
                  </a>
                  <footer className="btn-box">
                <Link to='/edit' className="card-footer-item">
                  Edit
                </Link>
                <a onClick={()=>deleteProduct(e1._id,e1.title)}>Delete</a>

              </footer>
                </div>
              </div>
            );
          })}
          </div>
          
      </div>
        <div className="btn-box">
          <a href="">View All Products</a>
        </div> 
    </section>
  );
}

export default Shop;
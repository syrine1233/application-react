// Dans Shop.js
import React, { useState, useEffect } from 'react';

const Shop = () => {
  const[ image,setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const [file, setFile] = useState(null);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onNameChange = (e) => {
    setProductName(e.target.value);
  };

  const onPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

   // ajouter un nouveau produit 

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);

    try {
      const response = await fetch('http://localhost:5000/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // suppression d'un produit 

  const deleteImage = async (imageName) => {
    try {
      const response = await fetch(`http://localhost:5000/delete-image/${imageName}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Image deleted successfully');
        setAllImage((prevImages) => prevImages.filter((image) => image.image !== imageName));
      } else {
        console.error('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  // activation du mode edition 

  const enterEditMode = async (productId) => {
    setEditMode(true);
    setEditProductId(productId);
  
    // Fetch the details of the product being edited
    await fetchProductDetails(productId);
  };

  // recuperation des details d'un produit 

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/update-image/${productId}`);
      
      if (!response.ok) {
        console.error('Error fetching product details:', response.statusText);
        return;
      }
  
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setProductName(data.productName || '');
        setProductPrice(data.productPrice || '');
        setImage(data.image || null);
      } else {
        console.error('Invalid response content type:', contentType);
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  
 // recuperation de toutes les images 
  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/get-image');
      const data = await response.json();
      setAllImage(data.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  // mise a jour d'un produit 

  const updateProduct = async () => {
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);
    if (file) {
      formData.append('image', file); // Include the image file for update if available
    }
  
    try {
      const response = await fetch(`http://localhost:5000/update-image/${editProductId}`, {
        method: 'PUT',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Product updated successfully');
        setEditMode(false);
        fetchImages();
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  
  

  useEffect(() => {
    fetchImages();
      if (editMode) {
        fetchProductDetails(editProductId);
      } else {
        setProductName('');
        setProductPrice('');
        setFile(null);
      }
    }, [editMode, editProductId]);

  return (
    <section className="shop_section layout_padding" id='shop'>
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>
        
        <form className="form-container" onSubmit={submitImage}>
       <input type="file" accept="image/*" className="input-field" onChange={onInputChange} />
       <br></br>
       <br></br>
       <input
        type="text"
       placeholder="Product Name"
       value={productName}
        onChange={onNameChange}
        className="input-field"
        />
       <input
        type="text"
       placeholder="Product Price"
        value={productPrice}
        onChange={onPriceChange}
        className="input-field"
        />
       
       {editMode ? (
       <button type="button" onClick={updateProduct} className="button">
      Update
       </button>
       ) : (
       <button type="submit" className="button">Submit</button>
         )}
        </form>

      

       

        <div className="row">
        {allImage == null
        ? ''
        :allImage.map((data) => (
            <div className="box" >
              <a href="">
                <div className="img-box">
                  <img
                    src={require(`../../images/${data.image}`)}
                    height={270}
                    width={200}
                  />
                </div>
                <div className="detail-box">
                  <h6>{data.productName || 'Product Name Unavailable'}</h6>
                  <h6>
                    Price
                    <span>{data.productPrice ? `$${data.productPrice}` : 'Price Unavailable'}</span>
                  </h6>
                </div>
                <div className="new">
                  <span>New</span>
                </div>
              </a>
              <footer className="btn-box">
                <a className="card-footer-item"  onClick={() => enterEditMode(data._id)}>
                  Edit
                </a>
                <a onClick={() => deleteImage(data.image)} >Delete</a>

              </footer>
            </div>
          ))}
        </div>


        
      </div>
    </section>
  );
}; 

export default Shop;
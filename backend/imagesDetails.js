import mongoose from"mongoose";

const ImageDetailsScehma = new mongoose.Schema(
  {
   image:String,
   productName: String,  
    productPrice: String,
  },
  {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", ImageDetailsScehma);
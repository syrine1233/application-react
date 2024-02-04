import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json({limit : "10mb"}))

const schema = new mongoose.Schema({
  image : String
})


//upload
const ImageModel = mongoose.model("Image",schema)
app.get("/",async(req,res)=>{
  const data = await (await ImageModel.find({})).reverse()
  res.json({message : "All Image", data: data})
})

app.post("/upload",async(req,res)=>{
  console.log(req.body)
  const image = new ImageModel({
    image : req.body.img
  })
  await image.save()

  res.send({message : "Image Upload Sucessfully !" ,sucess:true})
})

//delete

app.post("/deleteProduct",async(req,res)=>{
  const {productid}=req.body;
  try{
    await ImageModel.deleteOne({ _id: productid });
    res.send({ status: "ok", data: "Delete" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", data: "Failed to delete product" });
  }
});



const PORT = process.env.PORT || 3001;



mongoose.connect('mongodb://127.0.0.1:27017/imagebase64')
.then(()=>{
  console.log("connect to DB")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err)=>{
  console.log(err)
})
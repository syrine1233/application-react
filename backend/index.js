import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import './imagesDetails.js'; // Include the file extension

const app = express();
app.use(express.json());
app.use(cors());
// mongodb connection
const mongoUrl = 'mongodb://127.0.0.1:27017/shop';

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this line

  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((e) => console.log(e));

// importing schema
const Images = mongoose.model('ImageDetails');

// configuration de Multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/src/images/');

  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });

//upload

// telecharger image 

app.post('/upload-image', upload.single('image'), async (req, res) => {
  const { productName, productPrice } = req.body;
  console.log(req.body);
  const imageName = req.file.filename;

  try {
    await Images.create({ image: imageName, productName, productPrice });
    res.json({ status: 'ok' });
  } catch (error) {
    res.json({ status: error });
  }
});

// recuperer toutes les images de bd 
app.get('/get-image', async (req, res) => {
  try {
    const data = await Images.find({});
    res.send({ status: 'ok', data: data });
  } catch (error) {
    res.json({ status: error });
  }
});

//delete
app.delete('/delete-image/:imageName', async (req, res) => {
  const imageName = req.params.imageName;

  try {
    // Supprimer l'image de la base de données
    await Images.deleteOne({ image: imageName });
    res.json({ status: 'ok' });
  } catch (error) {
    res.json({ status: error });
  }
});

//update

app.put('/update-image/:productId', upload.single('image'), async (req, res) => {
  const productId = req.params.productId;
  const { productName, productPrice } = req.body;
  let imageName;

  if (req.file) {
    imageName = req.file.filename;
  }

  try {
    const updatedImageDetails = await Images.findByIdAndUpdate(
      productId,
      { image: imageName, productName, productPrice },
      { new: true }
    );

    if (!updatedImageDetails) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ status: 'ok', data: updatedImageDetails });
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(5000, () => {
  console.log('Server Started');
});

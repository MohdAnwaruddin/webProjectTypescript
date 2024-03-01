import express from "express"
import cors from "cors";
import bodyParser from "body-parser"
import productRoutes from "./routes/productRoutes.js"
import   connect   from "./mongoose.js";
import helmet from 'helmet';
// import userRoutes from "./routes/userRoutes.js"
import cartRoutes from "./routes/cartRoutes.js" 

const app = express();
app.use(
    cors(
        {
            origin: '*' ,
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept',
        }
    )
    );

app.use(helmet
        ({
        referrerPolicy: { policy: 'no-referrer-when-downgrade' }
      })
      );
      
app.use(bodyParser.json());

    connect().then(() => {

    console.log("Connected to MongoDB");
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });


app.use('/products', productRoutes);
// app.use('/user' , userRoutes)
app.use('/cart', cartRoutes)

app.listen(3001, () => { console.log('Server started.') });



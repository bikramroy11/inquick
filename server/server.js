import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app=express();

//connect the backend server with MongoDb
await connectDB();

//middlewares
app.use(cors()); //Allows requests from different origins (frontend ↔ backend).
app.use(express.json()); //Parses incoming JSON request bodies into req.body.

// home route
app.get('/', (req, res)=>{
    res.send(`home route, API working well`);
})

//login route
app.use('/api/admin', adminRouter);

//add blog & image store in imageKit, list all blogs, individual blog, individual blog, toggle blog
app.use('/api/blog', blogRouter);


const PORT= process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App listen port ${PORT}`);
})

export default app;
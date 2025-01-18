const express =  require ('express');
const dotenv = require ('dotenv');
const mongoose = require ('mongoose');
const cors = require ('cors');
const eventRouter = require ('./routes/eventRoutes');

dotenv.config();
const app=express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/events', eventRouter);

app.listen(port,()=>console.log(`server is running on port ${port}`));
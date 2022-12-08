import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import goodRoutes from './routes/good.js';
import outgoingRoutes from './routes/outgoing.js';
import incomingRoutes from './routes/incoming.js';
import invoiceRoutes from './routes/invoice.js';
import supplierRoutes from './routes/supplier.js';
import totalRoutes from './routes/total.js';
import userRoutes from './routes/user.js';
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/user',userRoutes)
app.use('/good', goodRoutes);
app.use('/invoice', invoiceRoutes);
app.use('/incoming', incomingRoutes);
app.use('/outgoing', outgoingRoutes);
app.use('/supplier', supplierRoutes);
app.use('/total', totalRoutes);

app.get('/',(req,res) => {res.send('Pos Web App API');});

const PORT = process.env.PORT|| 8000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

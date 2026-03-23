import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './db/index.js';
import apiRoutes from './routes/api.js';
import Lead from './models/Lead.js';
import Subscriber from './models/Subscriber.js';

/* Fix for __dirname in ES modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env using absolute path
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "https://zurinty.com",
    "https://www.zurinty.com",
    "https://api.zurinty.com",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

/* FORCE HTTPS & REDIRECT OLD URLS */
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

/* API ROUTES */
app.use('/api', apiRoutes);

/* SERVE REACT BUILD */
app.use(express.static(path.join(__dirname, "public")));

app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* DATABASE CONNECTION */
sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL successfully.');
    // 'alter: true' will create tables if they don't exist and update them if they changed
    return sequelize.sync({ alter: true });
  })
  .then(() => console.log('Database synchronized (leads, subscribers tables created)'))
  .catch((err) => {
    console.error('MySQL Error Detail:', err.message);
    if (err.name === 'SequelizeConnectionError') {
      console.error('CRITICAL: Check your .env credentials in the nodejs/ folder.');
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

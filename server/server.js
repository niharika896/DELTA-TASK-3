import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
import authrouter from './routes/AuthRoute.js'
import posterRouter from './routes/PosterRoute.js'
import MovieRouter from "./routes/MoviesRoute.js";
import EventsRouter from "./routes/EventsRoute.js";
import SeatsRouter from "./routes/SeatSelectionRoute.js";
import SaveInfoRouter from "./routes/SaveBookingInfo.js";
import PFPRoute from "./routes/PFPRoutes.js"
import pdfRoute from "./routes/pdfRoute.js";
import updateRouter from "./routes/updateRoute.js";
import bookingsRouter from "./routes/pastBookings.js";
import cancelRouter from "./routes/cancelBooking.js"
import vendorRouter from "./routes/AdminRoutes/vendor.js";
import vendorUpdateRouter from "./routes/VendorRoutes/updateVendor.js"
import vendorStatusUpdateRouter from "./routes/AdminRoutes/updateVendorStatus.js"
import auditVendorRoute from "./routes/AdminRoutes/auditVendor.js"
import createEvent from "./routes/VendorRoutes/createEvent.js"
import editEventRouter from "./routes/AdminRoutes/editEvent.js"
import usernameRouter from "./routes/usernameLogin.js"
import adminHpRouter from "./routes/AdminRoutes/homePageRoutes.js"
import eventRecomRouter from "./routes/eventRecom.js"
import {server } from "./routes/webSocketServer.js"
import newUserRouter from "./routes/newUser.js"
import "./models/dbConnectionProfiles.js"
import "./models/dbConnectionPosters.js"
import "./models/dbSeatsConnection.js"
import "./routes/MoviesRoute.js"
dotenv.config();
const app = express();
const port = 4000;
const stripe = new Stripe(process.env.SECRET);
app.use(cors());
app.use(express.json())

server.listen(3000,()=>{
  console.log(`HTTP + WebSocket server running on port 3000`);
})

app.use('/auth',authrouter);     
app.use('/',posterRouter);
app.use('/username-login',usernameRouter);
app.use('/new-user',newUserRouter);
app.use('/generatepdf',pdfRoute);     
app.use('/pastbookings',bookingsRouter);     
app.use('/cancelbooking',cancelRouter);     
app.use('/movies',MovieRouter);
app.use('/events',EventsRouter);
app.use('/movies/seatselection',SeatsRouter);
app.use('/events/seatselection',SeatsRouter);
app.use('/success',SaveInfoRouter);
app.use('/profile/uploadphoto',PFPRoute)
app.use('/profile/updatedata',updateRouter)
app.use('/uploads',express.static('uploads'))
app.use('/posters',express.static('posters'))
app.use('/admin/vendors',vendorRouter)
app.use('/admin-hp',adminHpRouter)
app.use('/admin/vendors/approval',vendorStatusUpdateRouter) 
app.use('/admin/vendors/audit',auditVendorRoute) 
app.use('/admin/edit-event',editEventRouter) 
app.use('/vendor/profile/updatedata',vendorUpdateRouter) 
app.use('/vendor/create-event',createEvent); 
app.use('/vendor/info',vendorRouter);
app.use('/get-recom',eventRecomRouter);


app.get("/",(req,res)=>{
  res.send("Hello World");
})


app.post('/payment', async (req, res) => {
  const {selectedSeats,email,wallet} = req.body;
  try {
    const product = await stripe.products.create({ name: "Ticket" });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: (selectedSeats.length * 299 - wallet) * 100, // ₹290 in paise
      currency: "inr"
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/failure",
      customer_email: `${email}`
    });

    res.json({ session });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

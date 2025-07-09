import { useSelector } from "react-redux";
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./User/HomePage.jsx";
import Movies from "./User/Movies.jsx";
import SeatSelection from "./User/SeatSelection.jsx";
import ConfirmBooking from "./User/ConfirmBooking.jsx";
import UserDetails from "./User/UserDetails.jsx";
import Success from "./User/Success.jsx";
import Failure from "./User/Failure.jsx";
import Audit from "./Admin/Audit.jsx";
import PastBookings from "./User/PastBookings.jsx";
import GoogleAuthWrapper from "./components/GoogleLogin.jsx";
import Events from "./User/Events.jsx";
import AdminHP from "./Admin/AdminHP.jsx";
import Vendors from "./Admin/Vendors.jsx";
import VendorDetails from "./Vendor/VendorDetails.jsx";
import WaitPage from "./Vendor/WaitPage.jsx";
import DeclinedPage from "./Vendor/DeclinedPage.jsx";
import VendorHomePage from "./Vendor/HomePage.jsx";
import CreateEvent from "./Vendor/CreateEvent.jsx";
import EditEvent from "./Admin/EditEvent.jsx"
import UsernameLogin from "./components/UsernameLogin.jsx";
import UserNameNewUser from "./User/UserDetailsUsername.jsx"
export default function TypeRouter() {
  const type = useSelector((state) => state.Type?.value);

  let routes;

  if (type === "admin") {
    routes = createRoutesFromElements(
      <>
        <Route path="/" element={<AdminHP />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/profile" element={<UserDetails />} />
        <Route path="/auth/userdetails" element={<UserDetails />} />
        <Route path="/vendors/audit/:id" element={<Audit />} />
        <Route path="/edit/:id/:name/:date/:city/:location/:time/:type" element={<EditEvent />} />
      </>
    );
  } else if (type === "vendor") {
    routes = createRoutesFromElements(
      <>
        <Route path="/" element={<VendorHomePage />} />
        <Route path="/auth/vendordetails/:method" element={<VendorDetails />} />
        <Route path="/login/:type" element={<GoogleAuthWrapper />} />
        <Route path="/waitpage" element={<WaitPage />} />
        <Route path="/declinedpage" element={<DeclinedPage />} />
        <Route path="/create-event" element={<CreateEvent />} />

      </>
    );
  } else {
    routes = createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/profile" element={<UserDetails />} />
        <Route path="/auth/userdetails/" element={<UserDetails />} />
        <Route path="/auth/new-user" element={<UserNameNewUser/>} />
        <Route path="/login/:type" element={<GoogleAuthWrapper />} />
        <Route path="/username-login/:type" element={<UsernameLogin />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/waitpage" element={<WaitPage />} />
        <Route path="/declinedpage" element={<DeclinedPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/movies/seatselection" element={<SeatSelection />} />
        <Route path="/events/seatselection" element={<SeatSelection />} />
        <Route path="/pastbookings" element={<PastBookings />} />
        <Route path="/auth/vendordetails/:method" element={<VendorDetails />} />
        <Route path="/movies/seatselection/confirmation" element={<ConfirmBooking />}/>
      </>
    );
  }

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

<p align="center">
</p>
<p align="center"><h1 align="center">Take Me Anywhere</h1></p>
<p align="center">
	<em><code>❯ Real-Time Ticket Booking App</code></em>
</p>
<br/>

##  Table of Contents

- [ Overview](#overview)
- [ Features](#features)
- [ Project Structure](#project-structure)
  - [ Project Index](#project-index)
- [ Getting Started](#getting-started)
  - [ Prerequisites](#prerequisites)
  - [ Installation](#installation)
  - [ Usage](#usage)
---

##  Overview

❯ 🎬 Ticket Booking App – Overview
The Ticket Booking App is a full-stack, real-time movie and event ticketing platform built using the MERN stack (MongoDB, Express.js, React, Node.js). It offers a seamless and dynamic user experience for browsing shows, selecting seats, booking tickets, and managing user profiles.
This application supports real-time seat availability updates using WebSockets, secure authentication with JWT and Google OAuth, and profile photo uploads with Multer. It also leverages Redux for efficient state management across the React frontend.

---

## Features

### 🔒 User Authentication
- Sign up / Login using Email & Password  
- Google OAuth integration  
- JWT-based protected routes  

### 🎥 Movie Browsing & Booking
- View currently running and upcoming movies  
- Dynamic movie details, showtimes, and seat layouts  
- Real-time seat locking using WebSockets to prevent double booking  

### 🎟️ Real-Time Seat Selection
- Live seat status updates across all users  
- Visual feedback for selected, booked, and available seats  

### 👤 User Profile Management
- Upload profile picture using Multer  
- View booking history  

### 📦 Role Based Login and DashBoards
- Add/edit movies and showtimes  
- Monitor live bookings and user stats  


---

##  Project Structure

```sh
└── DELTA-TASK-3.git/
    ├── client
    │   ├── .gitignore
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   ├── src
    │   └── vite.config.js
    └── server
        ├── models
        ├── package-lock.json
        ├── package.json
        ├── posters
        ├── routes
        ├── server.js
        ├── uploads
        └── utils
```


###  Project Index
<details open>
	<summary><b><code>DELTA-TASK-3.GIT/</code></b></summary>
	<details>
		<summary><b>client</b></summary>
		<blockquote>
			<table>
				<tr>
					<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/package-lock.json'>package-lock.json</a></b></td>
					<td><code>❯ Auto-generated lockfile for managing installed NPM dependencies</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/vite.config.js'>vite.config.js</a></b></td>
					<td><code>❯ Vite configuration for frontend bundling</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/package.json'>package.json</a></b></td>
					<td><code>❯ Declares client-side dependencies and scripts</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/index.html'>index.html</a></b></td>
					<td><code>❯ HTML entry point rendered by React</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/eslint.config.js'>eslint.config.js</a></b></td>
					<td><code>❯ ESLint configuration for code linting</code></td>
				</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/api.js'>api.js</a></b></td>
							<td><code>❯ Axios instance for API requests</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/main.jsx'>main.jsx</a></b></td>
							<td><code>❯ Root React render file</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/TypeRouter.jsx'>TypeRouter.jsx</a></b></td>
							<td><code>❯ Component-based router for user/vendor roles</code></td>
						</tr>
					</table>
					<details>
						<summary><b>features</b></summary>
						<blockquote>
							<table>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/vendorId.js'>vendorId.js</a></b></td>
									<td><code>❯ Redux slice for vendor ID state</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/Image.js'>Image.js</a></b></td>
									<td><code>❯ Redux slice for managing profile image upload state</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/Email.js'>Email.js</a></b></td>
									<td><code>❯ Redux slice for storing user email</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/NavigateTo.js'>NavigateTo.js</a></b></td>
									<td><code>❯ Utility function or hook to navigate between pages</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/City.js'>City.js</a></b></td>
									<td><code>❯ Redux slice for managing selected city state</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/Wallet.js'>Wallet.js</a></b></td>
									<td><code>❯ Redux slice for tracking wallet balance or transactions</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/isCityChosen.js'>isCityChosen.js</a></b></td>
									<td><code>❯ Redux state to check if a city has been selected</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/isLoggedIn.js'>isLoggedIn.js</a></b></td>
									<td><code>❯ Redux state to manage user login status</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/Name.js'>Name.js</a></b></td>
									<td><code>❯ Redux slice for storing user display name</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/features/ProfileType.js'>ProfileType.js</a></b></td>
									<td><code>❯ Redux slice for differentiating between user and vendor</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Admin</b></summary>
						<blockquote>
							<table>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Admin/AdminHP.jsx'>AdminHP.jsx</a></b></td>
									<td><code>❯ Admin home page with dashboard and navigation</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Admin/Audit.jsx'>Audit.jsx</a></b></td>
									<td><code>❯ View and manage system audit logs and activity</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Admin/EditEvent.jsx'>EditEvent.jsx</a></b></td>
									<td><code>❯ Interface for editing movie/event details</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Admin/Vendors.jsx'>Vendors.jsx</a></b></td>
									<td><code>❯ Manage and verify event/movie vendors</code></td>
								</tr>
							</table>
							<details>
								<summary><b>components</b></summary>
								<blockquote>
									<table>
										<tr>
											<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Admin/components/NavbarA.jsx'>NavbarA.jsx</a></b></td>
											<td><code>❯ Navigation bar for admin dashboard</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/Carousel.jsx'>Carousel.jsx</a></b></td>
									<td><code>❯ Sliding banner for highlighting featured movies/events</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/Navbar.jsx'>Navbar.jsx</a></b></td>
									<td><code>❯ Top navigation bar for user access and routing</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/GoogleLogin.jsx'>GoogleLogin.jsx</a></b></td>
									<td><code>❯ Google OAuth login component</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/Chatbot.jsx'>Chatbot.jsx</a></b></td>
									<td><code>❯ Interactive chatbot interface for user queries</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/SideBar.jsx'>SideBar.jsx</a></b></td>
									<td><code>❯ Sidebar navigation for additional options/menus</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/EventsPosters.jsx'>EventsPosters.jsx</a></b></td>
									<td><code>❯ Component to display event posters</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/Chatbot.css'>Chatbot.css</a></b></td>
									<td><code>❯ Styling for chatbot interface</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/UsernameLogin.jsx'>UsernameLogin.jsx</a></b></td>
									<td><code>❯ Username/password login form</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/carousel.css'>carousel.css</a></b></td>
									<td><code>❯ Stylesheet for Carousel component</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/components/MoviesPosters.jsx'>MoviesPosters.jsx</a></b></td>
									<td><code>❯ Component to display currently running movie posters</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>redux</b></summary>
						<blockquote>
							<table>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/redux/store-persist.js'>store-persist.js</a></b></td>
									<td><code>❯ Redux store configuration with persistence using localStorage</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Vendor</b></summary>
						<blockquote>
							<table>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Vendor/HomePage.jsx'>HomePage.jsx</a></b></td>
									<td><code>❯ Vendor dashboard displaying all key event info</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Vendor/CreateEvent.jsx'>CreateEvent.jsx</a></b></td>
									<td><code>❯ Interface for vendors to create and submit new events</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Vendor/VendorDetails.jsx'>VendorDetails.jsx</a></b></td>
									<td><code>❯ Displays the vendor's profile and registered info</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Vendor/WaitPage.jsx'>WaitPage.jsx</a></b></td>
									<td><code>❯ Shown while vendor approval is pending</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Vendor/DeclinedPage.jsx'>DeclinedPage.jsx</a></b></td>
									<td><code>❯ Shown when vendor request is declined</code></td>
								</tr>
							</table>
							<details>
								<summary><b>components</b></summary>
								<blockquote>
									<table>
										<tr>
											<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/Vendor/components/Navbar.jsx'>Navbar.jsx</a></b></td>
											<td><code>❯ Top navigation bar specific to vendor pages</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>User</b></summary>
						<blockquote>
							<table>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/UserRouter.jsx'>UserRouter.jsx</a></b></td>
									<td><code>❯ Routing configuration for user-side pages</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/index.css'>index.css</a></b></td>
									<td><code>❯ Global styles for user module</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/HomePage.css'>HomePage.css</a></b></td>
									<td><code>❯ Styling for user homepage layout</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/Success.jsx'>Success.jsx</a></b></td>
									<td><code>❯ Booking/payment success confirmation screen</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/Failure.jsx'>Failure.jsx</a></b></td>
									<td><code>❯ Error screen for failed bookings or payments</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/HomePage.jsx'>HomePage.jsx</a></b></td>
									<td><code>❯ Main landing page for users with movie/event highlights</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/Movies.jsx'>Movies.jsx</a></b></td>
									<td><code>❯ Displays available movies for booking</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/SeatSelection.jsx'>SeatSelection.jsx</a></b></td>
									<td><code>❯ Interactive UI for selecting movie seats</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/PastBookings.jsx'>PastBookings.jsx</a></b></td>
									<td><code>❯ Lists user's previously booked events/movies</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/Events.jsx'>Events.jsx</a></b></td>
									<td><code>❯ Displays available public events to users</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/UserDetails.jsx'>UserDetails.jsx</a></b></td>
									<td><code>❯ Displays and allows update of user details</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/ConfirmBooking.jsx'>ConfirmBooking.jsx</a></b></td>
									<td><code>❯ Final confirmation step before placing booking</code></td>
								</tr>
								<tr>
									<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/src/User/UserDetailsUsername.jsx'>UserDetailsUsername.jsx</a></b></td>
									<td><code>❯ Component for fetching details using username</code></td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details>
		<summary><b>server</b></summary>
		<blockquote>
			<table>
				<tr>
					<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/package-lock.json'>package-lock.json</a></b></td>
					<td><code>❯ Auto-generated lockfile for backend dependencies</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/package.json'>package.json</a></b></td>
					<td><code>❯ Backend project metadata and dependencies setup</code></td>
				</tr>
				<tr>
					<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/server.js'>server.js</a></b></td>
					<td><code>❯ Express app entrypoint; configures middleware, routes, and database connection</code></td>
				</tr>
			</table>
			<details>
				<summary><b>posters</b></summary>
				<blockquote>
					<table>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/posters/kkc.avif'>kkc.avif</a></b></td>
							<td><code>❯ Static movie poster image for frontend display</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/posters/mpbmv.avif'>mpbmv.avif</a></b></td>
							<td><code>❯ Static event poster image for frontend display</code></td>
						</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>uploads</b></summary>
				<blockquote>
					<table>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/uploads/356e3cc7832b5b7a41e1bb2152263b2b'>356e3cc7832b5b7a41e1bb2152263b2b</a></b></td>
							<td><code>❯ Profile picture or booking-related uploaded file</code></td>
						</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>models</b></summary>
				<blockquote>
					<table>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/UsernameUserModel.js'>UsernameUserModel.js</a></b></td>
							<td><code>❯ Mongoose schema for users registered with username/password</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/MovieposterModel.js'>MovieposterModel.js</a></b></td>
							<td><code>❯ Schema for storing movie poster metadata</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/dbConnectionEventsTimings.js'>dbConnectionEventsTimings.js</a></b></td>
							<td><code>❯ Mongoose model for event timings data</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/dbConnectionPosters.js'>dbConnectionPosters.js</a></b></td>
							<td><code>❯ Mongoose model for poster uploads</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/dbConnectionProfiles.js'>dbConnectionProfiles.js</a></b></td>
							<td><code>❯ Schema for user profile documents</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/VendorModel.js'>VendorModel.js</a></b></td>
							<td><code>❯ Schema for vendor registration and profile data</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/dbSeatsConnection.js'>dbSeatsConnection.js</a></b></td>
							<td><code>❯ Model representing seat availability and selection</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/Usermodel.js'>Usermodel.js</a></b></td>
							<td><code>❯ Mongoose schema for general user data</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/EventsposterModel.js'>EventsposterModel.js</a></b></td>
							<td><code>❯ Schema for event poster metadata</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/models/dbConnectionMovieTimings.js'>dbConnectionMovieTimings.js</a></b></td>
							<td><code>❯ Mongoose schema for movie showtimes</code></td>
						</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/routes/MoviesRoute.js'>MoviesRoute.js</a></b></td>
							<td><code>❯ API endpoints for movie data retrieval</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/routes/pastBookings.js'>pastBookings.js</a></b></td>
							<td><code>❯ Endpoint to fetch user's previous bookings</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/routes/cancelBooking.js'>cancelBooking.js</a></b></td>
							<td><code>❯ API to cancel existing bookings</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/routes/SaveBookingInfo.js'>SaveBookingInfo.js</a></b></td>
							<td><code>❯ Route to store new booking details</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/routes/updateRoute.js'>updateRoute.js</a></b></td>
							<td><code>❯ Generic update route for various data types</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/routes/chatbot.js'>chatbot.js</a></b></td>
							<td><code>❯ Webhook endpoints for chatbot interactions</code></td>
						</tr>
						<tr>
							<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/server/routes/AuthRoute.js'>AuthRoute.js</a></b></td>
							<td><code>❯ Routes for Authorization</code></td> 
						</tr>
 				</blockquote>
			</details>
								
---
##  Getting Started

###  Prerequisites

Before getting started with DELTA-TASK-3.git, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


###  Installation

Install DELTA-TASK-3.git using one of the following methods:

**Build from source:**

1. Clone the DELTA-TASK-3.git repository:
```sh
❯ git clone https://github.com/niharika896/DELTA-TASK-3.git
```

2. Navigate to the project directory:
```sh
❯ cd TASK3
❯ cd client
❯ cd server
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run DELTA-TASK-3.git using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ nodemon server.js
❯ npm run dev
```

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/niharika896/DELTA-TASK-3.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/niharika896/DELTA-TASK-3.git/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=niharika896/DELTA-TASK-3.git">
   </a>
</p>
</details>

---
Made with <3 by Niharika

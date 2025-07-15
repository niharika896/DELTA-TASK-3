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
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- client Submodule -->
		<summary><b>client</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/niharika896/DELTA-TASK-3/blob/main/client/package-lock.json'>package-lock.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/main/client/vite.config.js'>vite.config.js</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/index.html'>index.html</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/eslint.config.js'>eslint.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/api.js'>api.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/main.jsx'>main.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/TypeRouter.jsx'>TypeRouter.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>features</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/vendorId.js'>vendorId.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/Image.js'>Image.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/Email.js'>Email.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/NavigateTo.js'>NavigateTo.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/City.js'>City.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/Wallet.js'>Wallet.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/isCityChosen.js'>isCityChosen.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/isLoggedIn.js'>isLoggedIn.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/Name.js'>Name.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/features/ProfileType.js'>ProfileType.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Admin</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Admin/AdminHP.jsx'>AdminHP.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Admin/Audit.jsx'>Audit.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Admin/EditEvent.jsx'>EditEvent.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Admin/Vendors.jsx'>Vendors.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>components</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Admin/components/NavbarA.jsx'>NavbarA.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
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
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/Carousel.jsx'>Carousel.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/Navbar.jsx'>Navbar.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/GoogleLogin.jsx'>GoogleLogin.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/Chatbot.jsx'>Chatbot.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/SideBar.jsx'>SideBar.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/EventsPosters.jsx'>EventsPosters.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/Chatbot.css'>Chatbot.css</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/UsernameLogin.jsx'>UsernameLogin.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/carousel.css'>carousel.css</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/components/MoviesPosters.jsx'>MoviesPosters.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>redux</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/redux/store-persist.js'>store-persist.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Vendor</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Vendor/HomePage.jsx'>HomePage.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Vendor/CreateEvent.jsx'>CreateEvent.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Vendor/VendorDetails.jsx'>VendorDetails.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Vendor/WaitPage.jsx'>WaitPage.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Vendor/DeclinedPage.jsx'>DeclinedPage.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>components</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/Vendor/components/Navbar.jsx'>Navbar.jsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
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
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/UserRouter.jsx'>UserRouter.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/index.css'>index.css</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/HomePage.css'>HomePage.css</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/Success.jsx'>Success.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/Failure.jsx'>Failure.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/HomePage.jsx'>HomePage.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/Movies.jsx'>Movies.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/SeatSelection.jsx'>SeatSelection.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/PastBookings.jsx'>PastBookings.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/Events.jsx'>Events.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/UserDetails.jsx'>UserDetails.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/ConfirmBooking.jsx'>ConfirmBooking.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/client/src/User/UserDetailsUsername.jsx'>UserDetailsUsername.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- server Submodule -->
		<summary><b>server</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/server.js'>server.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>posters</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/posters/kkc.avif'>kkc.avif</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/posters/mpbmv.avif'>mpbmv.avif</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>uploads</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/356e3cc7832b5b7a41e1bb2152263b2b'>356e3cc7832b5b7a41e1bb2152263b2b</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/a5480b14fe0c0ae2ac968da12ff7672d'>a5480b14fe0c0ae2ac968da12ff7672d</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/b31de025c591408ef2485899b53919e9'>b31de025c591408ef2485899b53919e9</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/bccb68d535bf52e629fc1ebee85a638d'>bccb68d535bf52e629fc1ebee85a638d</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/fe681963e61541eebbeaa7afc445c79f'>fe681963e61541eebbeaa7afc445c79f</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/9f61d9a92b68723f30075a4ce6c5b326'>9f61d9a92b68723f30075a4ce6c5b326</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/a62843f19252caf3e0555e4323815e08'>a62843f19252caf3e0555e4323815e08</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/93df0a152275bf44dc396a86100a42ac'>93df0a152275bf44dc396a86100a42ac</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/51d85fa6dec6b92dd2a89de54ed7de88'>51d85fa6dec6b92dd2a89de54ed7de88</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/5d710e2f98a0d549a1e82eaab9b9d5a5'>5d710e2f98a0d549a1e82eaab9b9d5a5</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/ee1ce30af971d667cf298a2c30f6fa15'>ee1ce30af971d667cf298a2c30f6fa15</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/3f60acfda820abfb14ea8d7722d5fc4a'>3f60acfda820abfb14ea8d7722d5fc4a</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/cb7e41df8026c9174fc639818e43dfef'>cb7e41df8026c9174fc639818e43dfef</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/326aabcaabbcb11e098ddc1f2b368484'>326aabcaabbcb11e098ddc1f2b368484</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/63054382444e0e635a3c2ab38439d95f'>63054382444e0e635a3c2ab38439d95f</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/fbd925f1ad976f7f608ad5149ff358c0'>fbd925f1ad976f7f608ad5149ff358c0</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/ee69213ddef4e0a5abd9d2b34faa3326'>ee69213ddef4e0a5abd9d2b34faa3326</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/b685ac3ca3757a5cb052e1948fedf2fc'>b685ac3ca3757a5cb052e1948fedf2fc</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/401a6c42f8b8fd54556efa4869a74dda'>401a6c42f8b8fd54556efa4869a74dda</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/uploads/ea6d04151e9cd6e5f46245b5ef1d194f'>ea6d04151e9cd6e5f46245b5ef1d194f</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>models</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/UsernameUserModel.js'>UsernameUserModel.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/MovieposterModel.js'>MovieposterModel.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/dbConnectionEventsTimings.js'>dbConnectionEventsTimings.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/dbConnectionPosters.js'>dbConnectionPosters.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/dbConnectionProfiles.js'>dbConnectionProfiles.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/VendorModel.js'>VendorModel.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/dbSeatsConnection.js'>dbSeatsConnection.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/Usermodel.js'>Usermodel.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/EventsposterModel.js'>EventsposterModel.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/models/dbConnectionMovieTimings.js'>dbConnectionMovieTimings.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/MoviesRoute.js'>MoviesRoute.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/pastBookings.js'>pastBookings.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/cancelBooking.js'>cancelBooking.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/SaveBookingInfo.js'>SaveBookingInfo.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/updateRoute.js'>updateRoute.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/chatbot.js'>chatbot.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/AuthRoute.js'>AuthRoute.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/PosterRoute.js'>PosterRoute.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/eventRecom.js'>eventRecom.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/EventsRoute.js'>EventsRoute.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/PFPRoutes.js'>PFPRoutes.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/usernameLogin.js'>usernameLogin.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/pdfRoute.js'>pdfRoute.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/SeatSelectionRoute.js'>SeatSelectionRoute.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/newUser.js'>newUser.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/webSocketServer.js'>webSocketServer.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>VendorRoutes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/VendorRoutes/updateVendor.js'>updateVendor.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/VendorRoutes/createEvent.js'>createEvent.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>AdminRoutes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/AdminRoutes/auditVendor.js'>auditVendor.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/AdminRoutes/homePageRoutes.js'>homePageRoutes.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/AdminRoutes/vendor.js'>vendor.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/AdminRoutes/editEvent.js'>editEvent.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/routes/AdminRoutes/updateVendorStatus.js'>updateVendorStatus.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/niharika896/DELTA-TASK-3.git/blob/master/server/utils/googleConfig.js'>googleConfig.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
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

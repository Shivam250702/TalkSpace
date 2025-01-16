# TalkSpace- A WebRTC Project

## Installation

1. Clone the repository:
```
git clone https://github.com/Shivam250702/TalkSpace.git
```
2. Install the dependencies:
```
cd frontend
npm install

cd backend
npm install
```
3. Create a `.env` file in the root directory and add the following environment variables:
```
DB_URL=mongodb+srv://your-username:your-password@cluster0.0xjhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
4. Start the development server:
```
npm run start
```

## Usage

1. The application provides the following API endpoints:
   - `POST /api/send-otp`: Sends an OTP (One-Time Password) to the user's phone number.
   - `POST /api/verify-otp`: Verifies the user's OTP.
   - `POST /api/activate`: Activates the user's account after successful OTP verification.
   - `GET /api/refresh`: Refreshes the user's authentication token.
   - `POST /api/logout`: Logs out the user.
   - `POST /api/rooms`: Creates a new room.
   - `GET /api/rooms`: Retrieves a list of all rooms.
   - `GET /api/rooms/:roomId`: Retrieves the details of a specific room.
   - `GET /api/test`: Returns a simple JSON response.

2. The application also includes the following actions:
   - `JOIN`: Joins a user to a room.
   - `LEAVE`: Removes a user from a room.
   - `ADD_PEER`: Adds a new peer to the room.
   - `REMOVE_PEER`: Removes a peer from the room.
   - `RELAY_ICE`: Relays ICE (Interactive Connectivity Establishment) candidates between peers.
   - `RELAY_SDP`: Relays SDP (Session Description Protocol) data between peers.
   - `SESSION_DESCRIPTION`: Handles the session description.
   - `ICE_CANDIDATE`: Handles the ICE candidate.
   - `MUTE`: Mutes a user.
   - `UNMUTE`: Unmutes a user.
   - `MUTE_INFO`: Provides mute information.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To run the tests, execute the following command:
```
npm test
```

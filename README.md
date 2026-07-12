# build-full-stack-book-store-mern-app

![full-stack-book-store-mern-project](/frontend/src/assets/github-cover.png)

## How to Run the Project

### Frontend

1. Clone the repository.

```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies.

```bash
npm install
```

3. Create a `.env.local` file in the `frontend` directory and add:

```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDERID=your_sender_id
VITE_APPID=your_app_id
```

4. Start the frontend.

```bash
npm run dev
```

---

### Backend

1. Go to the backend directory.

```bash
cd backend
```

2. Install dependencies.

```bash
npm install
```

3. Create a `.env` file inside the `backend` directory and add:

```env
DB_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
```

4. Start the backend.

```bash
npm run start:dev
```
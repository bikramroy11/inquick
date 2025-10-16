⚡ inQuick — AI-Powered Tech & Learning Content Platform

inQuick is a full-stack MERN application that delivers tech updates, academic concepts, tutorials, and career roadmaps — all enhanced by AI-generated insights and media uploads via ImageKit.
It’s designed for creators and learners who want a fast, interactive, and intelligent content-sharing experience.

🎥 Watch Demo on YouTube

🚀 Overview

inQuick is a content publishing and learning platform that empowers users to:

Share posts on Tech News, Concepts, Tutorials, and Guidance

Use AI (Google Gemini) to assist in content generation and summarization

Upload and manage media via ImageKit

Manage and organize posts via an intuitive dashboard

Enjoy a smooth, mobile-friendly interface powered by React.js

🌟 Key Features

✅ AI-Enhanced Content Creation – Generate ideas, outlines, or summaries with Google Gemini.
✅ Secure Authentication – User login/signup with JWT.
✅ Create, Edit & Publish Posts – CRUD operations for educational and tech content.
✅ Image Uploads – Integrated ImageKit API for media hosting.
✅ Admin Dashboard – Manage posts, comments, and user data.
✅ Responsive UI – Optimized for all screen sizes.
✅ Fast Performance – Built with the lightweight MERN stack.

🧠 Tech Stack
Layer	Technology
Frontend	React.js, Axios, Context API, React Router
Backend	Node.js, Express.js
Database	MongoDB Atlas
Authentication	JWT (JSON Web Token)
AI Integration	Google Gemini API
Media Management	ImageKit API
Deployment	Vercel / Render / AWS EC2
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/inQuick.git
cd inQuick

2️⃣ Install Dependencies
cd backend && npm install
cd ../frontend && npm install

3️⃣ Configure Environment Variables

Create a .env file inside the backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
PORT=5000

4️⃣ Run the Project

Start backend:

cd backend
npm run dev


Start frontend:

cd ../frontend
npm start


Visit the app → http://localhost:3000

📂 Folder Structure
inQuick/
 ├── backend/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── utils/
 │   └── server.js
 ├── frontend/
 │   ├── src/
 │   │   ├── components/
 │   │   ├── pages/
 │   │   ├── contexts/
 │   │   └── assets/
 └── README.md

🧾 Example API Endpoints
Method	Endpoint	Description
POST	/api/user/register	Register a new user
POST	/api/user/login	User authentication
GET	/api/posts	Fetch all content posts
POST	/api/posts	Create new post
PUT	/api/posts/:id	Update post
DELETE	/api/posts/:id	Delete post
POST	/api/ai/generate	Generate or summarize content using Gemini
POST	/api/upload/image	Upload image via ImageKit
🧑‍💻 Developer

👤 Bikram Roy
🎓 MCA — Vidyasagar University (First Class First)
💼 Passionate about Full-Stack Development with DevOps and GenAI
🌐 LinkedIn

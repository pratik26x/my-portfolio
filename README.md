# Portfolio Website

This repository contains the code for my personal portfolio website, showcasing my skills, projects, and experiences. The portfolio is designed to be **responsive**, **user-friendly**, and **visually appealing**, providing a seamless experience across all devices.

**Live Demo**: [Add your live portfolio link here]

---

## Features

- **Home Section**: A brief introduction about me and my expertise.
- **Projects Section**: Showcase of my key projects with descriptions, technologies used, and live demos or GitHub links.
- **Skills Section**: Highlights my technical skills and tools I work with.
- **About Me**: A deeper dive into my background, interests, and journey.
- **Contact Section**: A form for visitors to get in touch with me, powered by a backend API.

---

## Tech Stack

### Frontend
- **HTML, CSS, JavaScript**: Core technologies for building the structure, style, and interactivity of the website.
- **React.js**: A JavaScript library for building dynamic and reusable UI components.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and modern interfaces.
- **Framer Motion**: For adding smooth animations and transitions.
- **Axios**: For making API calls to the backend.

### Backend
- **Node.js**: A JavaScript runtime for building scalable backend services.
- **Express.js**: A web framework for Node.js to handle routing and middleware.
- **MongoDB**: A NoSQL database for storing data (e.g., contact form submissions).
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB.
- **Nodemailer**: For sending emails (e.g., when someone submits the contact form).

### Database
- **MongoDB Atlas**: A cloud-based MongoDB service for storing and managing data.

### Deployment
- **Frontend**: Hosted on **Vercel** for fast and scalable static site hosting.
- **Backend**: Hosted on **Render** for reliable backend services.
- **CI/CD**: Automated deployments using **GitHub Actions**.

### Other Tools
- **Git**: For version control and collaboration.
- **Postman**: For testing backend APIs.
- **Figma**: For designing the UI/UX of the portfolio.
- **ESLint & Prettier**: For code linting and formatting.

---

## Backend API Endpoints

- **POST `/api/contact`**:
  - Submits the contact form data (name, email, message) to the backend.
  - Validates input fields and saves the data to MongoDB.
  - Returns a success message or an error if validation fails.

- **GET `/api/test`**:
  - A test route to ensure the backend is working. Returns a JSON response with a success message.

---

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2.Navigate to the project directory:
  ```bash
  cd your-repo-name
  ```
3. Install dependencies for frontend and backend:
   ```bash
    cd frontend
    npm install  # or yarn install

    cd ../backend
    npm install  # or yarn install
    ```
4. Set up environment variables:

   Create a .env file in the backend folder and add the following:
    env
    ```
    MONGO_URI=your_mongodb_connection_string
    EMAIL_USER=your_email_address
    EMAIL_PASS=your_email_password
    PORT=5000
    ```
5. Run the backend server:
   ```bash
    cd backend
    npm start  # or yarn start
   ```
6.Run the frontend development server:
  ```bash
    Copy
    cd frontend
    npm start  # or yarn start
  ```
7. "Open your browser and visit http://localhost:3000 to view the frontend".

8.Contributing

  "Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request".

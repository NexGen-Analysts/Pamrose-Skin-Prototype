# Pamrose Skin - E-commerce Website Prototype

[Click here to visit the website](https://nexgen-analysts.github.io/Pamrose-Skin-Web/)

## 1. Project Overview

This project is a frontend prototype for **Pamrose Skin**, a Pretoria based e-commerce brand specializing in clean, ethical, and plant-based skincare. The primary goal of this application is to serve as a modern, user-friendly online platform where customers can browse products, learn about the brand, and make purchases.

This prototype was developed by **NexGen Analysts** led by Miss Naledi Makama and serves as the foundation for a larger full-stack, cross-platform project. It is designed to be scalable, with future integrations for a database backend and AI/ML capabilities for data analysis.

## 2. Team

- **Project Manager & Data Analyst:** Miss Naledi Makama
- **Secretary General & Business Analyst:** Miss Tsolofelo T. Noko
- **Business Analyst:** Mr Gomolemo Thlamama
- **Lead Software Engineer:** Mr U. Justin Mukwevho

## 3. Key Features

- **Product Discovery:** Users can view all products on a single collection page.
- **Advanced Filtering & Sorting:** Products can be filtered by category (Kits, Oils, etc.) and skin concern (Dry Skin, Shave Bumps, etc.). They can also be sorted by price.
- **Detailed Product Pages:** Each product has a dedicated page with multiple images (thumbnail and detail), a full description, key ingredients, and usage instructions.
- **Static User Authentication:** A persistent login/registration system using `localStorage` to simulate user sessions.
- **Protected Routes:** Key pages like "Place Order" and "My Orders" are only accessible to logged-in users.
- **Shopping Cart:** Fully functional cart to add, update quantities, and remove products.
- **Static Checkout Process:** A complete checkout flow with options for courier delivery or local collection, and payment via Cash or Bank Deposit/EFT.

## 4. Tech Stack

- **Frontend Library:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM

## 5. Project Structure

The project follows a standard Vite + React structure. Key directories include:

-   `public/`: Contains static assets like product images that are not processed by the build tool. The application's image paths rely on this folder structure.
-   `src/`: Contains all the application's source code.
    -   `assets/`: Contains static assets that are part of the application's source (logos, icons, etc.).
    -   `components/`: Reusable React components used across multiple pages (e.g., `Navbar.jsx`, `ProductItem.jsx`).
    -   `context/`: Contains the `ShopContext.jsx` file, which manages all global state for the application (products, cart, user authentication).
    -   `data/`: Contains the `products.json` file, which serves as the "database" for all product information. This is the primary file to edit when updating product details.
    -   `pages/`: Contains the main page components for each route (e.g., `Home.jsx`, `Product.jsx`, `Collection.jsx`).

## 6. Getting Started

Follow these steps to set up and run the project locally. If you're new to web development, each step is explained in detail:

1. **Install Node.js and npm:**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/). This will also install npm (Node Package Manager), which is required to manage project dependencies.

2. **Clone the repository:**
   - Open your terminal (Command Prompt or PowerShell on Windows).
   - Run the following commands to copy the project to your computer:
     ```bash
     git clone <your-repository-url>
     cd <repository-folder>
     ```
   - Replace `<your-repository-url>` with the actual URL of this repository, and `<repository-folder>` with the folder name created by the clone command.

3. **Install dependencies:**
   - In the project folder, run:
     ```bash
     npm install
     ```
   - This command downloads all the libraries and tools the project needs.

4. **Run the development server:**
   - Start the app by running:
     ```bash
     npm run dev
     ```
   - After a few seconds, you should see a message like:
     ```
     VITE vX.X.X  ready in XXX ms
     ➜  Local:   http://localhost:5173/
     ```
   - Open your browser and go to `http://localhost:5173` to view the website.

**Troubleshooting Tips:**
- If you see errors, make sure Node.js is installed and you are in the correct project folder.
- If `npm install` fails, try deleting the `node_modules` folder and running the command again.
- For help, search the error message online or ask your team for support.

## 7. Future Development Roadmap

-   **Database Integration:** Replace the static `products.json` file and mock user data with a connection to a NoSQL database like MongoDB.
-   **Backend Server:** Develop a Node.js/Express/C#.NET/Firebase backend to handle API requests, user authentication, and order processing.
-   **Payment Gateway Integration:** Integrate a real payment provider like Paystack or Stripe.
-   **AI/ML Integration:** Connect the platform to a Python/Looker Studio/PowerBI backend for data analysis, customer segmentation, and business intelligence to support management decision-making.

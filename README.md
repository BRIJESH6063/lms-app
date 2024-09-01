
![Logo](https://seamscloud.com/wp-content/uploads/2024/04/Blog-4-Whats-a-Learning-Management-System-LMS-Pillar-page-content.png)
## Learning Management System

Learning Management System (LMS) is a robust platform for creating, publishing, and managing online courses. It supports course purchases and tracks revenue generation, providing a seamless experience for both instructors and learners.


## Documentation

### Table of Contents
- [Features]()
- [Screenshots]()
- [Getting Started]()
    - [Prerequisites]()
    - [Installation]()
    - [Environment Variables]()
- [Usage]()
- [Technologies Used]()
- [Project Structure]()
- [Contributing]()
- [License]()
- [Contact]()



## Features

- **Course Creation and Publishing:** Instructors can create and publish courses with ease.
- **Course Purchase:** Users can purchase published courses using the integrated Stripe payment gateway.
- **Revenue Tracking:** View total revenue generated from course sales.
- **Secure Authentication:** Managed by Clerk for reliable and secure user authentication.
- **Responsive Design:** Optimized for both desktop and mobile devices.
## Screenshots


![App Screenshot](https://iftilms.org/wp-content/uploads/2024/03/3-1024x553.jpg)

![App Screenshot](https://sitefy.co/wp-content/uploads/2022/12/create-a-modern-learning-management-website-in-wordpress-1024x565.jpg)

![App Screenshot](https://global.discourse-cdn.com/webflow1/optimized/3X/9/d/9dc96d32fa9968dac80f39082c40837987bec8e5_2_690x359.jpeg)



## Getting Started
Prerequisites -
Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MySQL
- Git

## Installation
1. Clone the repository:
```bash
git clone https://github.com/BRIJESH6063/lms-app.git
cd lms-app
```
2. Install the dependencies:
```bash
npm install
```
3. Set up the database:
- Create a MySQL database.
- Run the ORM migrations to set up the necessary tables.

4. Configure the environment variables:
- Create a .env file in the root directory.
- Add the following variables:
```bash
DATABASE_URL=your-database-url
NEXT_PUBLIC_STRIPE_KEY=your-stripe-key
CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_API_KEY=your-clerk-api-key
```
5. Environment Variables
```bash
DATABASE_URL: Connection string for your MySQL database.
NEXT_PUBLIC_STRIPE_KEY: Public Stripe key for handling payments.
CLERK_FRONTEND_API: Clerk frontend API key for authentication.
CLERK_API_KEY: Clerk API key for server-side authentication.
```
6. Starting the Development Server
```bash
npm run dev
```
7. Navigate to http://localhost:3000 to see the application in action.


## Usage

- **Instructors:** Log in to create and publish new courses.
- **Students:** Browse available courses, make purchases, and start learning immediately.
- **Admins:** View total revenue generated and manage platform operations.




## Technologies Used

**Frontend:**
- Next.js
- TypeScript
- Tailwind CSS

**Backend:**
- Node.js
- ORM (Prisma)

**Database:**
- MySQL

**File Uploads:**
- Uploadthing

**Payments:**
- Stripe

**Authentication:**
- Clerk
## Project Structure
```bash
    lms/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   ├── utils/
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── ...
    ├── .env
    ├── package.json
    └── README.md


```

## Contributing
Contributions are welcome! Please read the contributing guidelines for more details.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support
If you have any questions or feedback, feel free to reach out:\
LinkedIn  : [linkedin-profile](https://www.linkedin.com/in/brijesh6063/) \
GitHub    : [github-profile](https://github.com/BRIJESH6063)

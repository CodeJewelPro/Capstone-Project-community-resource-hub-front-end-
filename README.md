# Community Resource Hub
## Overview

The Community Resource Hub is a web application designed to connect individuals and families with essential community resources such as food banks, clothing donations, educational programs, and more. The platform allows users to browse, search, and filter resources, create and update their profiles, save resources of interest, and manage those resources in their profiles.

## Features
User Authentication: Sign up and sign in functionality with profile management.
Resource Management: Users can browse, filter, search, create, update, and delete resources.
Profile Management: Users can update their profile details and manage their saved resources.
Responsive Design: The application is fully responsive and works on various devices.

## Technologies Used
**Frontend**:
React
React Router DOM
Axios
CSS (custom styles)

**Backend**:
Node.js
Express.js
MongoDB (using Mongoose)


API:
RESTful API developed with Express.js

## Usage
Home Page: Start by exploring available resources or create a user account to save and manage resources.
Sign Up/Sign In: Create a new account or sign in with existing credentials to manage your profile and resources.
Profile Management: Update your profile information and view or delete saved resources.
Resources: Browse, search, and filter resources. You can also suggest new resources if you don’t find what you’re looking for.

## API Endpoints
User Routes:

POST /api/users - Create a new user
POST /api/users/login - Authenticate a user
GET /api/users/:id - Get user details
PUT /api/users/:id - Update user details
DELETE /api/users/:id - Delete a user
Resource Routes:

POST /api/resources - Create a new resource
GET /api/resources - Get all resources
GET /api/resources/:id - Get a single resource by ID
PUT /api/resources/:id - Update a resource by ID
DELETE /api/resources/:id - Delete a resource by ID
Category Routes:

POST /api/categories - Create a new category
GET /api/categories - Get all categories
GET /api/categories/:id - Get a single category by ID
PUT /api/categories/:id - Update a category by ID
DELETE /api/categories/:id - Delete a category by ID
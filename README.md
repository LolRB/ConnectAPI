# ConnectAPI

## Overview

ConnectAPI is a social network application programming interface (API) tailored for a new social media platform. It leverages MongoDB, a NoSQL database, to efficiently manage and store extensive amounts of unstructured data. The API is designed to handle user profiles, thoughts (posts), reactions, and friendships, making it a robust foundation for a social networking service.

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Capabilities](#capabilities)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Testing](#testing)
- [Credits](#credits)

## Usage

Once the server is up and running, you can interact with the API using tools like Insomnia or any other API client. Mongoose models will synchronize with MongoDB upon server initialization.

## Capabilities

1. User Management:

   - Create, update, and delete user profiles with distinct usernames and email addresses.
   - Manage a user’s friend list with options to add or remove friends.

2. Thoughts and Reactions:

   - Create, update, and delete thoughts (posts) linked to a user.
   - Users can react to thoughts with reactions, which can be added or removed.

3. Data Relationships:

   - Efficiently manage connections between users, thoughts, and reactions with Mongoose schemas.
   - Automatically update related data, such as a user’s thoughts and friends, when changes occur.

4. API Documentation:

   - Test and interact with the API using tools like Insomnia, with clear routes for CRUD operations on users, thoughts, reactions, and friendships.
   - JSON responses are designed for clarity and ease of use.

5. NoSQL Database:

   - Utilize MongoDB for scalable and adaptable data storage, managing substantial amounts of unstructured data
   - Mongoose models synchronize with MongoDB upon server start-up, ensuring data consistency.

6. Performance Enhancements:

   - Built to handle large datasets with optimized query performance in MongoDB.
   - Supports horizontal scaling to accommodate a growing dataset and user base.

7. RESTful API Design:

   - Adheres to RESTful principles, providing clear and consistent API routes for effective data handling and retrieval.

## API Endpoints

### Users

- GET `/api/users` - Retrieve all users
- GET `/api/users/:id` - Retrieve a specific user by ID
- POST `/api/users` - Create a new user
- PUT `/api/users/:id` - Update an existing user by ID
- DELETE `/api/users/:id` - Remove a user by ID

### Thoughts

- GET `/api/thoughts` - Retrieve all thoughts
- GET `/api/thoughts/:id` - Retrieve a specific thought by ID
- POST `/api/thoughts` - Create a new thought
- PUT `/api/thoughts/:id` - Update an existing thought by ID
- DELETE `/api/thoughts/:id` - Remove a thought by ID

### Reactions

- POST `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- DELETE `/api/thoughts/:thoughtId/reactions/`:reactionId - Remove a reaction from a thought

### Friends

- POST `/api/users/:userId/friends/:friendId` - Add a friend to a user’s friend list
- DELETE `/api/users/:userId/friends/:friendId` - Remove a friend from a user’s friend list

## Data Models

### User

- `username`: String, required, unique
- `email`: String, required, unique, must follow a valid email format
- `thoughts`: Array of `_id` values referencing to Thought documents
- `friends`: Array of `_id` values referencing to User documents

### Thought

- `thoughtText`: String, required, between 1 and 280 characters
- `createdAt`: Date, default is the current timestamp
- `username`: String, required, referencing the user who created the thought
- `reactions`: Array of nested documents based on the Reaction schema

### Reaction (Schema only)

- `reactionId`: ObjectId, default is a new ObjectId
- `reactionBody`: String, required, between 1 and 280 characters
- `username`: String, required
- `createdAt`: Date, default is the current timestamp

## Testing

You can test the API routes manually using tools like Insomnia. Automated testing can be incorporated in future updates.

## Credits

This project was developed as part of a learning exercise and may include basic implementations.

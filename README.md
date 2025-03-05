# Category Management API

This project provides a set of API endpoints for managing categories in a database. The API allows users to create, retrieve, update, and delete categories.

## Features
- Create a new category
- Retrieve all categories
- Update an existing category
- Retrieve a category by ID
- Delete a category by ID
- Test API endpoints using Postman

## Endpoints

### Create Category
- **Method:** POST
- **Endpoint:** `/Create_Category`
- **Description:** Adds a new category to the database.

### Get All Categories
- **Method:** GET
- **Endpoint:** `/GetAllCategories`
- **Description:** Retrieves all categories from the database.

### Update Category
- **Method:** PUT
- **Endpoint:** `/Update_Category`
- **Description:** Fetches a category from the database and updates it.

### Get Category By ID
- **Method:** GET
- **Endpoint:** `/GetCategoryByBId`
- **Description:** Retrieves a specific category by its ID.

### Delete Category By ID
- **Method:** DELETE
- **Endpoint:** `/DleteCategoryByBId`
- **Description:** Deletes a category by its ID.

## Testing the API
- Use **Postman** to test each endpoint.
- Ensure that the database is properly configured before testing.

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies (if applicable):
   ```bash
   npm install  # or pip install -r requirements.txt
   ```
4. Set up the database connection.
5. Start the server:
   ```bash
   npm start  # or python app.py
   ```
6. Use Postman to test API endpoints.

## Deliverables
- The complete project should be delivered as a `.zip` or `.rar` file.

## License
This project is open-source and available for modification and distribution.


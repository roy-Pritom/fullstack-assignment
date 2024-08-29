# Node.js(Express js) TypeScript Mongodb Application(Help Center Full Stack Assignment)

This is a  Node.js application written in TypeScript and using mongodb as a database.

## Requirements

Before you run locally, ensure that you must have the following requirements:

- Node.js installed
- npm package manager installed
- typescript installed
- provide mongodb correct uri

## Getting Started

1. **First clone the repository:**

   ```bash
   git clone https://github.com/roy-Pritom/fullstack-assignment/tree/main/help-center-backend
   cd change the directory
2. **Install Dependencies:**

   ```bash
   npm install
   make sure all package properly installed.
3. **Set mongodb for server**

   ```bash
   Properly login your mongodb account and get uri & (userName password)
4. **Configuration(.env):**

   ```bash
   Create a .env file in the root of your project
   DATABASE_URL=mongodb Uri
   PORT=server_port

5. **Build the typescript code:**

   ```bash
   npm run build
6. **Run Application(production):**

   ```bash
   npm run start:prod

7. **Run Application(development):**

   ```bash
   npm run start:dev

8. **Schema Model:**

   ```bash
   Card
   ```

9. **Api end points:**
   ```
   Create a card
   Endpoint: /cards
   Method:POST
   put appropriate json data

   Get Paginated and Filtered cards
   Endpoint: /cards?your_query
   Method: GET

   Get a specific card by title 
   Endpoint: /cards/:title
   Method:GET
  
   ```
10. **Live link(vercel):**

   
Live link backend:https://help-center-backend-kappa.vercel.app

Live site frontend: https://willowy-bubblegum-1c2aff.netlify.app

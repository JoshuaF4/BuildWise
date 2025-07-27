# BuildWise

BuildWise is a web application designed to streamline construction project management and customer relationship workflows. The project consists of a React-based frontend and a Jupyter notebook for backend machine learning or data processing tasks.

## Project Structure

```
BuildWise/
├── frontend/           # React frontend application
│   ├── public/         # Static assets
│   ├── src/            # Source code (components, styles, etc.)
│   └── ...
├── BuildWise.ipynb     # Jupyter notebook for backend/ML tasks
└── README.md           # Project overview (this file)
```

## Frontend (React)

- Located in the `frontend/` directory.
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Main features include:
  - Dashboard and sidebar navigation
  - Project, customer, and lead management tables
  - Calendar and scheduling utilities
  - Authentication (Sign In/Sign Up)
  - Utility components and custom styles

### Screenshots

#### Sign Up Page
![Sign Up Page](screenshots/signup.png)

#### Dashboard & Navigation
![Dashboard](screenshots/dashboard.png)

#### City Utilities Planner
![City Utilities Planner](screenshots/utilities_planner.png)

#### Projects Management
![Projects Management](screenshots/projects.png)

### Setup Instructions

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Build for production:**
   ```bash
   npm run build
   ```

### Main Dependencies
- React 19
- Firebase
- React Calendar
- React Icons
- js-cookie

See `frontend/README.md` for more details on available scripts and advanced configuration.

## Backend / Machine Learning (Jupyter Notebook)

- The `BuildWise.ipynb` notebook contains code for backend or ML tasks, such as image segmentation or data analysis.
- Uses libraries like Flask, PyTorch, segmentation-models-pytorch, Gradio, OpenCV, and more.
- To run the notebook, ensure you have the required Python packages installed (see the first cell in the notebook for a list).

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the ISC License. 
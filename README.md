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
<img width="1905" height="889" alt="Screenshot 2025-07-27 165925" src="https://github.com/user-attachments/assets/d13b97eb-ef23-40e9-ad06-342f4b941f53" />


#### Dashboard & Navigation
<img width="1917" height="912" alt="Screenshot 2025-07-27 165938" src="https://github.com/user-attachments/assets/87ab6f8d-97ae-4146-a2b5-669007032289" />


#### City Utilities Planner
<img width="1535" height="909" alt="Screenshot 2025-07-27 165957" src="https://github.com/user-attachments/assets/bf864d96-96ad-47eb-abea-3935b61b7ad5" />


#### Projects Management
<img width="1909" height="896" alt="Screenshot 2025-07-27 170040" src="https://github.com/user-attachments/assets/e882cac4-23be-4874-982d-24385a02d585" />


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

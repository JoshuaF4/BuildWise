import React, { useState } from 'react';

function ProjectsTable() {
  const [projects, setProjects] = useState([]);  
  const [showForm, setShowForm] = useState(false);  
  const [newProject, setNewProject] = useState({ title: '', description: '', client: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.client) {
      alert('Project title and client are required!');
      return;
    }

    const newEntry = { id: projects.length + 1, ...newProject };
    setProjects([...projects, newEntry]); 
    setNewProject({ title: '', description: '', client: '' });
    setShowForm(false); 
  };

  return (
    <div className="table-container">
      <h2>Projects</h2>
      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New'}
      </button>

      {showForm && (
        <div className="customer-form">
          <input type="text" name="title" placeholder="Title" value={newProject.title} onChange={handleInputChange} />
          <input type="text" name="description" placeholder="Description" value={newProject.description} onChange={handleInputChange} />
          <input type="text" name="client" placeholder="Client" value={newProject.client} onChange={handleInputChange} />
          <button onClick={handleAddProject} className="save-btn">Add</button>
        </div>
      )}

      <table className="customer-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;

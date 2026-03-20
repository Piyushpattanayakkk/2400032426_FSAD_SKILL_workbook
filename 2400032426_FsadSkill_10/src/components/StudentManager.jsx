import React, { useState } from "react";
import "./StudentManager.css";

function StudentManager() {
  const initialStudents = [{ id: "32426", name: "piyush", course: "CSE" }];
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({ id: "", name: "", course: "" });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const addStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.course) {
      alert("Please fill all fields");
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent({ id: "", name: "", course: "" });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="container">
      <h2>Simple Student Manager</h2>

      <div className="form">
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={newStudent.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={newStudent.course}
          onChange={handleChange}
        />
        <button onClick={addStudent}>Add</button>
      </div>

      <div className="list">
        {students.length === 0 ? (
          <p>No students yet</p>
        ) : (
          <ul>
            {students.map((s) => (
              <li key={s.id}>
                <span>{s.name}</span>
                <span>{s.course}</span>
                <button className="delete" onClick={() => deleteStudent(s.id)}>
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default StudentManager;


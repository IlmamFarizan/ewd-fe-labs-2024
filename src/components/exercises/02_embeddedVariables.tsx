import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

interface Module {
  name: string;
  noLectures: number;
  noPracticals: number;
}

const modules: Module[] = [
  { name: "DevOps", noLectures: 22, noPracticals: 23 },
  { name: "Enterprise Web Dev", noLectures: 31, noPracticals: 21 },
  { name: "Mobile App Dev", noLectures: 11, noPracticals: 91 },
];

const Demo: React.FC = () => {
  return (
    <>
      <h1>MSc Enterprise Software Systems - Modules Table</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module, index) => (
            <tr key={index}>
              <td>{module.name}</td>
              <td>{module.noLectures}</td>
              <td>{module.noPracticals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Demo;

import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
// import { programmeModules } from "../../types/samples/interfaces";

interface Module {
  name?: string;
  noLectures?: number;
  noPracticals?: number;
}

export interface programmeModules {
  course: string;
  modules: Module[];
}

const Demo: React.FC<programmeModules> = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          {props.modules.map((module, index) => (
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

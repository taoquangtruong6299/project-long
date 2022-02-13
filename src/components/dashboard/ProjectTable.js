import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

import {deleteExercise,getExercise} from '../../actions/index'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import AddExercise from "../addExercise";
import "../../css/fix_css.css"
const ProjectTables = () => {
  const [isShow, setIsShow] = useState(false);
  const [data,setData] = useState([]);

  useEffect(() => {

    const getData = async()=> {

      const result = await getExercise();

      setData(result.values);
    }
    getData();

  },[]);


  // const data = props.exercise
  console.log(data);
  const handleDelete = async(id)=>{
    await deleteExercise(id);
    const getData = async()=> {

      const result = await getExercise();

      setData(result.values);
    }
    getData();

  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Calorie</th>
                <th>Point</th>
                <th>BodyPart</th>
                <th>Target</th>
                <th>ExerciseLevel</th>
                <th>Equipment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {data.length != 0 && data.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.calorie}</h6>
                        <span className="text-muted"></span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.point}</td>
                  <td>
                    {tdata.bodyPart}
                  </td>
                  <td>{tdata.target}</td>
                  <td>{tdata.exerciseLevel}</td>
                  <td>{tdata.equipment}</td>
                  <td>
                    <button class="btn btn-danger" onClick={()=>{handleDelete(tdata._id)}}>Delete</button>
                    <button class="btn btn-warning" onClick={()=>{setIsShow(!isShow)}} >Edit</button>

                  </td>
                </tr>
              ))}
            </tbody>

          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;

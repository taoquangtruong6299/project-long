import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import { useEffect, useState } from 'react';
import {addExercise} from '../actions/index'
import {getExercise} from '../actions/index'
import AddExercise from "../components/addExercise";

const targetData = ["abs",
  "quads",
  "lats",
  "calves",
  "pectorals",
  "forearms",
  "glutes",
  "hamstrings",
  "triceps",
  "cardiovascular system",
  "upper back",
  "biceps",
  "delts",
  "traps"
  ];
  const equipmentData = ["body weight", "band", "dumbbell", "barbell", "assisted", "leverage machine"]


const Starter = () => {
  const [data,setData] = useState([]);

  useEffect(() => {

    const getData = async()=> {

      const result = await getExercise();

      setData(result.values);
    }
    getData();

  },[]);
  let [calorie, setCalorie] = useState(0);
  let [bodyPart, setBodyPart] = useState("");
  let [equipment, setEquipment] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [gifUrl, setGifUrl] = useState("");
  let [videoUrl, setVideoUrl] = useState("");
  let [description, setDescription] = useState("");
  let [target, setTarget] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleOpen = () => {
    setShowForm(true);
  }
  const handleClose = () =>{
    setShowForm(false);
  }
// bodyPart: bodyPart,
      // equipment: equipment,
      // imageUrl: imageUrl,
      // gifUrl: gifUrl,
      // videoUrl: videoUrl,
      // description: description,
      // target: target,
      // calorie: calorie
  const handleSubmit = async(e) =>{
    e.preventDefault();
    await addExercise({
      bodyPart: bodyPart,
      equipment: equipment,
      imageUrl: imageUrl,
      gifUrl: gifUrl,
      videoUrl: videoUrl,
      description: description,
      target: target,
      calorie: calorie
      })
    // const newExercise = [{
    //   bodyPart: bodyPart,
    //   equipment: equipment,
    //   imageUrl: imageUrl,
    //   gifUrl: gifUrl,
    //   videoUrl: videoUrl,
    //   description: description,
    //   target: target,
    //   calorie: calorie
    //   },...data];
    //   setData(newExercise);
    const getData = async()=> {

      const result = await getExercise();

      setData(result.values);
    }
    getData();
    setShowForm(false);
  }
  console.log(data);

  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}

      <div>

        <button onClick={handleOpen}>Button</button>


      {showForm && (
        <form>
          <div className="row form_create">
            <button className="btn_close" onClick={handleClose}>X</button>

          <div>
            <div className="mb-3">
              <label className="form-label">Task</label>
              <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setCalorie(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">BodyPart</label>
              <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=> setBodyPart(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Equipment:</label>
              <select name={target} onChange={(e)=> setEquipment(e.target.value)}>
                  {equipmentData.map((option,key) => (
                  <option key={key} value={option.value}>{option}</option>
                ))}
              </select>            </div>
            <div className="mb-3">
              <label className="form-label">ImageUrl</label>
              <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=> setImageUrl(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">GifUrl</label>
              <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=> setGifUrl(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">VideoUrl</label>
              <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=> setVideoUrl(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=> setDescription(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Target:</label>
              <select name={target} value={target} onChange={(e)=> setTarget(e.target.value)}>
                  {targetData.map((option,key) => (
                  <option key={key} value={option.value}>{option}</option>
                ))}
              </select>
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    </div>
          </div>
        </form>
      )}
    </div>
      {/* <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row> */}
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables exercise = {data} />
        </Col>
      </Row>
      {/***Blog Cards***/}
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default Starter;

import { useEffect, useState } from 'react';
import {addExercise} from '../actions/index'
import {getExercise} from '../actions/index'

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



function AddExercise(props){
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
  const [showForm, setShowForm] = useState(true);

  // const handleOpen = () => {
  //   setShowForm(true);
  // }
  const handleClose = () =>{
    setShowForm(false);
    console.log(false);
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
    // e.preventDefault();
    // await addExercise({
    //   bodyPart: bodyPart,
    //   equipment: equipment,
    //   imageUrl: imageUrl,
    //   gifUrl: gifUrl,
    //   videoUrl: videoUrl,
    //   description: description,
    //   target: target,
    //   calorie: calorie
    //   })
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
    // setShowForm(false);
  }

  return(
   <>
   <div>

      {/* <button onClick={handleOpen}>Button</button> */}



        <form>
          <div className="row form_create">
            <button className="btn_close" onClick={()=>handleClose()}>X</button>

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




         {/* <form>
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
              <button onClick={handleSubmit} className="btn btn-primary">Update</button>
                      </div>
            </div>
          </form> */}




      )
            </div>
   </>
  )
}
export default AddExercise;

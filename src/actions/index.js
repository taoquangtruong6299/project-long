// import axios from 'axios';

// // export function deleteTodo(id){
// //   return {
// //     type: "DELETETODO",
// //     payload: id
// //   }
// // }

// export function getexercise(exercise){
//   return {
//     type: "GETEXERCISE",
//     payload: exercise
//   }
// }

// export function getdata() {
//   return function(dispatch) {
//     return axios.get("http://3.130.166.201:4321/api/v1/exercises/?fbclid=IwAR0sDfqIH_jq9bFOctMmWWlDmmmdZgCxIAtCHHlQYh_rhXxG7b-QV0tQIus")
//      .then(({ data }) => {

//         dispatch(getexercise(data));

//     });
//   };
// }

const headerDefault = {
  Accept: "application/json",
  "Content-Type": "application/json",
}


export const getExercise = async () => {
  try {
    const res = await fetch(
      `http://3.130.166.201:4321/api/v1/exercises`,
      {
        method: "GET",
        headers: headerDefault,
      }
    );
    const json = await res.json();

    return json;
  } catch (error) {
    console.log(error);
  }
}

export const addExercise = async (exercise) => {
  try {
    const res = await fetch(
      `http://3.130.166.201:4321/api/v1/exercises/create`,
      {
        method: "POST",
        headers: headerDefault,
        dataType: 'json',
        body: JSON.stringify(exercise)
      }
    );
    const json = await res.json();
    console.log("post");
    return json;
  } catch (error) {
    console.log(error);
  }
}

export const updateExercise = async (id,exercise) => {
  try {
    const res = await fetch(
      `http://3.130.166.201:4321/api/v1/exercises/update/${id}`,
      {
        method: "PATCH",
        headers: headerDefault,
        dataType: 'json',
        body: JSON.stringify(exercise)
      }
    );
    const json = await res.json();
    console.log("post");
    return json;
  } catch (error) {
    console.log(error);
  }
}

export const deleteExercise = async (id) => {
  try {
    const res = await fetch(
      `http://3.130.166.201:4321/api/v1/exercises/delete/${id}`,
      {
        method: "DELETE",
        headers: headerDefault,

        // body: JSON.stringify(exercise)
      }
    );
    const json = await res.json();
    console.log("post");
    return json;
  } catch (error) {
    console.log(error);
  }
}

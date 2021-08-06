
import axios from 'axios';
import { GreetingInterface } from 'src/interfaces';

export async function getCall(url:string): Promise<any> {
  try {
    const response = await axios.get(url);
    // console.log(response);
    if(response.status == 200){
        // test for status you want, etc
        console.log(response.status)
    }
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export async function postNewGreeting(payload:GreetingInterface,endpoint:string='http://localhost:3001/rest-api'):Promise<any> {
  try {
    //console.log(endpoint)
    const response = await axios.post(endpoint, payload)
    if(response.status == 201){
        // test for status you want, etc
        console.log(response.status)
    }
    return response.data
  } catch  (error) {
      console.error(error);
  }
}
export async function deleteGreeting(id:string,endpoint:string='http://localhost:3001/rest-api'):Promise<any>{
  try {
    console.log(id)
    const response = await axios.delete(`${endpoint}/${id}`)
    console.log(response.status) 
    return response
  } catch  (error) {
      console.error(error);
  }
}


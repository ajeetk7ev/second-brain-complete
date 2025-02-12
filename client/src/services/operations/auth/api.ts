
import axios,{AxiosResponse} from 'axios'
import { AppDispatch } from "../../../app/store";
import { setLoading } from "../../../slices/authSlice";
import { authEndpoints } from "../../apis";

const {SIGNUP_API,SIGNIN_API} = authEndpoints;

export const signup = (inputData:any)=>{
    return async(dispatch:AppDispatch)=>{
         dispatch(setLoading(true));
         try {
            console.log("data is",inputData);
            console.log('signup api ',SIGNUP_API);
            const res:AxiosResponse = await axios.post(SIGNUP_API,inputData);
            console.log('RESPONSE IS ',res);
            
         } catch (error) {
            console.log(error);
         }

         dispatch(setLoading(false));
    }
}

export const signin = (inputData:any)=>{
   return async(dispatch:AppDispatch)=>{
      dispatch(setLoading(true));
      try {
         const res = await axios.post(SIGNIN_API,inputData);
         console.log("SIGNIN RESPONSE IS ",res);
      } catch (error) {
         console.log(error);
      }

      dispatch(setLoading(false));
   }
}
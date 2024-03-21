import APICall from "../APICall";
import { ClientSignUpDTO } from "../DTO/authDTO/client-signup-dto";


async function signUpClient  (payload:any){
    const res = await APICall({
      Url: "/auth/client/signup",
      Method: "post",
      Data: payload,
    });

    console.log(res, "oousreuifduigidfvueriu");

    return res
}

const authService = {
  signUpClient,
};

export default authService  
import { ISignIn } from "@screens/SignIn/interfaces";
import { IAuth } from "@shared/interfaces";
import { http } from "@shared/services";

const signInService = {
  signIn: async (data: ISignIn) => {
    const result = await http.post<IAuth>("login", data);
    return result.data;
  },
};

export { signInService };

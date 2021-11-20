import axios from 'axios';

import { apiAprende } from "./url-konecta";

export const postLogin = async (user, password) => {
    const result = await axios({

        method: "POST",
        url: `${apiAprende}`,
        data: {
            user,
            password,
            flag: false
        }
    })

    console.log("CUERPO", result);


    return result
}

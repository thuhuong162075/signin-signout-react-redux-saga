import { createToken } from './createToken';
import axios from 'axios'

const postLogin = async (name, pass) => {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    const url = `http://t3h-edu.herokuapp.com/api/learning/v1/login`;

    var md5 = require('md5');
    let token = createToken()
    const response = await axios.post(proxy+url,
        {
            username: name,
            password: md5(`thuc_tap_vccorp_2020|||${pass}`)
        }, {
            headers: {
                'Authorization': token
            }
          }
        );
    const result = await response.status === 200 ? response.data : {}
    return result
}

export const api = {
    postLogin
  }
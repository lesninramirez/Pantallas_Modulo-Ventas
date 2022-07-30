import axios from "axios";
const Axios= axios.create({
    baseURL: 'http://10.1.10.99:3002/api/',
    //baseURL: 'http://192.168.1.34:3002/api/',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}


});

export default Axios;
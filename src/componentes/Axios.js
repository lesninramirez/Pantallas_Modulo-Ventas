import axios from "axios";
const Axios= axios.create({
<<<<<<< HEAD
    baseURL: 'http://192.168.0.28:3002/api/',
=======
    baseURL: 'http://10.1.10.99:3002/api/',
>>>>>>> bb062b3fb67d2e2e6a76338986562cee1e9b5a5b
    //baseURL: 'http://192.168.1.34:3002/api/',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}


});

export default Axios;
import  axios  from "axios";

class UserServices {
    static getAllUsers(){
        let serverUrl ='https://jsonplaceholder.typicode.com/users';
        return axios.get(serverUrl)

    }
}
export default UserServices
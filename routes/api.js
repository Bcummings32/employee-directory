import axios from "axios";
const url = '';

//call
export default {
    ApiSearch: function () {
        return axios.get(url)
    }

}
import axios from "axios";

export const imageUpload = async(image) => {
 
    if(image === null){
        return null;
    }

const formData = new FormData();
formData.append("image" , image)

const resp = axios.post("https://api.imgbb.com/1/upload?key=319e0836617228fac627c76124d6d1e3", formData)


return  resp
}
import Axios from "axios"





export default Axios.create({
    baseURL: `https://itaxi.dap.ng/api`
})

export const config = {
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': "*",
        'Accept': "application/json",
    }
}

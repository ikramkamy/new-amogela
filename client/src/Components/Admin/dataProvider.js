import axios from 'axios';



export const getUsers =async ()=>{


    axios.get('/getallusers')
    .then(res => {
      const data=res.data;
      //setBarquette (data);
      console.log("daraProvider",data)
      
      
    })
    .catch(function (error) {
        console.log(error);
    })
    


}


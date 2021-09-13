
import axios from 'axios';
import {LOGIN_USER} from './types';
import { useHistory } from 'react-router-dom';
/*

export const getProductsBycath = (cath) => {
    return async dispatch => {
        const res = await axios.get(`/cathegorie/${cath}`);
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            });
        } else {
            // dispatch({
            //     type: 
            // })
        }
    }
}
*/
export function loginUser (newuser){
    /*
    const request = axios.post(`/signin/61051205f1f12724e4909424`,dataToSubmit)
    .then(response => response.data);
console.log("we are in actions")
alert('WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOW')

*/

if(newuser.password===""||newuser.email===""){alert(`SVP remplissez tous les champs`)}
//event.preventDefault();
console.log("we are posting ")
/*

*/
console.log(newuser);
const request =axios.post("http://localhost:3001/signin",newuser)
.then(response => {
 console.log("LOGIN axios succed",response )
 localStorage.setItem('token', response.data.token);
 localStorage.setItem('user_id', response.data.user._id);
console.log("token",response.data.token)
 
 const id=response.data.user._id;
 console.log("id from response",id)
 const history = useHistory();
 history.push(`/shop`);
 //setLoginout("logout")

}).catch(error => {
  console.log("the raison of failure", error) 
  /*history.push('/signin');
  alert("check you if you are signed up ")
  */
});

return {
    type: LOGIN_USER,
    payload: request
}
}
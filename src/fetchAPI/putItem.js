export default function callAPi(payload) {
    console.log(payload)
      return new Promise((resolve, reject) => {
         const url = `http://localhost:3001/items/${payload.payload}`;
         fetch(url, {
             method: "PATCH",
             headers:{
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify({isdone:true})
         })
             .then(response => response.json())
             .then(res => {
                 resolve(res);
                 console.log(res);
             })
             .catch(err => {
                 reject(err)
             })
         })
 }
 
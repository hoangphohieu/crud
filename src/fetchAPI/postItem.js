export default function callAPi(payload) {
   console.log(payload)
     return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/items";
        fetch(url, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name:payload.payload})
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

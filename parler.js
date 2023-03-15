export function parler(){
    fetch('http://192.168.1.153:1300', {      //192.168.241.234:1300
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
  },
  body: 'parler'
})
.then(response => response.text())
.then(data => {
    // Utilisez les données récupérées ici
    responseData = data;
    console.log(responseData);
  })

.catch(error => {
  // ici, vous pouvez gérer les erreurs
  console.error(error);
});
}



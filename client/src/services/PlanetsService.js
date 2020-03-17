const baseURL = 'http://localhost:3000/api/planets/'
export default {


  getPlanets(){
    return fetch(baseURL)
    .then(res => res.json())
  },


  postPlanets(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
}

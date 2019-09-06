/* Переписать код с промисов на async/await 
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404 */

  async function loadJson(url) {
    let res = await fetch(url);
    if(res.status === '200') return await res.json()
    else throw new Error(res.status)
  }
  loadJson('no-such-user.json').catch(console.log);
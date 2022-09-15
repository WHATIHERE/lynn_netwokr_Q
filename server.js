const fetch = require('node-fetch')

RegisterNetEvent('QualityNetworkClient') // สำหรับ CLIENT
onNet('QualityNetworkClient', (_URL, _method,_body) => {
    fetch(_URL, {
        method: _method,
        headers: {
         "Content-Type": "application/json"
       },
        body: JSON.stringify(_body)
       })
       .then(res=> console.log(res))
       .catch(err => console.error(err));
})

RegisterNetEvent('QualityNetworkServers') // สำหรับ SERVER
on('QualityNetworkServers', (_URL, _method,_body) => {
    fetch(_URL, {
        method: _method,
        headers: {
         "Content-Type": "application/json"
       },
        body: JSON.stringify(_body)
       })
       .then(res=> console.log(res))
       .catch(err => console.error(err));
})
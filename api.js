const axios = require('axios')
module.exports = function() {
  return axios.create({
    baseURL:'http://localhost:5000'
  })
}

import axios from "axios";


test('should verify if client exists', () =>{
  axios.post('http://localhost:3000/deliveryman/authenticate', {
    username: 'nowras',
    password: 'senhasecreta'
  })
})
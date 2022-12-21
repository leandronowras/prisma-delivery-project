import axios from "axios";


test('should verify if client exists', () =>{
  axios.post('http://localhost:3000/client/authenticate', {
    id_client: 'afed5e52-801a-429c-9416-7bd53826aa08',
    item_name: 'mouse usb'
  })
})
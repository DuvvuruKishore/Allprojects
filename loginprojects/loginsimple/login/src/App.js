import React from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="container">
    <form onSubmit={(e)=>login(e)}>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  );
}
function login(e){
  e.preventdefault();
  let req={
    email:document.getElementById('exampleInputEmail1').value,
    password:document.getElementById('exampleInputPassword1').value
  }
  axios.post('/login',req)
  .then(res=>{
    alert(res.data.message);
  }).catch(err=>{
    console.log(err);
  })
}

export default App;

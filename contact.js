document.getElementById('form').addEventListener('submit',async function(event){
    event.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let subject=document.getElementById('subject').value;
    let message=document.getElementById('message').value
   
   
   let data ={
       name:name,
       email:email,
       subject:subject
   };
   console.log(data);
   
   let result =await fetch('https://dummyjson.com/products/add',{
       method:'POST',
       headers:{
           'content-Type':'application/json'
       },
       body:JSON.stringify(data)
   })
   .then(response=>response.json())
   .then(response=>response)
   .catch(error=>error.message)
   
   let success=document.getElementById('success')
   result && result.id? success.innerHTML='User created successfully':
   success.innerHTML='User not created'
   console.log({result});
   
   })
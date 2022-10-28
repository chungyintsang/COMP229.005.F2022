// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 27 Oct 2022


//Client-side js

//Alert for delete button
if(getTitle == "Business Contact List" || getTitle == "Update Contact"){
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}

// Validate password and confirm password
if(getTitle == "Sign Up")
{
    const confirm = document.querySelector('input[name=passwordConfirm]');

    confirm.addEventListener('change', onChange); 
}

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=passwordConfirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}
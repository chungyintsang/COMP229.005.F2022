// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022


//Client-side js
//Alert for delete button
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
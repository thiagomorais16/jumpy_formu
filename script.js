const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spam = document.querySelectorAll('.span-required');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    telValidate();
    cpfValidate();
    passwordValidate();
});


function setError(index){
   campos[index].style.border = '3px solid #e63636';
   spam[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '3px solid #048d2d';
    spam[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);   
 }
    else 
    {
        removeError(0);
    
    }
}
    function emailValidate(){
        if(campos[1].value.length < 15)
        {
            setError(1);   
     }
        else 
        {
            removeError(1);
        
        }

    }
    function telValidate(){
        if(campos[2].value.length < 11)
        {
            setError(2);   
     }
        else 
        {
            removeError(2);
        
        }
    }
    function cpfValidate(){
        if(campos[3].value.length == 14)
        {
            removeError(3);
     }
        else 
        {
            setError(3);
        
        }
    }
    function passwordValidate(){
        if(campos[4].value.length <= 8)
        {
            setError(4);   
     }
        else 
        {
            removeError(4);
        
        }
    }
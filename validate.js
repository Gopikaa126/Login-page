document.getElementById('passwordform').addEventListener('submit',function(event)
{
    event.preventDefault();//if this is not used message will disappear

var password=document.getElementById('password').value;
var confirmpassword=document.getElementById('confirmpassword').value;


if(password===confirmpassword)
{
    alert('Password Matched');
}
else
{
    document.getElementById('message').innerHTML= "Password does not match";
}
});

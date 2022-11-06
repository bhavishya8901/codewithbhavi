
var btn = document.getElementById('btn')
function openPage(){
    var search = document.getElementById('search').value;
    if (search === "html"){
        window.open('/html.html')
    }
    if (search === "web development"){
        window.open('/web.html')
    }
    if (search === "css"){
        window.open('/css.html')
    }  if (search === "javascript"){
        window.open('/js.html')
    }  if (search === "home"){
        window.open('/index.html')
    }
}
btn.addEventListener('click',openPage);
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    }
    
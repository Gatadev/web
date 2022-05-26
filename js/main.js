document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {
     e.preventDefault();
    
     document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior: 'smooth',

     });
    
    });
    
    });
    
    

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => { 

document.body.classList.toggle('dark');
btnSwitch.classList.toggle('active');
});


function copiarAlPortapapeles() {

  var aux = document.createElement("input");
  aux.setAttribute("value", "Gata#4494");
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  alert("Tag copiada al portapapeles.");

}
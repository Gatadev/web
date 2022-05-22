document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {
     e.preventDefault();
    
     document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior: 'smooth'
     });
    
    });
    
    });
    

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => { 

document.body.classList.toggle('dark');
btnSwitch.classList.toggle('active');
});
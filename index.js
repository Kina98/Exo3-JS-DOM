// Récupere la case "masquer les paroles"
const checkboxParoles = document.getElementById('masquer-paroles');
const divParoles = document.getElementById('paroles');
const labelParoles = checkboxParoles.nextSibling;
const hr = document.querySelector('hr');

checkboxParoles.addEventListener('click', function() {
  if (checkboxParoles.checked) {
    divParoles.style.display = 'none';
    labelParoles.textContent = 'Afficher les paroles';
    hr.style.display = 'none';
  } else {
    divParoles.style.display = 'block';
    labelParoles.textContent = 'Masquer les paroles';
    hr.style.display = 'block';
  }
});


// Remplacez tous les refrains sauf le premier par [Refrain]
const checkboxRefrains = document.getElementById('masquer-refrains');
const refrains = document.querySelectorAll('.refrain');
const labelRefrains = checkboxRefrains.nextSibling;
const definition = document.querySelectorAll('.definition');
const contenu = document.querySelectorAll('.contenu');

checkboxRefrains.addEventListener('click', function(event) {
  for (let i = 1; i < refrains.length; i++) {
    if (event.target.checked) {
      contenu[i].classList.add('hidden');
      definition[i].classList.remove('hidden');
      labelRefrains.textContent = 'Afficher les refrains';

      definition[i].addEventListener('mouseenter', () => {
          contenu[i].classList.remove('hidden');
          });
      definition[i].addEventListener('mouseleave', () => {
        contenu[i].classList.add('hidden');
        });
    } else {
      contenu[i].classList.remove('hidden');
      definition[i].classList.add('hidden');
      labelRefrains.textContent = 'Masquer les refrains';
    }
    
  }
})

 const paragraph = document.querySelectorAll('p');
 console.log(paragraph);
 paragraph.forEach(element => {
   element.setAttribute('style', 'margin: 0px');
 });


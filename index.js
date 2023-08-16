// Récupere la case "masquer les paroles"
const checkboxParoles = document.getElementById('masquer-paroles');
const divParoles = document.getElementById('paroles');
const labelParoles = checkboxParoles.nextSibling;
const hr = document.body.children[3];

checkboxParoles.addEventListener('click', function() {
  if (checkboxParoles.checked) {
    divParoles.style.display = 'none';
    labelParoles.nodeValue = 'Afficher les paroles';
    hr.style.display = 'none';
  } else {
    divParoles.style.display = 'block';
    labelParoles.nodeValue = 'Masquer les paroles';
    hr.style.display = 'block';
  }
});


// Remplacez tous les refrains sauf le premier par [Refrain]
const checkboxRefrains = document.getElementById('masquer-refrains');
const refrains = document.querySelectorAll('.refrain');
const labelRefrains = checkboxRefrains.nextSibling;
const definition = document.querySelectorAll('.definition');
const contenu = document.querySelectorAll('.contenu');
console.log(refrains);


 checkboxRefrains.addEventListener('click', function() {
  
   if (checkboxRefrains.checked) {
    for (let i = 1; i < refrains.length; i++) {
      refrains[i].children[1].remove();
      definition.forEach(element => {
        element.classList.remove('hidden');
        element.addEventListener('mouseenter', () => {
          for (let i = 1; i < refrains.length; i++) {
            refrains[i].append(contenu[i]);
          }
        });
        element.addEventListener('mouseleave', () => {
          refrains.forEach(element => {
            element.classList.remove('hidden');
          });
          for (let i = 1; i < refrains.length; i++) {
            refrains[i].children[1].remove();
            
          }
        })      
      });
    }
    labelRefrains.nodeValue = 'Afficher les refrains';
    hr.style.display = 'none';
  }else {
      
      labelRefrains.nodeValue = 'Masquer les paroles';
      hr.style.display = 'block';
      for (let i = 0; i < refrains.length; i++) {
        refrains[i].append(contenu[i]);
        definition.forEach(element => {
          element.classList.add('hidden');
        });
      }
      
    }
 });

 const paragraph = document.querySelectorAll('p');
 paragraph.forEach(element => {
   element.setAttribute('style', 'margin: 0px');
 });


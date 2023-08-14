// Récupere la case "masquer les paroles"
const checkboxParoles = document.getElementById('masquer-paroles');
const divParoles = document.getElementById('paroles');
const labelParoles = checkboxParoles.nextSibling;

checkboxParoles.addEventListener('click', function() {
  if (checkboxParoles.checked) {
    divParoles.style.display = 'none';
    labelParoles.nodeValue = 'Afficher les paroles';
  } else {
    divParoles.style.display = 'block';
    labelParoles.nodeValue = 'Masquer les paroles';
  }
});


// Remplacez tous les refrains sauf le premier par [Refrain]
const checkboxRefrains = document.getElementById('masquer-refrains');
const refrains = document.querySelectorAll('.refrain .contenu');
const labelRefrains = checkboxRefrains.nextSibling;
const definition = document.querySelectorAll('.definition');
const contenu = document.querySelectorAll('.contenu');

checkboxRefrains.addEventListener('click', function() {
  if (checkboxRefrains.checked) {
    for (const refrain of refrains) {
      definition.forEach(element => {
        element.classList.remove('hidden');
        element.addEventListener('mouseenter', () => {
          contenu.forEach(element => {
            element.classList.add('hidden');
          });
        });
        element.addEventListener('mouseleave', () => {
          contenu.forEach(element => {
            element.classList.remove('hidden');
          });
        })
        
      }); 
    }
    labelRefrains.nodeValue = 'Afficher les refrains';
  } else {
    refrains.forEach(refrain => {
      refrain.innerHTML = refrain.textContent;
    });
    labelRefrains.nodeValue = 'Masquer les paroles';
  }
});

const para = document.querySelectorAll('p');
para.forEach(element => {
  element.setAttribute('style', 'margin: 0px');
});


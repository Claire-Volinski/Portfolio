// Minimal JS: update year only and keep subtle hero accent removed (sharp layout)

document.addEventListener('DOMContentLoaded', function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});

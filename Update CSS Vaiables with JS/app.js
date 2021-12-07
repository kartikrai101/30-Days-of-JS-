const blur= document.querySelector('#blur'); //this will give you an array
const color= document.querySelector('#color');
const spacing= document.querySelector('#spacing');

function handleUpdate(){
  const suffix= this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

blur.addEventListener('change', handleUpdate);
blur.addEventListener('mousemove', handleUpdate);

color.addEventListener('change', handleUpdate);
color.addEventListener('mousemove', handleUpdate);

spacing.addEventListener('change', handleUpdate);
spacing.addEventListener('mousemove', handleUpdate);

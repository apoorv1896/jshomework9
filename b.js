const Btn = document.getElementById('btn');
const text = document.getElementById('Text');
const Para = document.getElementById('para');

Btn.addEventListener('click' , () => {

    const newtext = text.value;
    const newpara = document.createElement('p');
    newpara.textContent = newtext;
    Para.appendChild(newpara);
    
})
const input = document.getElementById('input');
const CharactersCounter = document.getElementById('CharactersCounter');
const CharactersRemining = document.getElementById('CharactersRemining');

let maxChars = 100;

input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length === maxChars) {
        CharactersCounter.innerHTML = `letters: ${value.length}`;
        CharactersRemining.innerHTML = `letters Remining: ${maxChars - value.length}`;

        input.readOnly = true;

        setTimeout(() => {
            window.alert('tou have reached your letters limit :(')
        }, 1000);
    } else {
        console.log(value.length);
        CharactersCounter.innerHTML = `letters: ${value.length}`;
        CharactersRemining.innerHTML = `letters Remining: ${maxChars - value.length}`;   
    }
    
});

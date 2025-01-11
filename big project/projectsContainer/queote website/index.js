const container = document.getElementById("qContainer");
const generateBtn = document.getElementById("generate");
container.style.display = "none";
const quotes = [{
                quote: "Together we can change the world, just one random act of kindness at a time.",
                author: "Ron Hall"
                },
                {
                quote: "Goals transform a random walk into a chase.",
                author: "Mihaly Csikszentmihalyi"
                },
                {
                quote: "I believe life is an intelligent thing: that things aren't random.",
                author: "Steve Jobs"
                },
                {
                quote: "Random chance plays a huge part in everybody's life.",
                author: "Gary Gygax"
                },
                ]
                
function generate() {
    container.style.display = "block";
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let random = Math.floor(Math.random() * quotes.length);
    h2.textContent = `"${quotes[random].quote}"`;
    p.textContent = `- ${quotes[random].author}`;
    h2.classList.add('h2');
    p.classList.add('p');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(h2);
    container.appendChild(p);
}


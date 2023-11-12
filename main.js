const membri = [];

const membro1 ={
    "nome" : 'Wayne Barnett',
    "ruolo": 'Founder & CEO',
    "foto" : 'img/wayne-barnett-founder-ceo.jpg'
};

membri.push(membro1);

const membro2 ={
    "nome" : 'Angela Caroll',
    "ruolo": 'Chief Editor',
    "foto" : 'img/angela-caroll-chief-editor.jpg'
};

membri.push(membro2);

const membro3 ={
    "nome" : 'Walter Gordon',
    "ruolo": 'Office Manager',
    "foto" : 'img/walter-gordon-office-manager.jpg'
};

membri.push(membro3);

const membro4 ={
    "nome" : 'Angela Lopez',
    "ruolo": 'Social Media Manager',
    "foto" : 'img/angela-lopez-social-media-manager.jpg'
};

membri.push(membro4);

const membro5 ={
    "nome" : 'Scott Estrada',
    "ruolo": 'Developer',
    "foto" : 'img/scott-estrada-developer.jpg'
};

membri.push(membro5);

const membro6 ={
    "nome" : 'Barbara Ramos',
    "ruolo": 'Graphic Designer',
    "foto" : 'img/barbara-ramos-graphic-designer.jpg'
};

membri.push(membro6);

console.log(membri);

for(let i=0; i<membri.length; i++) {
    const card = document.createElement("div")
    card.classList.add("card")

    const nome = document.createElement("h2"); //Ho creato l'elemento e l'ho messo nella costante che si chiama nome
    const ruolo = document.createElement("p");
    const foto = document.createElement ("img");

    card.appendChild(foto);
    card.appendChild(nome);
    card.appendChild(ruolo);

    //Dopo aver creato gli elementi li metto nel main
    const main = document.getElementById("container"); 

    main.appendChild(card);

    //Riempio di contenuto i p 
    nome.innerHTML = membri[i].nome;
    ruolo.innerHTML = membri[i].ruolo;
    foto.src = membri[i].foto;

    
}

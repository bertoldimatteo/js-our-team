// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
// stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente 
// di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, 
// il quale viene inserito nell'array iniziale e viene stampata una nuova card 
// con tutte le informazioni inserite dall'utente.

const teams = [
    {
        teamName: "Wayne Barnett",
        teamRole: "Founder & CEO",
        teamPicture: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        teamName: "Angela Caroll",
        teamRole: "Chief Editor",
        teamPicture: "img/angela-caroll-chief-editor.jpg",
    },
    {
        teamName: "Walter Gordon",
        teamRole: "Office Manager",
        teamPicture: "img/walter-gordon-office-manager.jpg",
    },
    {
        teamName: "Angela Lopez",
        teamRole: "Social Media Manager",
        teamPicture: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        teamName: "Scott Estrada",
        teamRole: "Developer",
        teamPicture: "img/scott-estrada-developer.jpg",
    },
    {
        teamName: "Barbara Ramos",
        teamRole: "Graphic Designer",
        teamPicture: "img/barbara-ramos-graphic-designer.jpg",
    },

]

const container = document.querySelector(".team-container");

for ( let i = 0; i < teams.length; i++) {
    const teamCard = `
        <div class="team-card">
            <div class="card-image">
                <img src="${teams[i].teamPicture}" alt="Wayne Barnett"/>
            </div>
            <div class="card-text">
                <h3>${teams[i].teamName}</h3>
                <p>${teams[i].teamRole}</p>
            </div>
        </div>
        `;

        container.innerHTML += teamCard;
}
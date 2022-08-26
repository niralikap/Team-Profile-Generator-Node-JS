const generateTeam = (team) => {
    console.log(team);

    const html = [];
    
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="column" style= "margin-top: 70px; border-radius: 15px;">
        <div class="card" style= "width: 19rem; box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25)";>
    <div class="card-body" style= "background-color: rgba(0, 102, 255, 0.692); color: white;">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text"><i class="fas fa-mug-hot"></i>Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <span id = "email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
  </div>
  </div>
        `;
        html.push(managerHtml);
    }

    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="column" style= "margin-top: 70px; border-radius: 15px;">
        <div class="card" style= "width: 19rem; box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);">
    <div class="card-body" style= "background-color: rgba(0, 102, 255, 0.692); color: white;">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text"><i class="fas fa-glasses"></i>Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <span id = "email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
      <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li> 
      </ul>
  </div>
  </div>
        `;
        html.push(engineerHtml); 
    }

    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="column" style= "margin-top: 70px; border-radius: 15px;">
        <div class="card" style= "width: 19rem; box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);">
    <div class="card-body" style= "background-color: rgba(0, 102, 255, 0.692); color: white;">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text"><i class="fas fa-user-graduate"></i>Intern</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
    </div>
    </div>
        `;
        html.push(internHtml);
    }


    for(let i=0; i<team.length; i++){
        if(team[i].getRole() === "Manager"){
            generateManager(team[i]);
        }
        if(team[i].getRole() === "Engineer"){
            generateEngineer(team[i]);
        }
        if(team[i].getRole() === "Intern"){
            generateIntern(team[i]);
        }
    }

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Software Engineering Team</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid" style= "background-color: rgba(245, 45, 45, 0.872); margin-left: 50px; margin-right: 50px; margin-top: 30px; height: 100px; text-align: center;">
  <div class="container">
    <h1 class="display-4" style= "color: white; text-align: center;">My Team</h1>
    <p class="lead"></p>
  </div>
</div>

    <main> 
    <div class="row">
    <div class="card-deck" style= "margin-left: 100px; margin-right: 100px;">
    ${generateTeam(team)} 
    </div>
    </div>
    </main>
    
    </body>
    </html>
    `;
}
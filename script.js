let ulQuery = document.querySelector(".thelist");
let inputNameQuery = document.querySelector(".myInput");
let buttonQuery = document.querySelector(".buttonClass");
let ul2Query = document.querySelector(".donelist");

// création de tâche et boutton supprimer et rendre le bouton fonctionnel //

function addTaskt() {
  let liQuery = document.createElement("li");
  liQuery.innerText = inputNameQuery.value;
  ulQuery.appendChild(liQuery);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  liQuery.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {});

  // rajout bouton supprimer quand on rajoute une tâche //

  function deleteTask() {
    let NewQuery = document.createElement("li");
    NewQuery.innerText = inputNameQuery.value;
    ul2Query.appendChild(NewQuery);

    // Pour faire disparaitre dans 5 sc //
    setTimeout(() => {
      NewQuery.remove();
    }, 5000);
  }

  function moveDeletedTask() {
    deleteButton.addEventListener("click", function () {
      let result = confirm("Are you sure you want to delete?");
      if (result) {
        alert("Ok, Task deleted!");
        liQuery.remove();
        deleteTask();
      } else {
        alert("Noted!");
      }

      // alert("You finished" + inputNameQuery.value) //
    });
  }
  moveDeletedTask();
}

// ajouter fonction click //

function clickFunction() {
  buttonQuery.addEventListener("click", function () {
    alert("Nouvelle tâche ajoutée!" + inputNameQuery.value);

    addTaskt();
  });
}

clickFunction();

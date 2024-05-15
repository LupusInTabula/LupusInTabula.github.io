//dropdown menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function FunctionMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function FunctionLogin() {
    document.getElementById("LoginDrop").classList.toggle("show");
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// Sezione che gestisce l'invio del commento
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previeni il comportamento predefinito del form

    // Prendi i valori inseriti dall'utente
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    // Crea un nuovo elemento per il commento
    var newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = '<h5>' + name + '</h5><p>' + comment + '</p>';

    // Aggiungi il nuovo commento alla lista dei commenti
    document.querySelector('.comments').appendChild(newComment);

    // Pulisci il form dopo l'invio
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});


function FunctionMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function FunctionLogin() {
    document.getElementById("LoginDrop").classList.toggle("show");
}

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

/* funzione di ricerca */
function functionSearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myDropdown");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/*sing up*/
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

/* gestione aside bar */
$(window).resize(function() {
    if ($(window).width() <= 992)  // Large breakpoint di Bootstrap
    {
        $('#aside-content').insertAfter('.col-lg-8');
    }
    else
    {
        $('#aside-content').appendTo('.col-lg-4');
    }
});
$(window).resize();

/* gestione data*/
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById('dateParagraph').innerHTML = date;
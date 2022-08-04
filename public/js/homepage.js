function searchBook() {
    document.getElementById('search-output').innerHTML = "";
    fetch("http://openlibrary.org/search.json?q=" + document.getElementById("search-bar").value)
    .then (a => a.json())
    .then (response => {
        for (var i=0; i<10; i++) {
            document.getElementById("search-output").innerHTML+="<h2>" + response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + response.docs[i].+"<br>" +"<br><img src = 'http://covers.openlibrary.org/b/isbn/' + response.docs[i].isbn[0] + -M.jpg'><br>"
        }
    });
}


// function searchBook() {
//     document.getElementById('search-output').innerHTML = "";
//     fetch("http://openlibrary.org/search.json?q=" + document.getElementById("search-bar").value)
//     .then (a => a.json())
//     .then (response => {
//         for (var i=0; i<10; i++) {
//             document.getElementById("search-output").innerHTML+="<h2>" + response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + response.docs[i].+"<br>" +"<br><img src = 'http://covers.openlibrary.org/b/isbn/' + response.docs[i].isbn[0] + -M.jpg'><br>"
//         }
//     });
// }

// Creates initial post
const createdPost = async (event) => {

    event.preventDefault();

    const title = document.querySelector('#created-title').value.trim();
    const entry = document.querySelector('#created-entry').value.trim();

    if (title && entry) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, entry }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('response.statusText');
        }
    }
};

document
    .querySelector('.entry-creation')
    .addEventListener('submit', createdPost);

// Creates reply post
document
    .querySelector('#posts')
    .addEventListener('submit', async (e) => {
        const form = e.target;
        e.preventDefault();

        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                title: form['title'].value,
                entry: form['entry'].value,
                reply_to: form['reply_to'].value
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('response.statusText');
        }
    });


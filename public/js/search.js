const showUsersBtn = document.getElementById('search-users');
const userOutput = document.getElementById('user-output');
const hideUsersBtn = document.getElementById('hide-users');
//removes hidden class off of all users
showUsersBtn.addEventListener('click', showUsers);
hideUsersBtn.addEventListener('click', hideUsers);

// when someone enters a book name and presses the search button the info of the list items pop up
function searchBook() {
    document.getElementById('search-output').innerHTML = "";
    fetch("https://openlibrary.org/search.json?q=" + document.getElementById("search-bar").value)
        .then(a => a.json())
        .then(response => {
            for (var i = 0; i < 10; i++) {
                document.getElementById("search-output").innerHTML += "<h2>" + response.docs[i].title + "</h2>" + response.docs[i].author_name[0] + "<br><img src = 'http://covers.openlibrary.org/b/isbn/" + response.docs[i].isbn[0] + "-M.jpg'><br>"
            }
        });
};
// these two functions toggle the ability to see all users on site
function showUsers() {
    userOutput.classList.remove('hidden');
}

function hideUsers() {
    userOutput.classList.add('hidden');
}

// adds user that the current user to their list that they are following
document
    .querySelector('#user-output')
    .addEventListener('click', async (e) => {
        e.preventDefault();

        if (e.target.classList.contains('follow-btn')) {
            const button = e.target;
            const username = button.getAttribute('_username');
            const response = await fetch('/api/follows', {
                method: 'POST',
                body: JSON.stringify({
                    followed_username: username
                }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('response.statusText');
            }
        }
    });
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

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

var basicTimeline = anime.timeline({
    autoplay: false
});

var pathEls = $(".check");
for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
    .add({
        targets: ".text",
        duration: 1,
        opacity: "0"
    })
    .add({
        targets: ".btn-post",
        duration: 1300,
        height: 10,
        width: 300,
        backgroundColor: "#2B2D2F",
        border: "0",
        borderRadius: 100
    })
    .add({
        targets: ".progress-bar",
        duration: 2000,
        width: 300,
        easing: "linear"
    })
    .add({
        targets: ".btn-post",
        width: 0,
        duration: 1
    })
    .add({
        targets: ".progress-bar",
        width: 80,
        height: 80,
        delay: 500,
        duration: 750,
        borderRadius: 80,
        backgroundColor: "#71DFBE"
    })
    .add({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 200,
        easing: "easeInOutSine"
    });

$(".btn-post").click(function () {
    basicTimeline.play();
});

$(".text").click(function () {
    basicTimeline.play();
});
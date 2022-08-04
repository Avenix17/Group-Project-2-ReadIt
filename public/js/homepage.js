
const createdPost = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#created-title').value.trim();
    const entry = document.querySelector('#created-entry').value.trim();

    if (title && entry) {
        const response = await fetch ('/api/post', {
            method: 'POST',
            body: JSON.stringify({title, entry}),
            headers: { 'Content-Type': 'application/json'},
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


// create post
// async function newFormHandler(event) {
//     event.preventDefault();

//     const title = document.querySelector('input[name="post-title"]').value;
//     const post_content = document.querySelector('input[name="post-content"]').value;

//     const response = await fetch(`/api/post`, {
//       method: 'POST',
//       body: JSON.stringify({
//         title,
//         post_content
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
// }

// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

// // delete post
// async function deleteFormHandler(event) {
//     event.preventDefault();

//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const response = await fetch(`/api/post/${id}`, {
//         method: 'DELETE',
//         body: JSON.stringify({
//           post_id: id
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard/');
//     } else {
//       alert(response.statusText);
//     }

// }

// document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

// //reply post
// async function commentFormHandler(event) {
//     event.preventDefault();

//     const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

//     const post_id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];

//     if (comment_text) {
//         const response = await fetch('/api/post', {
//           method: 'POST',
//           body: JSON.stringify({
//             post_id,
//             comment_text
//           }),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });

//         if (response.ok) {
//           document.location.reload();
//         } else {
//           alert(response.statusText);
//         }
//     }
// }

// document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
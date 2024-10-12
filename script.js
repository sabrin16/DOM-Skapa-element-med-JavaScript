const commentForm = document.querySelector('#comment-form');
const commentsDiv = document.querySelector('#comments');



commentForm.addEventListener('submit', e => {
  e.preventDefault()

  const input = document.querySelector('#comment-input');

  if(input.value === '') return

  const newComment = createCommentElement('input.value');

  commentsDiv.appendChild(newComment)

  input.value = ''
})


function createCommentElement(value) {
const comment = document.createElement('div');
  comment.classList.add('comment');

  comment.addEventListener('click', e => {
    comment.classList.toggle('active')
  })

  const commentText = document.createElement('p')
  commentText.textContent = value;

  comment.appendChild(commentText)

  return comment
}
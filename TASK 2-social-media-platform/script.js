function formatDate() {
  const now = new Date();
  return now.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function addPost() {
  const text = document.getElementById("postText").value.trim();
  if (!text) return;

  const postDiv = document.createElement("div");
  postDiv.className = "post";

  postDiv.innerHTML = `
    <strong>JohnDoe</strong>
    <p>${text}</p>
    <div class="post-meta">
      ❤ <span class="like-count">0</span> &nbsp; | &nbsp; ${formatDate()}
      <a href="#" class="delete" onclick="deletePost(this)">Delete</a>
    </div>
    <div class="comments"></div>
    <input type="text" placeholder="Add a comment" class="comment-input">
    <button class="comment-btn" onclick="addComment(this)">Comment</button>
  `;

  document.getElementById("postsArea").prepend(postDiv);
  document.getElementById("postText").value = "";
}

function deletePost(deleteBtn) {
  const post = deleteBtn.closest(".post");
  post.remove();
}

function addComment(button) {
  const post = button.closest(".post");
  const input = post.querySelector(".comment-input");
  const commentText = input.value.trim();
  if (!commentText) return;

  const commentDiv = document.createElement("div");
  commentDiv.className = "comment";
  commentDiv.innerHTML = `
    <strong>JaneSmith</strong> ${commentText}<br>
    <span class="comment-time">${formatDate()}</span>
  `;

  post.querySelector(".comments").appendChild(commentDiv);
  input.value = "";
}

// Optional: Like functionality (click on heart)
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("like-count")) {
    let count = parseInt(e.target.textContent);
    e.target.textContent = count + 1;
  }
});
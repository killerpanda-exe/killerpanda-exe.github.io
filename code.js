document.getElementById('tweet-btn').addEventListener('click', function() {
    const tweetText = document.getElementById('tweet-input').value.trim();

    if (tweetText !== "") {
        const tweetList = document.getElementById('tweets-list');

        // Create tweet card
        const tweetCard = document.createElement('div');
        tweetCard.className = 'card tweet-card shadow-sm';

        // Create tweet card body
        const tweetCardBody = document.createElement('div');
        tweetCardBody.className = 'card-body';

        // Add profile picture
        const profilePic = document.createElement('img');
        profilePic.src = 'profile-pic.jpg';
        profilePic.alt = 'Profile Picture';
        profilePic.width = 50;
        profilePic.height = 50;
        profilePic.className = 'rounded-circle';

        // Add tweet text
        const tweetTextElement = document.createElement('p');
        tweetTextElement.className = 'tweet-text';
        tweetTextElement.textContent = tweetText;

        // Add edit area
        const editArea = document.createElement('textarea');
        editArea.className = 'edit-area';
        editArea.value = tweetText;

        // Add edit button
        const editBtn = document.createElement('span');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function() {
            if (editArea.classList.contains('active')) {
                tweetTextElement.textContent = editArea.value;
                editArea.classList.remove('active');
            } else {
                editArea.classList.add('active');
            }
        });

        // Add delete button
        const deleteBtn = document.createElement('span');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            tweetCard.style.transition = "opacity 0.5s ease";
            tweetCard.style.opacity = 0;
            setTimeout(() => tweetCard.remove(), 500);
        });

        // Append elements
        tweetCardBody.appendChild(profilePic);
        tweetCardBody.appendChild(tweetTextElement);
        tweetCardBody.appendChild(editArea);
        tweetCardBody.appendChild(editBtn);
        tweetCardBody.appendChild(deleteBtn);
        tweetCard.appendChild(tweetCardBody);

        // Add tweet card to the top of the list
        tweetList.prepend(tweetCard);

        // Clear the textarea
        document.getElementById('tweet-input').value = '';
    }
});

document.getElementById('tweet-input').addEventListener('input', function() {
    const maxChars = 280;
    const currentChars = this.value.length;
    const remainingChars = maxChars - currentChars;
    const charCounter = document.getElementById('char-counter');
    charCounter.textContent = `${remainingChars} characters remaining`;
    charCounter.style.color = remainingChars < 0 ? 'red' : 'inherit';
});

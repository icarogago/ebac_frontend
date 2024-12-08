document.addEventListener("DOMContentLoaded", function() {
    const username = 'icarogago'; // Alterado para o nome de usuário desejado
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Preencher os dados no HTML
            document.getElementById('profile-avatar').src = data.avatar_url;
            document.getElementById('profile-name').textContent = data.name || username;
            document.getElementById('profile-username').textContent = `@${data.login}`;
            document.getElementById('profile-repos').textContent = data.public_repos;
            document.getElementById('profile-followers').textContent = data.followers;
            document.getElementById('profile-following').textContent = data.following;
            document.getElementById('profile-link').href = data.html_url;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
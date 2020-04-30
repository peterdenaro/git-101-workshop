function fetchGithubInformation(username) {
    fetch(`https://api.github.com/users/${username.value}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            document.getElementById('imagen').innerHTML = "<img class=\"imagen\" src=" + myJson['avatar_url'] + "></img>";
            document.getElementById('usuario').innerHTML = `<p><b>Usuario:</b> ${myJson['login']}</p>`;;
            document.getElementById('nombre').innerHTML = `<p><b>Nombre:</b> ${myJson['name']}</p>`;
            document.getElementById('seguidores').innerHTML = `<p><b>Seguidores:</b> ${myJson['followers']}</p>`;
            document.getElementById('repositorios_publicos').innerHTML = `<p><b>Repositorios publicos:</b> ${myJson['public_repos']}</p>`;
        });
}
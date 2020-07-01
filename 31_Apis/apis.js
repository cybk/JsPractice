const baseEndpoint = 'https://api.github.com';
const usersEndPoint = `${baseEndpoint}/users`;

const user = document.querySelector('.user');

async function displayUser(username) {
    user.textContent = 'Loading...';
    const response = await fetch(`${usersEndPoint}/${username}`);
    const data = await response.json();
    console.log(data);
    console.log(data.blog);
    console.log(data.name);
    console.log(data.location);

    user.textContent = `${data.name} - ${data.blog}`;
}

const handleError = err => {
    console.log('Oh No!!!!!');
    console.log(err);
};

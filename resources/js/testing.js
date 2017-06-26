document.querySelector('.login-btn').addEventListener('click', changePage);
document.querySelector('.logout-btn').addEventListener('click', changePage);

function changePage() {
    document.querySelector('.login-page').classList.toggle('show');
    document.querySelector('.user-page').classList.toggle('show');
}
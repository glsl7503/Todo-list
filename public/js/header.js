/**
 * header 관련 정적 js 파일입니다.
 */

document.addEventListener('DOMContentLoaded', () => {
    const logout = document.getElementById('logout');
    const logo = document.getElementById('logo');    
    if (logout) {
        logout.addEventListener('click', handleLogout);
    }

    logo.addEventListener('click', () => {
        window.location.href = '/';
    });
    
});

function handleLogout() {
    fetch('/auth/logout')
        .then(res => res.json())
        .then(data => {
            if (!data.ok) throw new Error(data.message);
            window.location.href = '/';
        })
        .catch(err => alert(err.message));
}
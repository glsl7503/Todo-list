/**
 * 로그인 관련 js 정적 파일 입니다.
 */

const signForm = document.getElementById("signForm");
signForm.addEventListener('submit', handleSignIn);

function handleSignIn(e) {
    e.preventDefault(); // 폼 기본 제출 막기

    const formData = new FormData(signForm);
    const userId = formData.get("userId");
    const password = formData.get("password");

    fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
    })
    .then(res => res.json())
    .then(data => {
        if (!data.ok) {
            throw new Error(data.message);
        }
        window.location.href = '/todo';
    })
    .catch(err => alert(err));
}
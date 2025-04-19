/**
 * 회원가입 관련 js 정적 파일 입니다.
 */

const form = document.getElementById("signForm");
form.addEventListener('submit', signUp);

function signUp(e) {
    // 기본 폼 제출을 막음
    e.preventDefault();

    const formData = new FormData(form);
    const userId = formData.get("userId");
    const password = formData.get("password");
    const confirmPwd = formData.get("confirmPassword");

    fetch("/auth/signUp", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, password, confirmPwd }),
    })
    .then(res => res.json())
    .then(data => {
        if (!data.ok) {
            throw new Error(data.message);
        }

        alert("회원가입 성공");
        return window.location.href = '/sign-in';
    })
    .catch(err => alert(err))
}
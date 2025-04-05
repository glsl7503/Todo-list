
const signForm = document.getElementById("signForm");
signForm.addEventListener('submit', handleSignIn);

function handleSignIn(e) {
    e.preventDefault(); // 폼 기본 제출 막기

    const formData = new FormData(signForm);
    const userId = formData.get("userId");
    const password = formData.get("password");

    fetch('/sign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
    })
    .then(res => res.json())
    .then(data => {
        if (data.ok) {
            alert('로그인 성공');
        } else {
            alert('로그인 실패');
        }
    })
    .catch(err => console.error(err));
}

/**
 * 회원가입 관련 js 정적 파일 입니다.
 */

window.addEventListener('load', () => {
  const forms = document.getElementsByClassName('validation-form');
  Array.prototype.filter.call(forms, (form) => {
    form.addEventListener('submit', function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);

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
        window.location.href = '/sign-in';
    })
    .catch(err => alert(err))
}
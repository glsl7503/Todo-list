// 할 일 항목 추가 함수
function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (!todoText) {
        alert("텍스트를 작성해주세요.");
    }

    fetch("/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: todoText }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.ok) {
            alert("저장 성공");
          }
        })
        .catch(e => alert("저장 실패"));

    todoInput.value = ""; // 입력 필드 초기화
    renderTodos(); // 할 일 목록을 다시 렌더링
}

// 할 일 목록을 화면에 렌더링하는 함수
function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // 기존 목록 초기화

    // 할 일 목록을 렌더링
    todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        todoItem.innerHTML = `
        ${todo}
        <button class="btn btn-danger btn-sm" onclick="removeTodo(${index})">삭제</button>
        `;
        todoList.appendChild(todoItem);
    });
}

// 할 일 항목 삭제 함수
function removeTodo(index) {
    todos.splice(index, 1); // 해당 인덱스의 항목 삭제
    renderTodos(); // 목록 업데이트
}

document.addEventListener("DOMContentLoaded", () => {
  // 추가 버튼 클릭 시 할 일 추가
  document.getElementById("addTodoBtn").addEventListener("click", addTodo);
  // 엔터 키로도 추가 가능하게 설정
  document.getElementById("todoInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });
});

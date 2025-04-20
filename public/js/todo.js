/**
 * TO-DO 할일 리스트 js 정적 파일 입니다.
 */


let todos;

// 페이지 로딩 후 조회 함수 호출
document.addEventListener("DOMContentLoaded", () => {

  // 추가 버튼 클릭 시 할 일 추가
  document.getElementById("addTodoBtn").addEventListener("click", addTodo);

  // 엔터 키로도 추가 가능하게 설정
  document.getElementById("todoInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  getTodo();
});


/**
 * [get] 기능 함수
 * @param e 이벤트 핸들러 방지 
 */
function getTodo(e) {
  if (e) e.preventDefault();

  fetch("/todo/get")
  .then(res => res.json())
  .then(data => {
    if (!data.ok) {
      throw new Error(data.message);
    }
    
    todos = data.data;
    renderTodos();
  })
  .catch(e => {
    todos = [];
    alert("할 일 목록을 가져오는 데 실패했습니다.");
  });
}

/**
 * [create] 기능 함수
 */
function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (!todoText) {
        alert("텍스트를 작성해주세요.");
    }

    fetch("/todo/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: todoText })
    })
    .then(res => res.json())
    .then(data => {
      if (!data.ok) {
        throw new Error(data.message);
      }
    })
    .catch(e => alert("저장 실패"));

    todoInput.value = ""; // 입력 필드 초기화
    getTodo(); // 할 일 목록을 다시 렌더링
}

/**
 * 조회해온 list 렌더링 이벤트 함수
 * @return 
 */
function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // 기존 목록 초기화

  if (!todos || todos.length === 0) {
    todoList.innerHTML = `<li class="list-group-item">등록된 할 일이 없습니다.</li>`;
    return;
  }

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    todoItem.innerHTML = `
      ${todo.text}
      <button class="btn btn-danger btn-sm" onclick="removeTodo(${index})">삭제</button>
    `;
    todoList.appendChild(todoItem);
  });
}
let tasks = [];
const input = document.querySelector("#input");
const btnThem = document.querySelector("#them");
const danhSach = document.querySelector("#danh-sach");

function render() {
  danhSach.innerHTML = tasks
    .map(
      (task, i) => `
    <li>
      ${task}
      <button onclick="xoaTask(${i})">Xóa</button>
    </li>
  `,
    )
    .join("");
}

btnThem.addEventListener("click", () => {
  const text = input.value;
  if (text === "") return;
  tasks.push(text);
  input.value = "";
  render();
});

function xoaTask(index) {
  tasks = tasks.filter((_, i) => i !== index);
  render();
}

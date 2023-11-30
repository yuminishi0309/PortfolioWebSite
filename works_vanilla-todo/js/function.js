const inputText = document.querySelector('#input-text');
const inputButton = document.querySelector('#input-button');
const list = document.querySelector('#list');

const addTasks = (task) => {
  // 1.入力したタスクの追加----------------
  if (!task) return
  const listItem = document.createElement('li');
  const showItem = list.appendChild(listItem);
  showItem.innerHTML = task;

  // 2. タスクに削除ボタンを付与----------------
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete";
  listItem.appendChild(deleteButton);

  // 3. 削除ボタンをクリックし、イベントを発動（タスク削除）----------------
  deleteButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};

// 追加ボタンをクリックし、イベントを発動（タスク追加）
inputButton.addEventListener('click', (evt) =>{
  evt.preventDefault();
  const task = inputText.value;
  addTasks(task);
  inputText.value = '';
});

// 削除ボタンにタスクを消す機能を追加
const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li')
  chosenTask.remove();
};


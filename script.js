function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark as complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

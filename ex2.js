document.querySelector('#nameInput').addEventListener('input', function(e) {
  document.querySelector('#greeting').textContent = `안녕하세요, ${e.target.value}님!`;
});

function submitGuestbook() {
  var name = document.getElementById('gb-name').value || '匿名访客';
  var message = document.getElementById('gb-message').value;
  if (!message.trim()) {
    alert('请输入留言内容');
    return;
  }
  var title = encodeURIComponent('留言板 - ' + name);
  var body = encodeURIComponent(message);
  window.open('https://github.com/yunLin0/yunLin0.github.io/discussions/new?category=general&title=' + title + '&body=' + body, '_blank');
}

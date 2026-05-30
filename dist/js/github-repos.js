async function loadRepos() {
  try {
    var res = await fetch('https://api.github.com/users/yunLin0/repos?sort=updated&per_page=6');
    var repos = await res.json();
    var container = document.getElementById('github-repos');

    if (!Array.isArray(repos) || repos.length === 0) {
      container.innerHTML = '<p style="color: var(--sl-color-gray-4);">暂无公开仓库</p>';
      return;
    }

    var langColors = {
      'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'Python': '#3572A5',
      'Java': '#b07219', 'HTML': '#e34c26', 'CSS': '#563d7c',
      'Go': '#00ADD8', 'Rust': '#dea584', 'C': '#555555',
      'C++': '#f34b7d', 'Shell': '#89e051', 'Vue': '#41b883',
    };

    var html = '';
    for (var i = 0; i < repos.length; i++) {
      var repo = repos[i];
      var langHtml = '';
      if (repo.language) {
        var color = langColors[repo.language] || '#999';
        langHtml = '<span><span class="repo-lang-dot" style="background:' + color + '"></span>' + repo.language + '</span>';
      }
      html += '<a href="' + repo.html_url + '" target="_blank" class="github-card">';
      html += '<div class="repo-name">📦 ' + repo.name + '</div>';
      html += '<div class="repo-desc">' + (repo.description || '暂无描述') + '</div>';
      html += '<div class="repo-meta">' + langHtml;
      html += '<span>⭐ ' + repo.stargazers_count + '</span>';
      html += '<span>🍴 ' + repo.forks_count + '</span>';
      html += '</div></a>';
    }
    container.innerHTML = html;
  } catch (e) {
    document.getElementById('github-repos').innerHTML = '<p style="color: var(--sl-color-gray-4);">加载失败，请稍后重试</p>';
  }
}
loadRepos();

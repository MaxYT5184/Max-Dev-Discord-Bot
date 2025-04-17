(async () => {
  const code = localStorage.getItem('discord_code');
  if (!code) return;

  // For demo only: Normally you'd exchange this server-side for a token
  document.getElementById('username').textContent = "Demo User";
  document.getElementById('avatar').src = "https://cdn.discordapp.com/embed/avatars/1.png";
  document.getElementById('guilds').innerHTML = "<p>[Server List Placeholder]</p>";
})();
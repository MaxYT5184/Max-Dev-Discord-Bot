document.addEventListener('DOMContentLoaded', () => {
  // ✅ Simulated Discord user
  const user = {
    username: "MaxYT",
    display_name: "Max the Dev",
    id: "123456789012345678",
    avatar: "a_84f8f97f4d295e7ac57dbbcbadfaa3c0", // replace with real hash later
  };

  // ✅ Simulated servers the bot is in
  const guilds = [
    {
      id: "111111111111111111",
      name: "Max's World",
      icon: "a_b4e8b8c3d8f997be332e3d7bbdc3fcdc",
      member_count: 482,
    },
    {
      id: "222222222222222222",
      name: "Dev Den",
      icon: null,
      member_count: 102,
    }
  ];

  // Update profile
  const usernameElem = document.getElementById('username');
  const avatarElem = document.getElementById('avatar');

  usernameElem.textContent = `${user.display_name} (@${user.username})`;
  avatarElem.src = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/1.png`;

  // Display servers
  const guildsContainer = document.getElementById('guilds');
  guildsContainer.innerHTML = '';

  guilds.forEach(guild => {
    const iconUrl = guild.icon
      ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
      : 'https://cdn.discordapp.com/embed/avatars/1.png';

    const card = document.createElement('div');
    card.className = 'guild-card';
    card.innerHTML = `
      <img src="${iconUrl}" alt="${guild.name}" width="64" height="64" />
      <h3>${guild.name}</h3>
      <p>Members: ${guild.member_count}</p>
      <a href="https://discord.com/channels/${guild.id}" target="_blank">Manage Server</a>
    `;
    guildsContainer.appendChild(card);
  });
});

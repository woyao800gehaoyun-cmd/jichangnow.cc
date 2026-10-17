const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const inReviewsFolder = location.pathname.includes('/reviews/');
const base = inReviewsFolder ? '../' : '';
const currentFile = location.pathname.split('/').pop() || 'index.html';

const siteThemes = [
  { id: 'light', name: '云白', color: '#f4f7f6', icon: '☀' },
  { id: 'ocean', name: '海盐蓝', color: '#eaf6fb', icon: '≈' },
  { id: 'sand', name: '暖沙', color: '#fbf4e8', icon: '◒' },
  { id: 'dark', name: '深夜', color: '#07111f', icon: '☾' }
];
const savedTheme = localStorage.getItem('site-theme') || 'light';
const initialTheme = siteThemes.some(theme => theme.id === savedTheme) ? savedTheme : 'light';
document.documentElement.dataset.theme = initialTheme;

const siteHeader = document.querySelector('.site-header');
if (siteHeader && !document.querySelector('.theme-picker')) {
  const picker = document.createElement('div');
  picker.className = 'theme-picker';
  picker.innerHTML = `<button class="theme-toggle" type="button" aria-expanded="false" aria-label="切换网站主题"><span class="theme-dot"></span><span class="theme-label">主题</span></button><div class="theme-menu" role="menu">${siteThemes.map(theme => `<button type="button" role="menuitem" data-theme-value="${theme.id}"><i style="background:${theme.color}">${theme.icon}</i><span>${theme.name}</span><b>${theme.id === initialTheme ? '✓' : ''}</b></button>`).join('')}</div>`;
  const toggle = picker.querySelector('.theme-toggle');
  const menu = picker.querySelector('.theme-menu');
  const applyTheme = themeId => {
    document.documentElement.dataset.theme = themeId;
    localStorage.setItem('site-theme', themeId);
    picker.querySelectorAll('[data-theme-value]').forEach(button => {
      button.querySelector('b').textContent = button.dataset.themeValue === themeId ? '✓' : '';
    });
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', event => {
    event.stopPropagation();
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', event => {
    const button = event.target.closest('[data-theme-value]');
    if (button) applyTheme(button.dataset.themeValue);
  });
  document.addEventListener('click', event => {
    if (!picker.contains(event.target)) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  siteHeader.appendChild(picker);
}

if (nav) {
  const navigation = [
    ['首页', 'index.html', currentFile === 'index.html'],
    ['最新文章', 'blog.html', currentFile === 'blog.html' || currentFile === 'post.html'],
    ['梯子推荐', 'recommendations.html', currentFile === 'recommendations.html'],
    ['梯子评测', 'reviews.html', currentFile === 'reviews.html' || inReviewsFolder],
    ['客户端教程', 'tutorials.html', currentFile === 'tutorials.html'],
    ['客户端下载', 'downloads.html', currentFile === 'downloads.html'],
    ['AI 工具', 'ai-tools.html', currentFile === 'ai-tools.html'],
    ['流媒体工具', 'streaming-tools.html', currentFile === 'streaming-tools.html'],
    ['苹果 ID 指南', 'apple-id-guide.html', currentFile === 'apple-id-guide.html'],
    ['免费节点', 'free-nodes.html', currentFile === 'free-nodes.html'],
    ['关于我们', 'about.html', currentFile === 'about.html'],
    ['联系我们', 'contact.html', currentFile === 'contact.html']
  ];
  nav.setAttribute('aria-label', '主导航');
  nav.innerHTML = navigation.map(([label, file, active]) => `<a class="${active ? 'active' : ''}" href="${base}${file}">${label}</a>`).join('');
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
}

document.querySelectorAll('details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('details').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

const contactCopy = document.querySelector('[data-contact-copy]');
if (contactCopy) {
  contactCopy.addEventListener('click', async () => {
    const type = document.querySelector('#contactType')?.value || '内容咨询';
    const name = document.querySelector('#contactName')?.value.trim() || '未填写称呼';
    const message = document.querySelector('#contactMessage')?.value.trim();
    const feedback = document.querySelector('#contactFeedback');
    if (!message) {
      if (feedback) feedback.textContent = '请先填写具体内容。';
      return;
    }
    const text = `【星链测评站联系信息】\n类型：${type}\n称呼：${name}\n内容：${message}`;
    try {
      await navigator.clipboard.writeText(text);
      if (feedback) feedback.textContent = '联系信息已复制，可粘贴到你准备使用的邮箱或沟通工具。';
    } catch {
      if (feedback) feedback.textContent = text;
    }
  });
}

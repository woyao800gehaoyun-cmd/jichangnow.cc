(function(){
  const posts = (window.BLOG_POSTS || []).slice().sort((a,b)=>b.date.localeCompare(a.date));
  const esc = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const card = post => `<article class="blog-post-row"><a class="post-thumb ${post.cover}" href="${window.postUrl(post)}"><span>${esc(post.category)}</span><b>${esc(post.mark)}</b></a><div class="post-row-body"><div class="post-kicker"><span>${esc(post.category)}</span><time datetime="${post.date}">${esc(post.displayDate)}</time></div><h2><a href="${window.postUrl(post)}">${esc(post.title)}</a></h2><p>${esc(post.excerpt)}</p><div class="post-row-foot"><span>${esc(post.readingTime)}阅读</span><div>${post.tags.map(tag=>`<a href="blog.html?tag=${encodeURIComponent(tag)}">#${esc(tag)}</a>`).join(' ')}</div></div></div></article>`;

  function categoryCounts(){
    return posts.reduce((acc,p)=>{acc[p.category]=(acc[p.category]||0)+1;return acc},{});
  }
  function renderSidebar(){
    const categories = document.querySelector('#blogCategories');
    if(categories){
      const counts=categoryCounts();
      categories.innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([name,total])=>`<a href="blog.html?category=${encodeURIComponent(name)}"><span>${esc(name)}</span><b>${total}</b></a>`).join('');
    }
    const archive=document.querySelector('#blogArchive');
    if(archive){
      const months={}; posts.forEach(p=>{const key=p.date.slice(0,7);months[key]=(months[key]||0)+1});
      archive.innerHTML=Object.entries(months).map(([month,total])=>`<a href="blog.html?month=${month}"><span>${month.replace('-',' 年 ')} 月</span><b>${total}</b></a>`).join('');
    }
  }

  const lastUpdated=document.querySelector('#lastUpdated');
  if(lastUpdated&&posts[0]) lastUpdated.textContent=posts[0].date.replaceAll('-','.');

  const featured = document.querySelector('#featuredPost');
  if(featured){
    const post=posts.find(p=>p.featured)||posts[0];
    featured.innerHTML=`<a class="featured-cover ${post.cover}" href="${window.postUrl(post)}"><span>本周置顶</span><b>${esc(post.mark)}</b></a><div class="featured-content"><div class="post-kicker"><span>${esc(post.category)}</span><time>${esc(post.displayDate)}</time></div><h2><a href="${window.postUrl(post)}">${esc(post.title)}</a></h2><p>${esc(post.excerpt)}</p><div class="tag-line">${post.tags.map(t=>`<span>#${esc(t)}</span>`).join('')}</div><a class="read-link" href="${window.postUrl(post)}">继续阅读 →</a></div>`;
  }
  const latest=document.querySelector('#latestPosts');
  if(latest) latest.innerHTML=posts.slice(1,7).map(card).join('');
  const popular=document.querySelector('#popularPosts');
  if(popular) popular.innerHTML=posts.slice(0,5).map((p,i)=>`<a href="${window.postUrl(p)}"><b>0${i+1}</b><span>${esc(p.title)}</span></a>`).join('');
  renderSidebar();

  const allList=document.querySelector('#allPosts');
  if(allList){
    const params=new URLSearchParams(location.search); let active=params.get('category')||'全部'; const tag=params.get('tag'); const month=params.get('month');
    const search=document.querySelector('#blogSearch'); const filters=document.querySelector('#blogFilters'); const result=document.querySelector('#blogResultCount');
    const cats=['全部',...Object.keys(categoryCounts())];
    filters.innerHTML=cats.map(c=>`<button class="blog-filter ${c===active?'active':''}" data-category="${esc(c)}">${esc(c)}</button>`).join('');
    function render(){
      const query=(search.value||'').trim().toLowerCase();
      const shown=posts.filter(p=>(active==='全部'||p.category===active)&&(!tag||p.tags.includes(tag))&&(!month||p.date.startsWith(month))&&(!query||`${p.title} ${p.excerpt} ${p.tags.join(' ')}`.toLowerCase().includes(query)));
      allList.innerHTML=shown.map(card).join('')||'<div class="blog-empty"><h2>没有找到文章</h2><p>换一个关键词或分类试试。</p></div>';
      result.textContent=`共 ${shown.length} 篇文章${tag?` · 标签 #${tag}`:''}${month?` · ${month}`:''}`;
    }
    filters.addEventListener('click',e=>{const btn=e.target.closest('button');if(!btn)return;active=btn.dataset.category;filters.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===btn));render()});
    search.addEventListener('input',render); render();
  }

  const article=document.querySelector('#dynamicArticle');
  if(article){
    const slug=new URLSearchParams(location.search).get('slug'); const post=posts.find(p=>p.slug===slug&&p.content);
    if(!post){article.innerHTML='<div class="blog-empty"><h1>文章不存在</h1><p>这篇文章可能已移动或尚未发布。</p><a class="button button-primary" href="blog.html">返回文章列表</a></div>';return}
    document.title=`${post.title}｜星链测评站`;
    article.innerHTML=`<div class="article-breadcrumb"><a href="index.html">首页</a> / <a href="blog.html">文章</a> / ${esc(post.category)}</div><header class="article-header"><span class="eyebrow"><i></i> ${esc(post.category)}</span><h1>${esc(post.title)}</h1><p>${esc(post.excerpt)}</p><div class="article-meta-line"><time datetime="${post.date}">${esc(post.displayDate)}</time><span>${esc(post.readingTime)}阅读</span><span>星链测评站编辑</span></div></header><div class="article-cover ${post.cover}"><span>${esc(post.category)}</span><b>${esc(post.mark)}</b></div><div class="article-prose">${post.content}<div class="article-tags">${post.tags.map(t=>`<a href="blog.html?tag=${encodeURIComponent(t)}">#${esc(t)}</a>`).join('')}</div></div>`;
    const related=document.querySelector('#relatedPosts');
    if(related){
      const matched=posts.filter(p=>p.slug!==post.slug&&(p.category===post.category||p.tags.some(t=>post.tags.includes(t))));
      const fallback=posts.filter(p=>p.slug!==post.slug&&!matched.includes(p));
      related.innerHTML=[...matched,...fallback].slice(0,3).map(p=>`<a href="${window.postUrl(p)}"><span>${esc(p.category)}</span><b>${esc(p.title)}</b></a>`).join('');
    }
  }
})();

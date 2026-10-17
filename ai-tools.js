const toolCategories = [
  ['all','全部'],['assistant','对话与通用助手'],['research','搜索与研究'],['coding','编程与建站'],
  ['office','写作与办公'],['design','图片与设计'],['video','视频与数字人'],['audio','音频与会议'],['automation','自动化与模型平台']
];

const tools = [
  ['ChatGPT','通用对话、写作、资料梳理与多模态任务。','https://chatgpt.com/','assistant'],
  ['Claude','长文阅读、写作与复杂问题讨论。','https://claude.ai/','assistant'],
  ['Gemini','Google 的通用 AI 助手与多模态问答入口。','https://gemini.google.com/','assistant'],
  ['Microsoft Copilot','微软的通用对话与搜索助手。','https://copilot.microsoft.com/','assistant'],
  ['Grok','xAI 的对话、推理与内容生成工具。','https://grok.com/','assistant'],
  ['DeepSeek','中文问答、推理与代码辅助。','https://chat.deepseek.com/','assistant'],
  ['Kimi','中文长文阅读、搜索与日常问答。','https://www.kimi.com/','assistant'],
  ['通义千问 Qwen','阿里巴巴的通用对话与内容创作入口。','https://www.qwen.ai/','assistant'],
  ['豆包','字节跳动的中文对话与创作助手。','https://www.doubao.com/','assistant'],
  ['腾讯元宝','腾讯的中文问答、搜索与内容处理助手。','https://yuanbao.tencent.com/','assistant'],
  ['Z.ai（智谱）','GLM 模型的对话与智能体入口。','https://z.ai/chat','assistant'],
  ['Mistral Le Chat','Mistral 的通用对话与写作工具。','https://chat.mistral.ai/','assistant'],
  ['Meta AI','Meta 的对话与创意助手。','https://www.meta.ai/','assistant'],
  ['Poe','在同一入口探索多个官方与社区机器人。','https://poe.com/','assistant'],
  ['Character.AI','角色对话与互动创作平台。','https://character.ai/','assistant'],
  ['Perplexity','带来源线索的网页搜索与问题研究。','https://www.perplexity.ai/','research'],
  ['You.com','AI 搜索与多模型研究入口。','https://you.com/','research'],
  ['Semantic Scholar','检索学术论文并发现相关研究。','https://www.semanticscholar.org/','research'],
  ['Genspark','聚合搜索、任务研究与内容整理。','https://www.genspark.ai/','research'],
  ['Elicit','论文检索、摘要与证据整理。','https://elicit.com/','research'],
  ['Consensus','围绕学术论文寻找研究结论。','https://consensus.app/','research'],
  ['NotebookLM','基于自有资料构建笔记、问答与摘要。','https://notebooklm.google.com/','research'],
  ['SciSpace','阅读和理解论文的研究工作台。','https://scispace.com/','research'],
  ['ResearchRabbit','从论文关系发现相关文献。','https://www.researchrabbit.ai/','research'],
  ['GitHub Copilot','IDE 与 GitHub 工作流中的编程辅助。','https://github.com/features/copilot','coding'],
  ['Cursor','集成 AI 对话与编辑能力的代码编辑器。','https://cursor.com/','coding'],
  ['Devin','面向软件任务的 AI 开发代理。','https://devin.ai/','coding'],
  ['OpenAI Codex','面向代码库任务的 AI 编程工具。','https://openai.com/codex/','coding'],
  ['Claude Code','在终端和编辑器中处理代码任务。','https://code.claude.com/docs/en/overview','coding'],
  ['Gemini CLI','Google 发布的终端 AI 编程工具。','https://github.com/google-gemini/gemini-cli','coding'],
  ['Replit Agent','在浏览器内生成、修改和运行应用。','https://replit.com/ai','coding'],
  ['v0','通过自然语言制作网页和界面原型。','https://v0.app/','coding'],
  ['Bolt','在浏览器里快速构建 Web 应用。','https://bolt.new/','coding'],
  ['Lovable','用对话生成并迭代应用原型。','https://lovable.dev/','coding'],
  ['JetBrains AI','在 JetBrains 开发工具中使用 AI 辅助。','https://www.jetbrains.com/ai/','coding'],
  ['Amazon Q Developer','AWS 开发与代码任务助手。','https://aws.amazon.com/q/developer/','coding'],
  ['Notion AI','在笔记和工作区内撰写、整理与检索。','https://www.notion.com/product/ai','office'],
  ['Grammarly','英文写作修改、语气调整与校对。','https://www.grammarly.com/','office'],
  ['QuillBot','改写、摘要与语言校对。','https://quillbot.com/','office'],
  ['Gamma','生成演示文稿和网页式内容。','https://gamma.app/','office'],
  ['Canva Magic Studio','在 Canva 中制作图文、演示与视觉内容。','https://www.canva.com/magic/','office'],
  ['Microsoft 365 Copilot','在 Microsoft 365 应用中辅助文档与协作。','https://www.microsoft.com/microsoft-365/copilot/','office'],
  ['Gemini for Workspace','Google Workspace 中的写作与协作功能。','https://workspace.google.com/solutions/ai/','office'],
  ['Jasper','面向营销团队的文案与内容工作流。','https://www.jasper.ai/','office'],
  ['Copy.ai','营销文案与业务流程自动化。','https://www.copy.ai/','office'],
  ['Midjourney','以提示词探索视觉概念与图像生成。','https://www.midjourney.com/','design'],
  ['Adobe Firefly','Adobe 的图像生成与创意编辑工具。','https://www.adobe.com/products/firefly.html','design'],
  ['Ideogram','图像生成、字体与海报方向探索。','https://ideogram.ai/','design'],
  ['Leonardo AI','图像生成、素材编辑与创作工作台。','https://leonardo.ai/','design'],
  ['Recraft','图形、插画与品牌视觉制作。','https://www.recraft.ai/','design'],
  ['Krea','图像生成、实时创作与视觉调整。','https://www.krea.ai/','design'],
  ['Figma Make','从提示词与设计稿创建交互原型。','https://www.figma.com/make/','design'],
  ['Stability AI','图像模型、创意工具与开发接口。','https://stability.ai/','design'],
  ['Runway','视频生成与后期创作工作流。','https://runwayml.com/','video'],
  ['Pika','短视频生成与创意效果制作。','https://pika.art/','video'],
  ['Luma Dream Machine','从文字或图片探索视频镜头。','https://lumalabs.ai/dream-machine','video'],
  ['可灵 Kling','快手旗下的 AI 视频创作平台。','https://kling.ai/','video'],
  ['Google Flow','Google 的图像与视频创意工作台。','https://flow.google.com/','video'],
  ['HeyGen','数字人、口播与视频翻译制作。','https://www.heygen.com/','video'],
  ['Synthesia','以数字人制作培训与讲解视频。','https://www.synthesia.io/','video'],
  ['ElevenLabs','语音合成、配音与声音工具。','https://elevenlabs.io/','audio'],
  ['Suno','根据描述生成并编辑音乐。','https://suno.com/','audio'],
  ['Udio','歌曲生成、延展与混音创作。','https://www.udio.com/','audio'],
  ['Descript','以文本方式编辑音视频和播客。','https://www.descript.com/','audio'],
  ['Adobe Podcast','录音、语音增强与播客处理。','https://podcast.adobe.com/','audio'],
  ['Murf','商业配音与语音生成工具。','https://murf.ai/','audio'],
  ['Otter','会议转写、摘要与协作记录。','https://otter.ai/','audio'],
  ['Fireflies.ai','会议录音整理、摘要和检索。','https://fireflies.ai/','audio'],
  ['Zapier AI','把 AI 步骤接入跨应用自动化流程。','https://zapier.com/ai','automation'],
  ['Make','以可视化流程连接应用与 AI 服务。','https://www.make.com/','automation'],
  ['n8n','可自托管的工作流与 AI 自动化平台。','https://n8n.io/','automation'],
  ['Dify','构建 AI 应用、知识库和智能体流程。','https://dify.ai/','automation'],
  ['Coze','可视化搭建智能体与应用。','https://www.coze.com/','automation'],
  ['Flowise','以可视化方式搭建 LLM 工作流。','https://flowiseai.com/','automation'],
  ['Hugging Face','模型、数据集和演示应用社区。','https://huggingface.co/','automation'],
  ['Ollama','在本地运行和管理开放模型。','https://ollama.com/','automation'],
  ['LM Studio','桌面本地模型下载、对话与 API 服务。','https://lmstudio.ai/','automation'],
  ['Replicate','通过 API 运行多种 AI 模型。','https://replicate.com/','automation'],
  ['OpenRouter','通过统一接口调用不同模型提供方。','https://openrouter.ai/','automation']
];

const grid = document.querySelector('#toolsGrid');
const filters = document.querySelector('#toolFilters');
const search = document.querySelector('#toolSearch');
const count = document.querySelector('#toolCount');
const empty = document.querySelector('#emptyState');
let currentCategory = 'all';

function initials(name){return name.replace(/[^A-Za-z\u4e00-\u9fa5]/g,'').slice(0,2).toUpperCase()}
function renderTools(){
  const query = search.value.trim().toLowerCase();
  const visible = tools.filter(([name,desc,,cat]) => (currentCategory==='all'||cat===currentCategory) && (`${name} ${desc}`.toLowerCase().includes(query)));
  grid.innerHTML = visible.map(([name,desc,url,cat]) => `<article class="tool-card" data-category="${cat}"><div class="tool-icon">${initials(name)}</div><h3>${name}</h3><p>${desc}</p><a href="${url}" target="_blank" rel="noopener noreferrer">打开官网 ↗</a></article>`).join('');
  count.textContent = `当前显示 ${visible.length} / ${tools.length} 款工具`;
  empty.classList.toggle('show', visible.length===0);
}

toolCategories.forEach(([id,label])=>{const btn=document.createElement('button');btn.className=`filter-button${id==='all'?' active':''}`;btn.textContent=label;btn.dataset.category=id;btn.addEventListener('click',()=>{currentCategory=id;document.querySelectorAll('.filter-button').forEach(x=>x.classList.toggle('active',x===btn));renderTools()});filters.append(btn)});
search.addEventListener('input',renderTools);
renderTools();

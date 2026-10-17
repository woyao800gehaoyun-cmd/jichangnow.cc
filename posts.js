window.BLOG_POSTS = [
  {
    slug:'guangnianti-review',
    title:'光年梯机场怎么样？¥18 月付 120GB 套餐完整分析',
    category:'机场测评', date:'2026-10-16', displayDate:'2026年10月16日', readingTime:'8 分钟',
    excerpt:'从 IEPL 线路、120GB 月流量、价格和优惠码四个方面，分析光年梯为什么是本站目前的主推选择。',
    tags:['光年梯','IEPL','机场测评'], cover:'cover-gnt', mark:'GNT', featured:true,
    href:'reviews/guangnianti.html'
  },
  {
    slug:'how-to-choose-airport',
    title:'第一次买机场怎么选？先回答这 6 个问题',
    category:'新手指南', date:'2026-10-15', displayDate:'2026年10月15日', readingTime:'7 分钟',
    excerpt:'不先看品牌，先从预算、流量、设备、使用场景和可接受风险出发，建立自己的选择标准。',
    tags:['机场推荐','新手入门','选购指南'], cover:'cover-guide', mark:'01', featured:false,
    content:`
      <p>第一次购买机场时，最容易犯的错误是直接问“哪家最好”。实际上，不同人的宽带、设备、使用时间和预算都不同，真正有用的问题应该是“哪一种套餐更适合我的日常任务”。</p>
      <h2>一、每个月愿意花多少钱？</h2><p>先确定可长期承受的月付金额，而不是被年付折扣吸引。新用户优先选择月付，因为线路体验与所在地区、运营商和晚高峰情况有关。只有连续使用一段时间后，才适合考虑更长周期。</p>
      <h2>二、每月真实需要多少流量？</h2><p>网页、聊天和 AI 对话消耗相对有限，高清视频、云盘同步和大文件下载则会快速消耗流量。可以先查看手机和电脑过去一个月的网络统计，再预留约 20% 的余量。</p>
      <h2>三、稳定性和低价哪个更重要？</h2><p>直连线路通常价格更低，但更容易受到运营商路由和高峰时段影响。IEPL、IPLC 等专线定位通常更强调持续连接体验，适合在线会议、远程工作和长时间视频。</p>
      <h2>四、主要使用哪些设备？</h2><p>确认服务商是否提供适合 Windows、macOS、Android、iPhone 或路由器的使用方式。新手应优先选择客户端资料清楚、订阅导入简单的产品。</p>
      <h2>五、最重要的任务是什么？</h2><p>如果主要使用 AI 工具，应关注出口地区和 IP 稳定性；如果主要观看流媒体，需要实际测试平台可用性；如果用于工作，应把稳定性和售后支持放在价格之前。</p>
      <h2>六、能否接受服务中断？</h2><p>任何机场都存在维护、节点变化或停止运营的风险。重要工作最好准备备用线路，并避免一次性预付过长时间。</p>
      <div class="article-callout"><strong>本站当前建议：</strong>综合使用优先比较光年梯；偏好 IPLC 可以看瞬云；预算优先可看鲲鹏加速；希望使用 IEPL 且 100GB 足够，可比较云图。</div>
    `
  },
  {
    slug:'client-setup-guide',
    title:'机场订阅怎么导入？客户端配置的完整流程',
    category:'客户端教程', date:'2026-10-13', displayDate:'2026年10月13日', readingTime:'6 分钟',
    excerpt:'从复制订阅链接、导入配置、选择节点到开启系统代理，整理一套适用于常见客户端的通用流程。',
    tags:['客户端','订阅导入','故障排查'], cover:'cover-client', mark:'APP',
    href:'tutorials.html'
  },
  {
    slug:'iepl-vs-iplc',
    title:'IEPL、IPLC 和直连有什么区别？不要只看线路标签',
    category:'线路知识', date:'2026-10-11', displayDate:'2026年10月11日', readingTime:'8 分钟',
    excerpt:'线路名称只是选择依据之一。本文解释三类线路的常见定位，以及为什么最终仍要回到本地网络实测。',
    tags:['IEPL','IPLC','直连线路'], cover:'cover-network', mark:'NET',
    content:`
      <p>机场介绍页经常出现 IEPL、IPLC、BGP、直连和中转等词。它们可以帮助理解产品定位，但不能单独证明实际速度，也不能保证所有节点都拥有完全相同的体验。</p>
      <h2>直连线路</h2><p>直连通常意味着用户网络直接连接境外服务器或节点，结构相对简单，成本容易控制，因此常见于低价套餐。它的不足是更容易受到本地运营商、跨网路由和高峰拥堵影响。</p>
      <h2>IEPL 的常见定位</h2><p>IEPL 通常被服务商用于描述企业专线类跨境连接。对普通用户而言，最直接的期待是减少公网绕路和高峰波动。但不同服务商的接入、入口和节点资源并不相同，不能只凭“IEPL”三个字判断质量。</p>
      <h2>IPLC 的常见定位</h2><p>IPLC 同样常被用于专线类产品描述，强调点到点跨境链路。实际使用中，用户更应该关注晚高峰连续性、丢包、延迟抖动和节点维护，而不是纠结某个标签是否一定比另一个更快。</p>
      <h2>怎么比较才有效？</h2><ul><li>在自己的宽带环境下测试，不直接套用别人的测速。</li><li>分别在白天和晚高峰使用常见任务。</li><li>观察连续十到二十分钟的稳定性，而不是一次峰值。</li><li>先月付，再决定是否续费。</li></ul>
      <div class="article-callout">光年梯与云图使用 IEPL 定位，瞬云使用 IPLC 定位，鲲鹏加速主打直连低价。它们代表不同取舍，不是简单的等级排序。</div>
    `
  },
  {
    slug:'ai-node-guide',
    title:'访问 ChatGPT、Claude 时，节点地区和 IP 为什么重要？',
    category:'AI 使用', date:'2026-10-09', displayDate:'2026年10月9日', readingTime:'7 分钟',
    excerpt:'AI 服务不仅看能否打开，还可能受到地区支持、IP 信誉、账号状态和频繁切换节点的影响。',
    tags:['ChatGPT','Claude','AI 工具'], cover:'cover-ai', mark:'AI',
    content:`
      <p>访问 AI 工具时，“网页能够打开”并不等于长期稳定。账号登录、模型加载、文件上传和连续对话，都可能对网络出口提出更高要求。</p>
      <h2>优先选择服务支持的地区</h2><p>不同 AI 服务的地区政策会变化。使用前应查看产品官方支持范围，不要仅根据他人截图判断。节点地区与账号资料长期保持一致，通常比频繁切换更稳妥。</p>
      <h2>减少短时间内频繁换 IP</h2><p>连续在多个国家或相距很远的节点之间切换，可能触发额外验证。找到稳定节点后，可以将其作为常用节点，只在故障时更换。</p>
      <h2>机房 IP、原生 IP 与住宅 IP</h2><p>这些标签常被用于描述 IP 类型，但实际信誉还与历史使用情况、共享人数和服务商维护有关。不要因为某个标签就认为账号一定安全。</p>
      <h2>文件上传和长对话更考验稳定性</h2><p>AI 对话的流式输出、文件分析和代码任务都需要持续连接。延迟略高但稳定的节点，往往比测速很快却频繁中断的节点更好用。</p>
      <div class="article-callout"><strong>建议：</strong>先用 IP 查询工具确认出口地区，再以真实 AI 对话、文件上传和长回复完成一次完整测试。</div>
    `
  },
  {
    slug:'streaming-test-guide',
    title:'机场测速怎么看？延迟、抖动和实际播放哪个更重要',
    category:'流媒体', date:'2026-10-07', displayDate:'2026年10月7日', readingTime:'6 分钟',
    excerpt:'测速数字很直观，却很容易被误读。正确方法是先测本地基准，再结合真实播放和晚高峰连续性。',
    tags:['流媒体','测速','网络工具'], cover:'cover-stream', mark:'4K',
    content:`
      <p>很多人选择节点时只看延迟最低或下载速度最高，但流媒体体验还取决于抖动、丢包、平台限速、出口 IP 和持续传输能力。</p>
      <h2>先测本地网络基准</h2><p>不连接节点时先运行一次测速，记录本地下载、上传和延迟。如果本地宽带本身正在拥堵，任何节点结果都会受到影响。</p>
      <h2>延迟低不等于播放一定流畅</h2><p>延迟更影响网页响应和交互速度，高清视频更依赖持续下载能力。节点延迟稍高，但速度稳定，也可能拥有更好的播放体验。</p>
      <h2>抖动与丢包值得关注</h2><p>抖动表示延迟是否稳定，丢包会导致重传、卡顿或连接中断。在线会议和游戏通常比普通网页更敏感。</p>
      <h2>真实播放是最后标准</h2><p>使用你真正需要的平台连续播放十分钟，并拖动进度条、切换清晰度。一次测速无法替代真实应用验证。</p>
      <div class="article-callout">本站流媒体工具页提供 Fast.com、Cloudflare Speed Test、IP 查询、DNS 和 WebRTC 检查入口。</div>
    `
  },
  {
    slug:'free-node-risks',
    title:'免费节点为什么经常失效？使用前要知道的四类风险',
    category:'安全提醒', date:'2026-10-05', displayDate:'2026年10月5日', readingTime:'6 分钟',
    excerpt:'公开免费节点不只是速度慢，还可能存在运营者不明、配置篡改、隐私记录和突然失效等问题。',
    tags:['免费节点','隐私安全','避坑'], cover:'cover-safety', mark:'!',
    href:'free-nodes.html'
  },
  {
    slug:'yuntu-review', title:'云图机场测评：¥18 月付 100GB 是否值得选？', category:'机场测评', date:'2026-10-03', displayDate:'2026年10月3日', readingTime:'6 分钟', excerpt:'云图的 IEPL 线路、100GB 流量和优惠码 yt88，适合哪些人？', tags:['云图','IEPL','机场测评'], cover:'cover-yuntu', mark:'YT', href:'reviews/yuntu.html'
  },
  {
    slug:'shunyun-review', title:'瞬云机场测评：100GB IPLC 套餐与 20OFF 优惠码', category:'机场测评', date:'2026-10-01', displayDate:'2026年10月1日', readingTime:'6 分钟', excerpt:'瞬云主打 IPLC 专线，本文说明它与同价 IEPL 套餐的主要区别。', tags:['瞬云','IPLC','机场测评'], cover:'cover-shunyun', mark:'SY', href:'reviews/shunyun.html'
  },
  {
    slug:'kunpeng-review', title:'鲲鹏加速测评：¥12 月付的便宜直连机场', category:'机场测评', date:'2026-09-28', displayDate:'2026年9月28日', readingTime:'5 分钟', excerpt:'预算优先时，12 元直连机场是否够用？同时说明直连线路的使用边界。', tags:['鲲鹏加速','直连','低价机场'], cover:'cover-kunpeng', mark:'KP', href:'reviews/kunpeng.html'
  }
];

window.postUrl = function(post){
  return post.href || `post.html?slug=${encodeURIComponent(post.slug)}`;
};

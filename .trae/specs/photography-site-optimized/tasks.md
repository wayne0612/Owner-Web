# 摄影摄像自媒体博主网页 - 实施任务清单

## [ ] Task 1: 项目基础骨架 (package.json + Vite + 配置文件)
- **Priority**: P0
- **Depends On**: None
- **Description**:
  - 创建 `package.json`: Vue 3, Tailwind CSS v3, Vite 5, Lucide Vue Next, PostCSS, autoprefixer
  - 创建 `vite.config.js`: 配置 Vue plugin
  - 创建 `tailwind.config.js`: 自定义颜色(color palette: ink/brand),字体(Space Grotesk, Inter, JetBrains Mono),content 路径,container 内边距
  - 创建 `postcss.config.js`: Tailwind + autoprefixer
  - 创建 `index.html`: 含 `<meta name="viewport">`,`<title>`,Google Fonts `<link rel="preconnect">` 和 `<link>`(含 display=swap),空 `#app` 挂载点
- **Acceptance Criteria Addressed**: AC-1, AC-6, AC-7
- **Test Requirements**:
  - `programmatic` TR-1.1: `package.json` 含 `"vue": "^3.4.0"`, `"tailwindcss": "^3.4.0"`, `"vite": "^5.0.0"`, `"lucide-vue-next"` 依赖
  - `programmatic` TR-1.2: `tailwind.config.js` 的 `theme.extend.fontFamily` 仅使用 Sans-serif 字体(无 serif 家族)
  - `programmatic` TR-1.3: `index.html` 加载 Google Fonts 时含 `display=swap`
  - `human-judgement` TR-1.4: 审阅配置文件结构清晰,无语法错误
- **Notes**: tailwind 配置颜色用 CSS 变量 + fallback 双保险(便于暗色主题一致)

## [ ] Task 2: 全局样式与 CSS 变量 (src/style.css + src/main.js)
- **Priority**: P0
- **Depends On**: Task 1
- **Description**:
  - 创建 `src/style.css`: `@tailwind base/components/utilities` + `:root` 定义 `--ink-*` / `--brand-*` CSS 变量 + body 默认背景 `#0a0a0a` + 自定义 `.container` / `.card` 基础类
  - 创建 `src/main.js`: import `style.css`,创建 createApp(App).mount('#app')
  - 添加 base 层: `body { font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif; line-height: 1.7; color: #f5f5f5; }`
  - 添加自定义 `.card` 基础类便于复用(保持 FR-9 卡片一致性)
- **Acceptance Criteria Addressed**: AC-3, AC-7, AC-2(字体基础)
- **Test Requirements**:
  - `programmatic` TR-2.1: `style.css` 包含 `@tailwind base/components/utilities` 三层指令
  - `programmatic` TR-2.2: CSS 变量中 `--brand-DEFAULT` 为 `#ff4d2e`,背景色为 `#0a0a0a`
  - `human-judgement` TR-2.3: 字体栈仅含 Sans-serif 字体族
- **Notes**: CSS 变量命名保持 Tailwind friendly,便于在 `tailwind.config.js` 使用 `rgb(var(--ink-card))` 形式

## [ ] Task 3: 站点数据层 (src/data/site.js)
- **Priority**: P0
- **Depends On**: Task 1
- **Description**:
  - 创建 `site.js`: export `portfolioItems`, `serviceItems`, `blogItems`, `testimonialItems`, `skills`, `profile`
  - 作品 ≥ 6 项:每项含 `title`, `category`, `year`, `imageUrl`(通过 text-to-image API 生成)
  - 博客 ≥ 4 项: `title`, `date`, `readTime`, `coverUrl`, `category`
  - 服务 ≥ 3 项: `title`, `description`, `iconName`, `features`(数组)
  - 评价 ≥ 2 条: `quote`, `name`, `company`, `avatarUrl`
  - 技能 ≥ 8 个: `name` 标签字符串数组
  - profile: `name`, `title`, `bio`, `location`, `email`, `socialLinks`
- **Acceptance Criteria Addressed**: AC-10
- **Test Requirements**:
  - `programmatic` TR-3.1: `portfolioItems.length >= 6`, `blogItems.length >= 4`, `serviceItems.length >= 3`, `testimonialItems.length >= 2`
  - `human-judgement` TR-3.2: 数据结构清晰,字段命名语义化,便于组件消费
- **Notes**: image URL 格式使用 `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=<urlencoded>&image_size=square_hd`

## [ ] Task 4: 根组件 App.vue 组装
- **Priority**: P0
- **Depends On**: Task 2
- **Description**:
  - 创建 `src/App.vue`: `<script setup>` Composition API,导入全部子组件,按 section 顺序组织 `<TheNavbar /> / <HeroSection /> / <AboutSection /> / <PortfolioSection /> / <ServicesSection /> / <BlogSection /> / <TestimonialsSection /> / <TheFooter />`
  - 每个 section 有一致的 `py-16 md:py-24` 内边距 + `container mx-auto px-4 md:px-8` 内容容器
  - 背景使用 `bg-[#0a0a0a]`
- **Acceptance Criteria Addressed**: AC-9, AC-1
- **Test Requirements**:
  - `programmatic` TR-4.1: App.vue 使用 `<script setup>` 语法,无编译错误
  - `human-judgement` TR-4.2: section 间距一致,节奏舒适
- **Notes**: 先创建空 stub 组件占位,后续 task 逐步填充

## [ ] Task 5: TheNavbar 组件
- **Priority**: P1
- **Depends On**: Task 3, Task 4
- **Description**:
  - 创建 `src/components/TheNavbar.vue`
  - `<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">` 滚动时加 `backdrop-blur` + `bg-[#0a0a0a]/80` + `border-b border-neutral-800/60`
  - 左边 Logo(加粗字母,可用 `font-display`),中间导航链接(作品/关于/服务/联系/博客),右边社交图标(IG / YouTube / Twitter / Email)
  - 移动端(<768px)隐藏中间导航,显示汉堡菜单按钮(点击展开下拉)
- **Acceptance Criteria Addressed**: AC-1, AC-5
- **Test Requirements**:
  - `human-judgement` TR-5.1: 滚动超过 50px 后出现模糊背景与底线;回到顶部消失
  - `human-judgement` TR-5.2: 移动汉堡菜单可展开 / 收起,交互顺畅
  - `programmatic` TR-5.3: 使用 `@media` 或 Tailwind 的 `md:` 断点实现响应式

## [ ] Task 6: HeroSection 组件(核心排版)
- **Priority**: P0
- **Depends On**: Task 3, Task 4
- **Description**:
  - 创建 `src/components/HeroSection.vue`
  - 结构: `min-h-[92vh]` 容器,`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`,左 7 列文字 / 右 5 列人像图
  - 左栏: 顶部 tiny 编号 `01 / PORTFOLIO — 2026`(font-mono + uppercase + letter-spacing) + 大号 Display 标题(break-words,3~4 行,line-height tight) + 副标 + CTA 按钮组两个
  - 右栏: `relative` 人像图卡片,`rounded-3xl overflow-hidden`,图片 `object-cover w-full h-full`,下方/上方有元数据(地点、坐标编号、器材)
  - 背景:在容器用 `radial-gradient(ellipse at top right, rgba(255,77,46,0.08), transparent 50%)` 做角落光晕
  - 底部: `scroll down ↓` 指示器,有轻微 pulse 动画
- **Acceptance Criteria Addressed**: AC-2, AC-8, AC-3
- **Test Requirements**:
  - `human-judgement` TR-6.1: 标题字号 lg 视口 ≥ 3rem(48px),字母间距紧凑,视觉冲击力强
  - `human-judgement` TR-6.2: 人像图大小适中,非首屏不突兀,元数据点缀恰到好处
  - `human-judgement` TR-6.3: Hero 整体留白合理,元素对齐严谨
  - `programmatic` TR-6.4: 动效仅用 `transition` / `transform` / `opacity`,无动画库依赖
- **Notes**: 标题建议「以镜头之名 / 书写光与时间的故事 / Visual Storyteller」风格

## [ ] Task 7: AboutSection 组件
- **Priority**: P1
- **Depends On**: Task 3
- **Description**:
  - 创建 `src/components/AboutSection.vue`
  - `grid grid-cols-1 lg:grid-cols-3 gap-8`:左列标题 + bio;右列数据统计卡片;技能标签在下方
  - 标题: `02 / ABOUT` 编号标签 + `关于 我` 主标题 + 副标
  - Bio 段落: 2~3 段文字,font-body,line-height 1.7
  - 数据卡片: 3 张小型卡片(项目数 / 合作品牌 / 从业年数)
  - 技能标签: chip 风格 tags,`inline-block rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-sm`,hover `border-[#ff4d2e] text-[#ff4d2e]`
- **Acceptance Criteria Addressed**: AC-4, AC-8
- **Test Requirements**:
  - `human-judgement` TR-7.1: 布局层次清晰,统计卡片视觉突出
  - `human-judgement` TR-7.2: 标签 hover 视觉反馈明显

## [ ] Task 8: PortfolioSection 组件(作品网格)
- **Priority**: P0
- **Depends On**: Task 3
- **Description**:
  - 创建 `src/components/PortfolioSection.vue`
  - 顶部标题区:`03 / WORKS` 编号标签 + `精选作品` + 副标题
  - 网格 `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
  - 每张作品卡片: `aspect-[4/5] rounded-2xl overflow-hidden relative group`
  - 卡片内容: `img` + 绝对定位的 `overlay` 黑色渐变遮罩(hover 时颜色加重)+ 底部标题 / 标签
  - hover: `img` scale `1.05`,overlay 渐变加强,边框出现 accent 色
- **Acceptance Criteria Addressed**: AC-4, AC-5, AC-8, AC-10
- **Test Requirements**:
  - `human-judgement` TR-8.1: 作品网格对齐严谨,卡片风格一致
  - `human-judgement` TR-8.2: hover 时图片轻微放大,overlay 平滑变化
  - `programmatic` TR-8.3: 图片 `loading="lazy"` + `decoding="async"`

## [ ] Task 9: ServicesSection 组件
- **Priority**: P1
- **Depends On**: Task 3
- **Description**:
  - 创建 `src/components/ServicesSection.vue`
  - 标题区 `04 / SERVICES` 编号标签 + `服务项目`
  - `grid grid-cols-1 md:grid-cols-3 gap-6`
  - 每张卡片: `rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-[#ff4d2e] hover:-translate-y-1`
  - 卡片内: 图标(来自 Lucide)+ 标题 + 描述 + `ul` features 列表
  - 首张卡片视觉突出(可以 `border-[#ff4d2e]/60` 初始就有 accent 色底纹)
- **Acceptance Criteria Addressed**: AC-4, AC-10
- **Test Requirements**:
  - `human-judgement` TR-9.1: 首张卡片略突出但不过度,符合设计语言
  - `programmatic` TR-9.2: 使用 Lucide 图标,import 具体图标而非全量

## [ ] Task 10: BlogSection 组件
- **Priority**: P1
- **Depends On**: Task 3
- **Description**:
  - 创建 `src/components/BlogSection.vue`
  - 标题 `05 / JOURNAL` 编号标签 + `最新文章与视频`
  - `grid grid-cols-1 md:grid-cols-2 gap-6`
  - 每张横向卡片: `rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden flex flex-col md:flex-row transition hover:border-[#ff4d2e] hover:-translate-y-1`
  - 左侧 `aspect-video md:aspect-square md:w-48` 缩略图;右侧 `p-6 flex-1 flex flex-col justify-between`
  - 底部: `阅读时长 · 日期` 小字
- **Acceptance Criteria Addressed**: AC-4, AC-10
- **Test Requirements**:
  - `human-judgement` TR-10.1: 卡片横向比例协调,左图右文视觉舒适

## [ ] Task 11: TestimonialsSection 组件
- **Priority**: P2
- **Depends On**: Task 3
- **Description**:
  - 创建 `src/components/TestimonialsSection.vue`
  - 标题 `06 / VOICES` 编号标签 + `合作评价`
  - `grid grid-cols-1 md:grid-cols-2 gap-6`
  - 每张卡片: `rounded-2xl border border-neutral-800 bg-neutral-900 p-8 relative`,左上角巨大 `"` 引号装饰(`text-5xl text-[#ff4d2e]/40 font-display`)
  - 内容: quote 文本 + 下方作者/公司/头像
- **Acceptance Criteria Addressed**: AC-4, AC-10
- **Test Requirements**:
  - `human-judgement` TR-11.1: 引号装饰视觉加分但不喧宾夺主

## [ ] Task 12: TheFooter 组件
- **Priority**: P1
- **Depends On**: Task 3
- **Description**:
  - 创建 `src/components/TheFooter.vue`
  - `border-t border-neutral-800 bg-[#0a0a0a]`
  - container 内: 邮箱 + 社交链接 + 版权 `© 2026 <name>. All rights reserved.`
  - 左上角标签 `CONTACT / GET IN TOUCH`
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `human-judgement` TR-12.1: 底部干净简洁,与整站风格统一

## [ ] Task 13: 整体验证与微调
- **Priority**: P0
- **Depends On**: Task 5, 6, 7, 8, 9, 10, 11, 12
- **Description**:
  - 安装依赖: `npm install`
  - 启动 dev server: `npm run dev`,检查控制台无错误
  - 在 360px / 768px / 1024px / 1280px 视口分别检查视觉
  - 微调: 检查各 section 标题、字号、颜色、间距一致性
  - 检查图片 URL 可访问(若 text-to-image API 未就绪,使用 picsum.photos 等备用图片)
  - 生产构建 `npm run build`,确认 `dist/` 产物存在
- **Acceptance Criteria Addressed**: AC-1, AC-3, AC-5, AC-6, AC-8
- **Test Requirements**:
  - `programmatic` TR-13.1: `npm run dev` 启动成功,访问 localhost:5173 页面正常渲染
  - `programmatic` TR-13.2: `npm run build` 产物无 error
  - `human-judgement` TR-13.3: 四档视口检查,无明显错位
  - `human-judgement` TR-13.4: 卡片 hover 过渡流畅一致
- **Notes**: 若 Lucide Vue Next 图标组件 import 路径问题,使用 `lucide-vue-next` 默认导出。如有图片资源问题,可先用 picsum.photos seed 作为临时占位

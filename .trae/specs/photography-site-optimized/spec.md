# 摄影摄像自媒体博主网页 - 优化版 PRD

## Overview
- **Summary**: 基于原始方案,构建一个 Vue 3 + Tailwind CSS 的暗色调摄影摄像自媒体博主个人作品集网站。在原有基础上优化排版层级、显著提升首屏性能、并整体提高视觉与交互质量。
- **Purpose**: 原始方案偏"基础可用",本方案追求"精致专业"——让作品图片成为主角,排版干净克制,动效精准克制。
- **Target Users**: 摄影摄像博主本人(展示作品)、潜在商业客户(查看服务)、普通访客(了解博主/关注社交账号)。

## Goals
1. 构建可运行的 Vue 3 + Tailwind CSS 单页作品集站点
2. 首屏排版具备 Editorial / 杂志感,有明确的视觉层级(排版优化)
3. 首屏在普通网络下快速呈现(性能高效)
4. 整体视觉精致,细节到位,无 generic AI 感(页面高质量)
5. 完全响应式,移动端体验良好

## Non-Goals (Out of Scope)
- 真实内容管理系统(CMS)接入: 使用静态假数据
- Vue Router 多页路由: 单页滚动 + 锚点导航足够
- 多语言 / i18n
- 用户登录 / 评论系统
- 视频播放器(仅静态封面)

## Background & Context
- 原始计划文档已在 `.trae/documents/photography_blog_plan.md`,定义了基础结构(Navbar/Hero/About/Portfolio/Services/Blog/Testimonials/Footer)
- 工作目录当前为空,从零搭建
- 用户明确要求:「暗色 + 简单颜色 + 卡片样式 + Hero 参考优质网页排版 + 全部无衬线字体」
- 需在此基础上,进一步在排版、性能、质量三方面做明确提升

## Functional Requirements
- **FR-1 Navbar**: 固定顶栏,含 Logo / 主导航(作品、关于、服务、联系) / 社交图标,滚动时背景从透明变半透明磨砂
- **FR-2 Hero**: 左右双栏(或上下移动端),左栏为大号 Display 字体标题 + 副标 + CTA,右栏为大尺寸人物肖像图 + 边角元数据(编号、年份、地点)。包含向下滚动指示器与轻微渐变光晕背景
- **FR-3 About Section**: 标题 + 文字介绍 + 技能标签卡片;左右布局,标签卡片悬停高亮
- **FR-4 Portfolio / Works Grid**: 响应式网格(1 / 2 / 3 列),卡片包含封面图、标题、标签。悬停时图片 scale,边框高亮,显示标题叠层
- **FR-5 Services**: 3~4 张服务卡片,每张含图标、标题、描述、要点列表;首位卡片视觉上略突出(accent 边框)
- **FR-6 Blog / Latest Videos 列表**: 横向卡片或列表,含缩略图、发布日期、标题、阅读时长
- **FR-7 Testimonials**: 引用样式卡片,左/右有引号装饰、客户姓名、公司
- **FR-8 Footer / Contact**: 邮箱、社交链接、版权;简洁
- **FR-9 全站卡片一致性**: 统一的圆角、边框、内边距、悬停过渡

## Non-Functional Requirements
- **NFR-1 性能**: 首屏资源 < 300KB(gzip)。使用 `preload` 关键字,字体 `font-display: swap`,图片 `loading="lazy"`,Tailwind JIT 仅生成使用到的类
- **NFR-2 排版**: 建立清晰的 `type scale`(标题 4xl/3xl/2xl,正文 base,小字 xs),中英文混排合理,行高 1.6~1.8 适合长文
- **NFR-3 响应式**: 断点 md(768px)、lg(1024px)、xl(1280px);Mobile 单列,Potrait 双列,Desktop 三列
- **NFR-4 可访问性**: 图片带 `alt`;对比度 ≥ 4.5;键盘可聚焦;语义化 `<nav>`/`<section>`/`<article>`
- **NFR-5 动效**: 纯 CSS transition 为主,不引入第三方动画库。`hover`/`focus` 过渡 200ms,加载时 staggered reveal。避免 `transform`/`opacity` 之外的属性动画
- **NFR-6 代码质量**: 组件单一职责,命名清晰,data 分离,无 console warnings

## Constraints
- **Technical**: Vue 3 (Composition API), Tailwind CSS v3, Vite 5。Node ≥ 18。仅使用 Lucide Vue Next 图标库,不新增其他 UI 库
- **Business**: 零后端,纯静态前端
- **Dependencies**: Google Fonts (Space Grotesk, Inter, JetBrains Mono);Lucide Vue Next;Vue 3;Tailwind CSS v3;@vitejs/plugin-vue

## Assumptions
- 用户拥有 Node 18+ 环境,可执行 `npm install` / `npm run dev`
- 图片资源通过 `trae-api-cn.mchost.guru` text-to-image API URL 生成占位
- 站点在现代浏览器(Chrome ≥ 100, Safari ≥ 15, Firefox ≥ 100)中运行

## Acceptance Criteria

### AC-1: 项目可构建与运行
- **Given**: 项目文件已创建,依赖已安装
- **When**: 在终端执行 `npm install && npm run dev`
- **Then**: Vite dev server 成功启动,浏览器访问 `localhost:5173` 可看到完整首页,无控制台错误
- **Verification**: `programmatic`

### AC-2: Hero 排版具备杂志级视觉层级
- **Given**: 已完成 HeroSection 组件
- **When**: 在 ≥1024px 视口查看 Hero
- **Then**: 呈现「大号 Display 标题(≥2.5rem, letter-spacing 紧凑) + 副标小字 + 侧边肖像图 + 边角编号/年份/地点元数据 + 微妙的径向渐变光晕 + 滚动指示器」,元素对齐遵循黄金比例或网格,留白充足
- **Verification**: `human-judgment`

### AC-3: 暗色主题与强调色一致
- **Given**: 全站已实现
- **When**: 浏览各 section
- **Then**: 背景 `#0a0a0a`、卡片 `#141414`、边框 `#262626`、文本 `#f5f5f5`/`#a1a1aa`、强调色 `#ff4d2e` 完全一致,无颜色漂移
- **Verification**: `programmatic` + `human-judgment`

### AC-4: 卡片风格统一
- **Given**: 已实现所有卡片组件
- **When**: 对比 About / Portfolio / Services / Blog / Testimonials 卡片
- **Then**: 所有卡片遵循同一套设计语言: `rounded-2xl`、`border border-neutral-800`、`bg-neutral-900`、`p-6`、`transition 200ms`、hover `border-[#ff4d2e]` + `-translate-y-1`
- **Verification**: `human-judgment`

### AC-5: 响应式布局正确
- **Given**: 页面已渲染
- **When**: 依次在 360px / 768px / 1024px / 1280px 视口宽度查看
- **Then**: 360px 为单列堆叠;768px 出现双列;1024px+ 三列作品网格;Navbar 移动端收起为汉堡菜单
- **Verification**: `human-judgment`

### AC-6: 首屏性能
- **Given**: 生产构建 `npm run build`
- **When**: 查看 `dist/` 目录大小与 Lighthouse 指标(可在开发工具手动检查)
- **Then**: `index.html` + CSS + 首屏 JS gzip 后 ≤ 300KB;Lighthouse Performance ≥ 90;字体使用 `font-display: swap`;图片使用 `loading="lazy"`(非首屏)
- **Verification**: `programmatic`

### AC-7: 字体全部为无衬线
- **Given**: 全站已实现
- **When**: 查看 CSS 中 `font-family` 声明
- **Then**: 仅使用 Space Grotesk(Display)、Inter(正文)、JetBrains Mono(数字/代码)三类,且中文回退到 PingFang SC / Microsoft YaHei / sans-serif,无衬线字体(如 Playfair Display, Serif)
- **Verification**: `programmatic`

### AC-8: 动效克制且流畅
- **Given**: 页面已渲染
- **When**: 鼠标悬停在卡片/按钮上,滚动页面
- **Then**: 过渡效果仅使用 `transform` 和 `opacity`,时长 200ms,`ease-out`;无卡顿;滚动指示器有轻微 pulse 效果,不干扰阅读
- **Verification**: `human-judgment`

### AC-9: 代码结构清晰
- **Given**: 项目已完成
- **When**: 查看 `src/` 目录
- **Then**: `components/` 下各组件各司其职,`data/` 下 site.js 集中管理数据,`App.vue` 仅做组装。无冗余文件,命名语义化
- **Verification**: `programmatic`

### AC-10: 图片与内容合理填充
- **Given**: 各 section 已实现
- **When**: 浏览作品网格、博客列表
- **Then**: 作品 ≥ 6 项,博客 ≥ 4 项,服务 ≥ 3 项,评价 ≥ 2 条;每项均有占位图或内容,页面无明显空白缺口
- **Verification**: `human-judgment`

## Open Questions
- [ ] Hero 主标题文字: 建议中文还是英文? (默认使用中英混合: 主标题中文 + 英文副标)
- [ ] 博主信息: 是否有真实姓名/城市/邮箱需要填入?(默认使用占位信息)

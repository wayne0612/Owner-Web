# 摄影摄像自媒体博主网页 - 开发计划

## 一、需求分析与目标

### 用户需求
- 创建一个摄影/摄像自媒体博主的个人网页
- 技术栈: **Vue.js + Tailwind CSS**
- 视觉风格: **暗黑色(dark theme)搭配简单颜色点缀**
- 组件风格: **卡片式 (Card-based layout)**
- Hero 页面: **参考优质网页排版**

### 目标用户与场景
- 展示博主的摄影/视频作品集
- 个人简介与联系方式
- 最新作品/博客更新展示
- 访客浏览 → 关注 → 合作洽谈

---

## 二、技术栈选型

| 类别 | 选型 | 说明 |
|------|------|------|
| 构建工具 | **Vite** | 与 Vue 3 配合最佳,开发体验极致 |
| 框架 | **Vue 3 (Composition API)** | 现代、轻量、性能优秀 |
| CSS 框架 | **Tailwind CSS v3** | 原子化 CSS,快速搭建响应式 UI |
| 图标 | **Lucide Vue** 或 **Heroicons** | 简洁美观的图标库 |
| 图片加载 | 原生 `loading="lazy"` | 延迟加载,首屏优化 |
| 路由(可选) | **Vue Router** | 如需多页则启用 |

> 当前工作目录为空,计划从零搭建。

---

## 三、设计方向

### 3.1 配色 (Dark + Simple Accent)

```css
--bg-base: #0a0a0a;        /* 近黑背景 */
--bg-card: #141414;        /* 卡片底色 */
--bg-elevated: #1c1c1e;    /* 悬浮/交互色 */
--border-subtle: #262626;  /* 细边 */

--text-primary: #f5f5f5;   /* 主文本 */
--text-secondary: #a1a1aa; /* 次文本 */
--text-muted: #71717a;     /* 弱化文本 */

--accent: #ff4d2e;         /* 主强调色: 橙红 (有胶片感) */
--accent-2: #eab308;       /* 副强调色: 暖黄 (琥珀) */
```

> **设计灵感**: 暗底 + 单一强强调色(橙红),参考高端摄影作品集站点 (如 VSCO、Unsplash Studio、摄影杂志 Editorial 风格)。干净、克制,让图像成为主角。

### 3.2 字体 (无衬线 Sans-Serif)

- **Display/标题**: `'Space Grotesk'` - 几何无衬线,现代有力量感
- **正文**: `'Inter'` - 阅读舒适的无衬线字体
- **数字/标签**: `'JetBrains Mono'` - 等宽字体,增加专业技术感
- **中文回退**: `'PingFang SC'` → `'Microsoft YaHei'` → `sans-serif`

### 3.3 卡片美学

```
- 圆角: rounded-xl (12px) 或 rounded-2xl
- 边框: 1px solid #262626 (非阴影,用边框表达层次)
- 内边距: generous padding
- 悬停: 边框亮 → accent 色 + 轻微 translateY
- 图片: object-cover + 轻微 grain/暗角效果
```

---

## 四、页面结构 (单页滚动 + 可选多页路由)

```
┌────────────────────────────────────┐
│  Navbar (Logo + Menu + CTA)         │
├────────────────────────────────────┤
│  Hero Section (大标题 + 肖像/作品)  │
├────────────────────────────────────┤
│  About / 个人介绍 (卡片)            │
├────────────────────────────────────┤
│  Portfolio / 精选作品集 (卡片网格)  │
├────────────────────────────────────┤
│  Services / 服务项目 (卡片)         │
├────────────────────────────────────┤
│  Blog / Latest Videos (卡片列表)    │
├────────────────────────────────────┤
│  Testimonials / 合作评价 (卡片)     │
├────────────────────────────────────┤
│  Contact / Footer                   │
└────────────────────────────────────┘
```

### 4.1 Hero 排版参考 (优质网页元素)

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   [01 / ABOUT]  小型标签 + 编号                   │
│                                                  │
│   捕捉光与                     ← 左对齐大字号     │
│   时间的故事。                                    │
│                  ┌──────────────┐                 │
│   [BIO]         │  肖像/作品图  │  [2026]        │
│                  └──────────────┘                 │
│                                                  │
│   向下箭头 (scroll indicator)                     │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Hero 关键设计元素**:
- 大号不对称标题 (break words, editorial style)
- 编号装饰 (01 / 02) → 提升专业感
- 大幅留白 + 一行关键信息
- 右/左侧一张高质量肖像或代表作品
- 年份/地点等元数据点缀

---

## 五、文件结构规划

```
Owner web/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── style.css              ← Tailwind 指令 + 全局样式
│   ├── assets/                ← 图片/视频资源
│   │   └── hero.jpg ...
│   ├── components/
│   │   ├── TheNavbar.vue      ← 顶部导航
│   │   ├── HeroSection.vue    ← Hero 区域 (核心)
│   │   ├── AboutCard.vue      ← 关于我 卡片
│   │   ├── PortfolioCard.vue  ← 作品 卡片
│   │   ├── ServiceCard.vue    ← 服务 卡片
│   │   ├── BlogCard.vue       ← 博文/视频 卡片
│   │   ├── TestimonialCard.vue← 评价 卡片
│   │   └── TheFooter.vue      ← 页脚
│   └── data/
│       └── site.js            ← 作品集/博文/服务假数据
└── .trae/documents/plan.md
```

---

## 六、关键实现点

### 6.1 Tailwind 配置要点

- `extend.theme.colors` 自定义 `brand`, `ink`, `paper` 色阶
- `extend.fontFamily` 引入 Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`),全部为无衬线字体
- `darkMode: 'class'` (因为我们只用暗色,可以省略,直接写暗色类)
- 自定义 `container` 内边距

### 6.2 Hero 组件要点

- 响应式: 移动端垂直堆叠,桌面端左文右图
- 使用 CSS `background-image: radial-gradient()` 做角落光晕
- `overflow-hidden` + `relative` 以便加装饰元素(编号、线)

### 6.3 卡片组件公共属性

```vue
<div class="group rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-[var(--accent)] hover:-translate-y-1">
  <!-- content -->
</div>
```

### 6.4 作品网格

- 使用 `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- 图片使用 `aspect-[4/5]` (竖向,人像杂志感) 或 `aspect-video`
- 悬停时图片轻微 `scale-105` + 遮罩淡入标题

### 6.5 可访问性与性能

- 语义化 HTML (`<nav>`, `<section>`, `<article>`, `<footer>`)
- 图片使用 `alt` 描述
- 避免大型第三方库(保持轻量)
- 使用 `will-change` 合理限制动画范围

---

## 七、具体修改/新建文件清单

| 操作 | 文件路径 | 作用 |
|------|---------|------|
| 新建 | `package.json` | 项目依赖与脚本 |
| 新建 | `vite.config.js` | Vite 配置 |
| 新建 | `tailwind.config.js` | Tailwind 主题扩展 |
| 新建 | `postcss.config.js` | PostCSS 配置 |
| 新建 | `index.html` | HTML 入口 |
| 新建 | `src/main.js` | Vue 入口 |
| 新建 | `src/App.vue` | 根组件,组织各 section |
| 新建 | `src/style.css` | Tailwind + 全局 CSS 变量 |
| 新建 | `src/data/site.js` | 假数据(作品/博客/服务) |
| 新建 | `src/components/TheNavbar.vue` | 导航栏 |
| 新建 | `src/components/HeroSection.vue` | Hero 页面(核心) |
| 新建 | `src/components/AboutCard.vue` | 介绍卡片 |
| 新建 | `src/components/PortfolioCard.vue` | 作品集卡片 |
| 新建 | `src/components/ServiceCard.vue` | 服务卡片 |
| 新建 | `src/components/BlogCard.vue` | 博文/视频卡片 |
| 新建 | `src/components/TestimonialCard.vue` | 评价卡片 |
| 新建 | `src/components/TheFooter.vue` | 页脚 |

> 共 **16 个文件**,均为新建(工作目录当前为空)。

---

## 八、实施步骤

1. **初始化项目骨架** - `package.json`、`vite.config.js`、`tailwind.config.js`、`postcss.config.js`、`index.html`
2. **配置主题** - `tailwind.config.js` 扩展颜色/字体,`style.css` 设置 CSS 变量和基础样式
3. **写假数据** - `src/data/site.js` 定义作品、博客、服务数组
4. **实现 Navbar + Footer** - 基础 UI 框架
5. **实现 HeroSection** - 核心排版,重点打磨
6. **实现各卡片组件** - About、Portfolio、Service、Blog、Testimonial
7. **在 App.vue 组装** - 所有 section 顺序组合
8. **本地运行验证** - `npm install && npm run dev` 检查无错误
9. **视觉微调** - 间距、字号、悬停动效

---

## 九、潜在风险与处理

| 风险 | 影响 | 处理方案 |
|------|------|---------|
| 用户本地无 Node/npm | 无法安装依赖 | 方案中会在 README 提示(若后续用户需要可补充);也可改用 CDN 版 Vue + Tailwind Play CDN 作为备选 |
| 图片资源来源 | 作品展示需要真实图片 | 使用 `trae-api-cn.mchost.guru` 提供的 text-to-image API 生成 Hero/作品占位图,URL 直接写入 `<img>` |
| 中文排版与字体 | 默认字体中文不够好看 | 在 `Space Grotesk` 之外,`Inter` 回退到 `PingFang SC`、`Microsoft YaHei`,确保中文字可读 |
| 移动端体验 | 卡片网格在小屏拥挤 | `grid-cols-1` 默认,断点 `md`→2、`lg`→3;Hero 文字在移动端降级为单列 |

---

## 十、交付物

- 一个可通过 `npm run dev` 运行的 Vue 3 + Tailwind 项目
- 完整的单页个人站点 (Navbar / Hero / About / Portfolio / Services / Blog / Testimonials / Footer)
- 暗色主题,卡片式布局,Editorial 风格 Hero
- 组件化拆分,便于后续扩展为多页或接入真实 CMS

---

> 以上为本次开发的完整计划。请审阅通过后,我将开始按步骤创建文件与代码。

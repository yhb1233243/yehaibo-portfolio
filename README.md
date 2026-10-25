# 叶海波 · 个人作品集

![个人主页预览](public/images/portfolio-preview.png)

个人作品集网站，集中展示我的工程实践、代表项目、技术能力、随笔与可核验成果。

**在线访问：** [yhb.mybugssss.lol](https://yhb.mybugssss.lol)  ·  **GitHub：** [yhb1233243](https://github.com/yhb1233243)

## 内容

- **项目与经历**：RAG 混合检索、知识图谱、Agent 工作流、长任务可靠性和自动化部署实践
- **随笔**：以 Markdown 记录技术、成长与日常思考
- **成果与证据**：竞赛、软件著作权、软件设计师资格、奖学金与创新项目
- **关于我**：教育经历、技能和联系方式

## 技术栈

- [Astro](https://astro.build/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript
- Astro Content Collections（Markdown 随笔）

## 本地运行

需要 Node.js 20.3 或更高版本。

```sh
npm install
npm run dev
```

生产构建与本地预览：

```sh
npm run build
npm run preview
```

## 添加随笔

在 `src/content/essays/` 新建 Markdown 文件：

```md
---
title: "随笔标题"
publishedAt: 2026-10-24
summary: "文章摘要"
tags: [思考]
draft: false
---

在这里写下内容。
```

`draft: true` 的文章不会发布。文件名会成为文章 URL 的 slug。

## 项目内容配置

个人资料、项目、经历、技能、教育和成果信息集中在 `src/config.ts`。随笔使用独立 Markdown 内容集。修改后运行 `npm run build` 检查。

## 致谢与许可

本项目由 [Ryan Fitzgerald 的 DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) 模板演进而来，保留原项目的 MIT 许可与版权声明。模板之外的个人内容和修改遵循仓库中的许可文件。

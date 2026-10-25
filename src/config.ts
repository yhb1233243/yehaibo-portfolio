export const siteConfig = {
  name: "叶海波",
  title: "大模型应用开发 / AI Agent / 全栈工程",
  description: "叶海波的个人主页 — 大模型应用开发、AI Agent 与全栈工程",
  accentColor: "#8b5cf6",
  social: {
    email: "G13169763421@163.com",
    linkedin: "",
    twitter: "",
    github: "https://github.com/yhb1233243",
  },
  aboutMe:
    "广西师范大学软件工程硕士，研究方向为大模型安全与教育智能化。专注于大模型应用落地：具备 RAG 混合检索链路、知识图谱构建、Agent 工作流编排与长耗时任务可靠性的完整项目经验。全栈开发以 Python / FastAPI / Vue3 为主，熟悉 GitOps 自动化部署链路。作为核心开发完成的思政 AI 助教平台已上线并接入桂教通平台。",
  skills: [
    "RAG / 混合检索",
    "LightRAG / pgvector",
    "MCP / Tool Calling",
    "DeerFlow / Agent 编排",
    "Python / FastAPI",
    "Vue3",
    "PostgreSQL / Redis",
    "Celery / SSE",
    "Docker / k3s",
    "ArgoCD / GitOps",
    "Java / Spring Boot",
  ],
  projects: [
    {
      name: "智恒 · 思政 AI 助教平台",
      description:
        "面向初中《道德与法治》教师的教材驱动 AI 备课平台，已上线并接入桂教通平台。负责知识图谱构建 Pipeline、RAG 混合检索（向量 + 全文并行召回、RRF 融合排序）、基于 DeerFlow / MCP / Tool Calling 的 Agent 备课工作流，以及长耗时任务的断点恢复机制；GitOps 链路实现 2-3 分钟从提交到生产发布。",
      link: "https://zhiheng.chat",
      skills: [
        "Vue3",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "LightRAG",
        "DeerFlow",
        "MCP",
        "Celery",
        "Redis",
        "ArgoCD",
      ],
    },
    {
      name: "基于区块链的核电数据共享与分析系统",
      description:
        "承接中国广东核电工程有限公司的实验室项目。基于区块链和国密算法实现核电应急数据可信共享与安全治理：集成 ChainMark 联盟链完成数据上链与哈希存证，Web3j 实现链上交互与智能合约调用；构建 PatchTST 时序模型进行设备状态分析。产出软件著作权 2 项，发表论文 2 篇。",
      link: "",
      skills: ["Java", "Python", "Vue", "ChainMark", "Web3j", "PatchTST"],
    },
  ],
  experience: [
    {
      company: "智恒 · 思政 AI 助教平台",
      title: "核心开发 · 校企合作",
      dateRange: "在读期间",
      bullets: [
        "负责知识图谱构建 Pipeline、RAG 混合检索链路、长耗时任务可靠性、GitOps 自动化部署四条主线的设计与实现",
        "RAG 混合检索：LightRAG 与 pgvector 向量检索、PostgreSQL 全文检索并行召回，RRF 融合排序，检索服务异常时自动降级",
        "知识图谱 Pipeline：PDF 按课时切分 → LLM 结构化抽取 → Schema 约束 + JSON 修复 + 跨课时关系推理，支持中断恢复与多层级可视化",
        "长任务可靠性：Redis + Celery + PostgreSQL 持久化任务状态，租约、心跳、失败重试、断点续跑与 SSE 实时进度反馈",
      ],
    },
    {
      company: "贵州斯翔科技有限公司",
      title: "业务系统开发实习生",
      dateRange: "2023.07 - 2023.12",
      bullets: [
        "参与业务系统需求分析、模块开发、功能联调与技术文档编写",
        "协同团队完成两个版本的按期交付",
      ],
    },
  ],
  education: [
    {
      school: "广西师范大学",
      degree: "软件工程 · 硕士",
      dateRange: "2024.09 - 2027.06（预计）",
      achievements: [
        "研究方向：大模型安全、教育智能化（大模型应用 / RAG / 知识图谱）",
        "学业一等奖学金（2024-2025）",
      ],
    },
    {
      school: "贵州工程应用技术学院",
      degree: "软件工程 · 本科",
      dateRange: "2020 - 2024.06",
      achievements: [
        "全国高校团队程序设计天梯赛贵州省二等奖（2022-2023）、三等奖（2021-2022）",
        "国家励志奖学金（2021-2022）· 优秀毕业生 · 软考中级软件设计师",
      ],
    },
  ],
  achievements: [
    {
      category: "工程资质",
      label: "软考中级 · 软件设计师",
      detail: "通过全国计算机技术与软件专业技术资格考试，具备软件设计与工程基础能力。",
      date: "2024",
      signal: "国家级资格",
    },
    {
      category: "项目成果",
      label: "软件著作权 · 2 项",
      detail: "乡村振兴电商平台 V1.0；核电应急数据可信共享与智能分析决策支持系统（TSIAD）。",
      date: "2023 / 2025",
      signal: "成果沉淀",
    },
    {
      category: "竞赛经历",
      label: "中国高校计算机大赛 · 团体程序设计天梯赛",
      detail: "2023 年贵州省团队二等奖、2022 年贵州省团队三等奖，持续参与团队程序设计竞赛。",
      date: "2022 — 2023",
      signal: "省级奖项",
    },
    {
      category: "创新实践",
      label: "省级大学生创新创业训练计划",
      detail: "参与基于 ThinkPHP 的乡村振兴电商平台项目，完成项目研究任务并通过结题验收。",
      date: "2022 — 2023",
      signal: "省级项目",
    },
    {
      category: "学业荣誉",
      label: "奖学金与优秀毕业生",
      detail: "本科阶段获国家励志奖学金、学业一等奖学金及优秀毕业生；硕士阶段获学业奖学金。",
      date: "2021 — 至今",
      signal: "持续表现",
    },
    {
      category: "基础能力",
      label: "C 语言程序设计大赛 · 三等奖",
      detail: "在本科阶段参与程序设计类竞赛，从 C 语言基础训练逐步积累算法与工程实践能力。",
      date: "2021",
      signal: "校级奖项",
    },
  ],
};

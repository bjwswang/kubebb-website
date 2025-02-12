---
sidebar_position: 5
title: 组件评测
sidebar_label: 组件评测
---

使用智能 AI 对组件从安全性、可靠性、可用性三方面进行综合评测，为您的选择提供参考数据。

## 评测规则说明

内置安全性、可靠性、可用性三类评测任务，将任务执行结果发给 AI 进行评估。AI 分三个类别返回评分和评估结果，最终组件评分取平均值。具体评测任务介绍和评估规则技术说明，详见[**内核Kit/组件评测**](../develop-guid/core/rating/rating.md)

## 发起评测

:::tip
前提条件
- 已部署 Tekton 和 Arcadia ，部署说明详见[**快速部署**](../develop-guid/core/rating/enablerating.md)
- 组件所属组件仓库需开启`组件评测`
- 用户需要被管理员授予评测权限
:::

操作步骤如下：
1. 进入[组件市场/组件市场]页面，找到目标组件，点击组件卡片区域，进入其详情页面
2. 切换到“组件评测”页签，选择组件版本后，点击**发起评测**，二次弹框提示确定后，开始评测
3. 某组件版本“评测中”状态，不允许再发起评测。
3. 评测完成后，展示评测结果
- 评测得分：0-10，五颗星展示
- 最近一次评测时间
- 组件评测报告：分三个类型展示详细结果，包括得分、问题和建议

![overview](./image/rating.png)

4. 组件某一版本可发起多次评测，后续我们会持续优化、更新评测任务，AI 也会不断训练优化评测规则。

:::info
- 若还未部署Tekton和Arcadia，页面提示“评测系统组件未完全部署，请检查”
- 若组件所属仓库未开启`组件评测`，页面提示“请联系管理员先为组件所属仓库开启评测能力”
- 数据清理说明：手动发布的组件，在“我发布的”页面删除组件后，会删除其所有版本的评测报告；对于仓库内已有组件（非手动发布），仓库中删除组件后，也会删除其评测报告
:::
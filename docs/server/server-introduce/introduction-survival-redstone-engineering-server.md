---
sidebar_position: 4
---

# 生电服介绍

生电服的加入方法、玩法和机制等内容的介绍。

***

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

生电服版本为 `1.21.1` ，Fabric `0.17.0`

## 加入

生电服开启白名单并采取申请制。申请加入服务器需填写：[`RedStarMC生电服审核问卷`](https://scn7ok9p5g9q.feishu.cn/share/base/form/shrcnWxmR2bX8A0lUf9LcwAg0Vf)

## 机制和命令

<Tabs>
  <TabItem value="default" label="首页" default>
     点击上面的标签页查看
  </TabItem>
  <TabItem value="fzsd" label="数据包">
    有这些榜单：总榜(总览)、活跃度(在线时间)、鞘翅飞行距离、抖M榜(受伤害榜)、死亡榜、挖掘榜、钓鱼榜、击杀榜、放置榜、交易榜  
    以及掉落物定时清理，幻翼预警功能。  
    **抬头+shift打开操作页面**
  </TabItem>
  <TabItem value="tp" label="传送">
     `/tpa [玩家名]` 请求传送到指定玩家  
     `/tphere [玩家名]` 请求将指定玩家传送到自己  
     `/tphome` 传送到家  
     `/tpconfig set home` 设置家的坐标  
     `/tpspawn` 传送到重生点  
  </TabItem>
  <TabItem value="bot" label="假人控制">
    `!!bot spawn [假人名]` 快速召唤假人  
    `!!bot kill [假人名]` 快速踢出假人  

    `/player <name> attack [continuous | interval <ticks> | once]` 控制玩家持续、间隔一定时间（ticks）或单次左击。  
    `/player <name> use [continuous | interval <ticks> | once]` 控制玩家持续、间隔一定时间（ticks）或单次右击。  
    `/player <name> sneak` 玩家执行蹲下动作。  
    `/player <name> unsneak` 玩家取消蹲下动作。  
  </TabItem>
</Tabs>

## 模组&插件&数据包列表

* 地毯 (fabric-carpet)
* 传送 (tpm)
* 结构边界框 (servux-fabric)
* 潜影盒 (quickshulker)
* 模型 (ysm)

* 自动备份
* 简单 Bot 操作

* 玩家活动计分板数据包

:::note
2025-8-6开服
:::
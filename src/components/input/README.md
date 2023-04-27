## float-input组件设计文档

### 组件概述

接收用户的输入，常用于提交表单信息；

### 功能需求

1、面向toC端项目使用，主要的功能设计点在交互和用户体验上；

2、float-input输入框内的placeholder存在一个动画浮动效果；

3、获取焦点placeholder向上浮动，失去焦点placeholder回到原处；

4、输入框中有值时，失去焦点placeholder不会回到原处；

### 技术方案

1、通过原生input和label标签，描绘HTML结构；

2、通过css属性绘制组件的外观，transition控制组件的动画效果；

3、通过原生js为组件动态添加css样式，实现浮动效果。

4、通过原生js获取input的placeholder属性值，并判断输入框是否有值控制placeholder是否浮动；

### 接口说明

| 属性名    | 说明                                                                   | 类型      | 默认值  |
|--------|----------------------------------------------------------------------|---------|------|
| width  | input输入框的宽度                                                          | number | string | 300    |
| height | input输入框的高度                                                          | number | string | 50  |
| placeholder | input输入框的默认值                                                         | string  |   |
| type | input输入框placeholder的浮动位置<br />inside：浮动在输入框内侧<br/>outside：浮动在输入框顶部外侧 | string  |  inside |

### 测试方案

1、输入框获取焦点和失去焦点

- 获取焦点placeholder浮动，失去焦点placeholder会浮动回原来的位置；`(fixed)`

### 使用示例
[float-input组件测试页面](/src/views/input/FloatInputPage.vue)
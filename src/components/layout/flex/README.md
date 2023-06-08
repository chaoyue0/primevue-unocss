## row-col(flex)组件设计文档
### 组件概述
1、绘制响应式布局的页面，由行和列组成，f-row表示行，f-col表示列；


2、f-col在f-row的子级，f-row与f-col是一对多的关系且f-col为必填项；
### 技术方案
1、通过flex布局实现，使用项目的flex属性进行按比例分配空间占比；
（`暂时`只是调用flex属性进行占比分配空间，没有做类似element的el-col组件中span属性处理，根据span属性值与24的占比分配空间）

2、项目的对齐方式以及间隔距离，用到了prop父子传值，通过class动态样式进行控制，动态修改class名显示flex样式库中的样式效果；
### 接口说明
#### Row Attributes
| 属性名    | 说明                                           | 类型               | 默认值       |
|--------|----------------------------------------------|------------------|-----------|
| gutter | 项目之间的距离(主轴和交叉轴)<br/>取值范围：1-10，表示10-100px     | number、undefined | undefined |
| gutterRow | 主轴项目之间的距离<br/>取值范围：1-10，表示10-100px           | number、undefined | undefined |
| gutterCol | 交叉轴项目之间的距离<br/>取值范围：1-10，表示10-100px          | number、undefined | undefined |
| wrap | 表示是否换行                                       | boolean          | true      |
| direction | 定义主轴的排列方式<br/>enum：row、reverse、col、col-reverse | string           | row     |
| justify | 表示主轴项目的对齐方式<br/>enum：start、center、end、stretch、baseline | string           | start     |
| alignItems | 表示交叉轴项目内元素的对齐方式<br/>enum：start、center、end、stretch、baseline | string                              | string           | start     |
| alignContent | 表示主轴项目的对齐方式<br/>enum：start、center、end、stretch、baseline | string                                  | string           | start     |

#### Col Attributes
| 属性名 | 说明                                                   | 类型      | 默认值     |
|-----|------------------------------------------------------|---------|---------|
| span | 项目占据空间的比例<br/>计算方式：单个span与所有列span之和的比例               | number、undefined | undefined |
| order | 表示项目的排列顺序编号                                          | number  | 0       |
| grow | 表示项目的放大比例                                            | number  | 0       |
| shrink | 表示项目的缩小比例                                            | number  | 1       |
| auto | 表示项目平均分配全部空间                                         | boolean  | false   |
| none | 表示取消项目的flex属性                                        | boolean  | false   |
| alignSelf | 表示交叉轴上单独项目内容的对齐方式<br/>enum：start、center、end、stretch、baseline | string      | start         |
### 测试方案

### 使用示例
[f-row、f-col组件测试页面](/src/views/layout/FlexPage.vue)

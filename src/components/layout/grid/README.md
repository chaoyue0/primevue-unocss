## row-col(grid)组件设计文档
### 组件概述
1、绘制响应式布局的页面，由行和列组成，g-row表示行，g-col表示列；


2、g-col在g-row的子级，g-row与g-col是一对多的关系且g-col为必填项；
### 技术方案

1、使用prop父子传值，将获得的值与grid样式库中的样式动态搭配，以显示不同的样式效果；

2、scss预处理器的变量、html结构、js代码三者结合使用，我们可以通过js控制css样式效果。在css中定义变量a，在html中标签的style属性中重新赋值a，值来自js变量；

### 接口说明
#### Row Attributes
| 属性名 | 说明                                                                    | 类型      | 默认值   |
|-----|-----------------------------------------------------------------------|---------|-------|
| col | 容器每行划分的列数                                                             | number  | 1     |
| fixLeft | 容器左侧固定宽度，右侧自适应<br/>fixLeft值的范围：1-12<br/>fixLeft：1表示左侧固定宽度为100px       | number  | 0     |
| fixCenter | 容器中间固定宽度，左右两侧自适应<br/>fixCenter值的范围：1-12<br/>fixCenter：1表示中间固定宽度为100px | number  | 0     |
| fixRight | 容器右侧固定宽度，左侧自适应<br/>fixRight值的范围：1-12<br/>fixRight：1表示右侧固定宽度为100px     | number  | 0     |
| fixLeftValue | 容器左侧固定宽度，右侧自适应<br/>fixLeftValue值表示左侧自定义固定的宽度，单位px                     | number  | 0     |
| fixCenterValue | 容器中间固定宽度，左右两侧自适应<br/>fixCenterValue值表示中间自定义固定的宽度，单位px                 | number  | 0     |
| fixRightValue | 容器右侧固定宽度，左侧自适应<br/>fixRightValue值表示右侧自定义固定的宽度，单位px                    | number  | 0     |
| rowDense | 容器按照行优先的顺序排列项目                                                        | boolean | false |
| colDense | 容器按照列优先的顺序排列项目                                                        | boolean | false |
| rowAlign | 水平方向容器`项目`的对齐方式(start、center、end)                                     | string  | start |
| colAlign | 垂直方向容器`项目`的对齐方式(start、center、end)                                     | string | start |
| placeAlign | 水平与垂直方向容器`项目`的对齐方式(start、center、end)                                  | string | start |
| gridRowAlign | 水平方向`容器`的对齐方式(start、center、end)                                       | string  | start |
| gridColAlign | 垂直方向`容器`的对齐方式(start、center、end)                                       | string | start |

#### Col Attributes
| 属性名 | 说明                 | 类型     | 默认值  |
|-----|--------------------|--------|------|
| spanCol | 项目(单元格)合并列的数量      | number | 0    |
| spanRow | 项目(单元格)合并行的数量      | number | 0    |
| rowAlign | 项目(单元格)内部元素的水平对齐方式 | string | start |
| colAlign | 项目(单元格)内部元素的垂直对齐方式 | string | start |
### 测试方案

### 使用示例
[g-row、g-col组件测试页面](/src/views/layout/GridPage.vue)

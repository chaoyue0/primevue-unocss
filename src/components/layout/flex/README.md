## row-col组件设计文档
### 组件概述
1、绘制响应式布局的页面，由行和列组成，f-row表示行，f-col表示列；


2、f-col在f-row的子级，f-row与f-col是一对多的关系且f-col为必填项；
### 技术方案
1、通过flex布局实现，调用flex项目的flex属性进行按比例分配空间占比；
（`暂时`只是调用flex属性进行占比分配空间，没有做类似element的el-col组件中span属性处理，根据span属性值与24的占比分配空间）

2、项目的对齐方式以及间隔距离，用到了prop父子传值，通过class动态样式进行控制，动态修改class名显示flex样式库中的样式效果；

3、f-row和f-col之间并不存在父子关系，准确的说两者并不在同一条组件链上，常见的组件传值方法就不管用了，
因此引入了`第三方插件mitt`，类似于evenBus全局事件总线，可用于任何关系的组件间传值；
### 接口说明
#### Row Attributes
| 属性名 | 说明            | 类型     | 默认值  |
|-----|---------------|--------|------|
| gutter | 一行各项目之间的距离    | number | 0    |
| alignH | 一行所有项目的水平对齐方式 | string | left |
| alignV | 一行所有项目的垂直对齐方式 | string | left |

#### Col Attributes
| 属性名 | 说明                                     | 类型     | 默认值  |
|-----|----------------------------------------|--------|------|
| span | 项目占据空间的比例<br/>计算方式：单个span与所有列span之和的比例 | number | 1    |
| alignX | 一列一个项目的水平对齐方式                          | string | left |
| alignY | 一列一个项目的垂直对齐方式                          | string | left |
### 测试方案

### 使用示例
[f-row、f-col组件测试页面](/src/views/TestPageThree.vue)

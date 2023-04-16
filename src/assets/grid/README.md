## Grid布局

### 定义

- 容器：定义网格布局的区域
- 项目：容器内部的`顶层`子元素
- 网格线：划分行、列的线条，水平网格线划分行，垂直网格线划分列
- 单元格：由两条水平网格线和垂直网格线组成的一块区域

grid布局默认情况下属于块级元素，可以设置display：inline-grid设置成行内元素；

#### 与flex布局的区别：

1、布局方式
- flex是相对于轴线进行布局，属于一维布局；

- grid是相对于单元格进行布局，属于二维布局；

2、排列方式
- flex在主轴单行排列，默认不换行，项目不会超出容器，空间不足项目会被等比例压缩；

- grid容器内的项目呈块级元素排列，默认换行逐行排列，项目会超出容器；

3、尺寸的控制
- flex无法对项目具体多少占比空间进行控制，只能进行固定的几种排列模式；

- grid可以对项目的布局位置可以进行相对定位或绝对定位，可以选择绝对单位，也可以选择相对单位(fr)，也可以两者共同使用，做到更精确的占比空间；

### 使用场景
- 响应式页面布局

- 定义元素的位置

### 注意点
1、容器定义grid属性，只会影响到项目（容器下的直接子元素），不会影响到项目内的元素；

2、grid容器固定了宽度和高度，设定的列数或行数量过多会超出容器；

解决方案：

- 对于任意宽度高度的容器，给行和列设置auto-fill表示项目的数量自适应，配合`repeat(auto-fill,xxx px)`即可实现针对任何尺寸的容器都可以保证项目不超过容器；
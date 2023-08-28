# 常用命令
```
# 此项目的包管理推荐顺序 pnpm > yarn1 > npm
npm install -g pnpm

# 初始安装 | npm install
pnpm install

# 本地代理 | npm run local
pnpm local
# 开发代理 | npm run serve
pnpm serve

# 编译打包 | npm run build
pnpm build

# 此项目使用nvm工具管理node的版本
nvm ls 查看已安装的node列表
nvm install latest 安装最新的node版本
nvm install x.x.x 安装指定的node版本
nvm use x.x.x 切换成指定的node版本

安装缓慢：
nvm默认node镜像源是https://nodejs.org/dist，从默认镜像源下载会比较慢，导致卡住

解决方案：
替换成淘宝镜像源：NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node nvm install x.x.x（xxx表示具体的版本号）
```

# 编码约定

## 1、属性书写顺序
按功能进行分组，布局相关属性 > 盒模型相关属性 > 文本相关属性 > 显示效果属性

## 2、空格
选择器与 { 之间包含空格
：与属性值之间包含空格

## 3、选择器
一条rule包含多个选择器，每个选择器声明独占一行
嵌套层级不大于3级

## 4、数值
0-1之间的数值，省略整数部分的0，例如：0.8只写.8
定义line-height用数值表示相对于字号的行高

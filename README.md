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


# 依赖说明
因json格式天然不能注释，且npm体系内目前没有优雅解，需要以文档形式标注。
每增加一个依赖，要说明其作用，选择依据，版本要求和注意事项，以方便升级和维护。
依赖的版本，建议固定具体版本，至少固定小版本，主要考虑到npm社区的脆弱性

## 运行依赖 Dependencies

- pinia：状态管理器([Pinia](https://pinia.vuejs.org/))
- primeflex：css工具库，包含flexbox、grid系统以及常见布局样式([PrimeFlex](https://primeflex.org/installation))
- primeicons： primeVue默认的icon库([PrimeIcons](https://primevue.org/icons/))
- primevue：css样式库([PrimeVue](https://primevue.org/introduction/))
- unocss：原子化css引擎，更灵活、可扩展性更强([UnoCSS](https://unocss.dev/guide/) / [preset-uno文档](https://unocss.dev/interactive/))


## 编译依赖 DevDependencies

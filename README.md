# 安装
## 全局安装 express-generator
npm i express-generator -g
## 安装 express 项目 --view=jade指jade格式的视图模板 后面跟项目名称
express --view=jade server-side
## 安装依赖
npm i
## 安装 TS
npm i typescript
## 安装声明文件
npm i @types/express @types/node -D

1. 将 bin 目录下的 www 文件放在根目录下，并改名为 server.ts
2. app.js 重命名为 app.ts，包括routes下的文件
3. 在命令行使用 tsc --init 初始化ts的配置文件
4. tsconfig.json 文件中：
  1. "outDir": "./dist/",
  2. // "strict": true,
  3. "noImplicitAny": false, // 改为false
  4. "moduleResolution": "node",
  5. "baseUrl": ".", // 改为 .
  6. "paths": {
      "*": ["node_modules/*", "./types/*"]
    }, // 查找声明文件，先在 node_modules 中找，找不到去自己创建的 types 中查找
5. package.json 文件中：
  "start": "node run serve",
  "serve": "node ./dist/server.js",
  "build": "tsc && node handle-public.js", // 打包
  "watch-dev": "cross-env NODE_ENV=development nodemon -e ts,tsx --exec 'ts-node' ./server.ts" // 本地开发
6. 根目录下创建 handle-public.js 文件，用于处理 public 文件夹下的静态文件，因为不会被打包到 dist 文件夹中，所以要进行拷贝处理
7. 安装开发依赖 nodemon：npm i nodemon -D
8. 安装依赖 cross-env：npm i cross-env
9. 安装开发依赖 ts-node:npm i ts-node -D 使node环境直接运行ts文件
10. 安装依赖 mysql: npm i mysql
11. 安装开发依赖声明文件 @types/mysql：npm i @types/mysql -D

# 开发
  1. config：
    1. mysql.config.ts 写入开发和生产环境的配置数据库名称端口等

  2. model:
    1. index.ts 引入配置，连接数据库
    2. tables 文件夹：创建表
      1. image.ts 图片上传

  3. 在 server.ts 文件中引入
    require('./model')
  
  4. views页，
    1. 新建 upload.jade 为上传文件页

  5. 在 routes 的 index.ts 中引入
    新建 api.ts 文件

  6. 在 app.ts 中 引入 api.ts 模块
    在controller中新建api.ts
    - 安装：
      npm i formidable
      npm i @types/formidable -D
    在utils文件夹中新建 file_upload.ts 用来处理文件的上传

  7. 
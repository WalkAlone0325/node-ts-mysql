// 开发环境配置
const devConfig = {
  host: 'localhost',
  database: 'ts', // 数据库名
  user: 'root',
  password: 'Jsw!@1111'
}
// 生产环境配置
const prodConfig = {
  host: 'xxx.xxxx.xxx.xxx',
  database: 'ts',
  port: 3306
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig
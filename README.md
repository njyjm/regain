## node 后端 /back-end

在 `/back-end` 目录下创建 `config` 文件夹。

- 在其下添加 `database.js`

```javascript
const data = {
    url:'database-host',  //host
    port:'3306'
    user:'database-user',  //user
    pwd:'database-pwd',   //password
    database:'database-database' //database

}

module.exports =  data
```

- 在其下添加 `token-secret.js` 用来当作 `token` 的公钥。

  ` module.exports = 'node-koa' `



## vue3 前端 /front-end
## 修改记录
在 `/back-end` 目录下创建 `config` 文件夹，并添加`database.js`和`token-secret.js`,添加 `port:'3306'`
在 `mysql` 中只需添加一个 `regaindb` 数据库，启动后端 `app.js`, `sequlize`组件可在数据库中创建两个表`user` 和 `list`
更新`ant-design-vue`版本








# Webpack + Vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# 本機端開發版本 localhost:8080
npm run dev

# 最終上線版本
npm run build
```
## Create New VUe

> main.js

## Components Create Rule

> App.vue
>> 專案起始點

```bash
<template src="./dome.html"></template>
<style lang="scss" scoped src="./dome.scss"></style>
<script>
export default {
  name: 'dome',
  data(){
    return{
      //variable...
    }
  }
}
</script>
```

## Vuex
> 資料夾 -> store

> index.js
>> vuex進入點
>> modules -> import module

> initState.js
>> state 初始化設定

## vue-router
> 資料夾 -> routes
> index.js
>> router settings

## 靜態檔案
> 資料夾 -> static
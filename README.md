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
## Webpack Config
> 資料夾 -> build

## Create New Vue

> 入口
`main.js`

## Components

> 起點
>> App.vue 
>> App.html 
>> App.scss 

## Create Rule
> dome
>> dome.vue 
>> dome.html 
>> dome.scss 

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
>> index.js
>>> router settings

## 靜態檔案
> 資料夾 -> static

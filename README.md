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

<template>
    <div class="UenDigital-warpper">
        <header>
            <img src="./../../../static/images/Retro-camera_m.jpg" alt="">
        </header>
        <div class="container">
            <h1 v-text="title"></h1>
            <p v-text="description"></p>
        </div>
        <footer v-text="copyright"></footer>
    </div>
</template>
<script src="./UdnDigital.js"></script>
<style lang="sass" scoped src="./UdnDigital.scss"></style>
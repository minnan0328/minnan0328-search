<template>
    <div class="caplitomo-warpper">
        <nav>
            <div class="left">
                <img src="./../../../static/img/caplitomo03.jpeg" alt="">
                <h1 v-text="title"></h1>
            </div>
            <div class="right">
                <a href="javascript:void(0)">Home</a>
                <a href="javascript:void(0)">About</a>
                <a href="javascript:void(0)">Photo</a>
                <a href="javascript:void(0)">Contact me</a>
            </div>
        </nav>
        <div class="container-warpper">
            <header>
                <div class="Jumbotron">
                    <h1 v-text="'Caplitomo'"></h1>
                    <p>Caplitomo...</p>
                    <!-- <img src="./../../../static/img/caplitomo01.jpeg"> -->
                </div>
                <img src="./../../../static/img/caplitomo02.jpeg">
            </header>
            <div class="container">
                <!-- <div class="caplitomo-data">
                    <div class="left">
                        <img src="./../../../static/img/caplitomo03.jpeg">
                    </div>
                    <div class="right">
                        <h5>caplitomo</h5>
                        <p>caplitomo</p>
                    </div>
                </div> -->
            </div>
            <footer>
                <p v-text="CopyrightOwnership"></p>
            </footer>
        </div>
    </div>
</template>
<script src="./Caplitomo.js"></script>
<style lang="sass" scoped src="./Caplitomo.scss"></style>
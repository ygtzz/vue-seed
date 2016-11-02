<template lang="html">
   <div :class="{'c-hidden': !cLoading}" class="c-loading">
	    <img src="./img/loading.gif" alt="loading..." />
   </div>
</template>

<script>
    import Vue from "vue";

    export default Vue.component("c-loading", {
        className: 'c-loading',
        props: ['cLoading']
    });
</script>

<style lang="sass" scoped>
    $height:30px;
    $width:20px;
    
    .c-loading{
        margin-top: 200px;
        width: $width;
        height: $height;
        position: absolute;
        top:50%;
        left:50%;
        margin-top: -$height/2;
        margin-left: -$width/2;
        z-index: 999
    }

    .c-hidden{
        display: none;
    }
</style>
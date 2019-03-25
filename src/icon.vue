<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href='iconS'></use>
    </svg>
</template>

<script>
export default {
    name:'GIcon',
    props:{
        icon: {
            type: String,
        }
    },
    computed:{
        iconS(){
            return `#i-${this.icon}`
        }
    }
}
</script>

<style>
.icon {
       width: 1em; height: 1em;
       /* vertical-align: -0.15em; */
       /* fill: currentColor;
       overflow: hidden;
       vertical-align: middle */
    }
</style>

<template>
    <div class="title">
        <div class="title__text">{{ text }}</div>
        <div class="title__deco"></div>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: ['text']
}
</script>

<style lang='stylus' scoped>
@import './title.styl'
</style>
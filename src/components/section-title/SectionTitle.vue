<template>
    <div class="section-title">
        <div class="section-title__text">{{ subtext }}</div>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['subtext']
}
</script>

<style lang='stylus' scoped>
@import './section-title.styl'
</style>
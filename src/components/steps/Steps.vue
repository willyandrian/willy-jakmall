<template>
    <div class="steps">
        <ul class="steps__list">
            <li class="steps__item steps__item--first" v-bind:class="{ 'steps__item--active': current.delivery && !current.payment }">
                <span class="steps__badge" v-bind:class="{ 'steps__badge--finished': current.delivery }">1</span> Delivery
            </li>
            <li class="steps__item"><span class="steps__arrow">></span></li>
            <li class="steps__item" v-bind:class="{ 'steps__item--active': current.payment && !current.finish }">
                <span class="steps__badge" v-bind:class="{ 'steps__badge--finished': current.payment }">2</span> Payment
            </li>
            <li class="steps__item"><span class="steps__arrow">></span></li>
            <li class="steps__item steps__item--last" v-bind:class="{ 'steps__item--active': current.finish }">
                <span class="steps__badge" v-bind:class="{ 'steps__badge--finished': current.finish }">3</span> Finish
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Steps',
    props: ['current']
}
</script>

<style lang='stylus' scoped>
@import './steps.styl';
</style>
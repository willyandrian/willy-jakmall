<template>
  <div class="finish">
    <div class="finish__steps">
      <Steps :current="steps" />
    </div>
    
    <div class="finish__form">
      <div class="finish__form-content">
        <div class="finish__form-section">
            <div class="finish__form-wrapper">
                <div><Title text="Thank you" /></div>
                <div class="finish__order">
                    <div>Order ID: {{ randomCode(5) }}</div>
                    <div class="finish__order-message">Your order will be delivered today with {{ this.$store.get('shipmentState').name }}</div>
                </div>
                <div class="finish__back-to-homepage">
                    <span @click="backAndResetState"><font-awesome-icon icon="arrow-left" /> Go to homepage</span>
                </div>
            </div>
        </div>

        <div class="finish__summary-section">
          <div>
            <Summary :steps="steps" :shipmentPrice="shipmentPrice" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from '@/components/steps/Steps.vue';
import Summary from '@/components/summary/Summary.vue';
import Title from '@/components/page-title/Title.vue';

export default {
  name: 'Finish',
  components: {
    Steps, Summary, Title
  },
  data() {
    return {
      shipmentPrice: this.$route.params.shipmentPrice,
      steps: {
        delivery: true,
        payment: true,
        finish: true
      }
    }
  },
  created() {
    this.shipmentPrice = this.$route.params.shipmentPrice;
  },
  methods: {
    randomCode(len) {
    	let text = " "
    	let chars = "abcdefghijkmnpqrstuvwxyz23456789"
    
      for( let i=0; i < len; i++ ) {
				text += chars.charAt(Math.floor(Math.random() * chars.length))
      }

			return text
    },
    backAndResetState() {
      this.$store.clearAll();
      window.location.href = "./";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
@import './finish.styl';
</style>

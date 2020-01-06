<template>
  <div class="summary">
	<div>
		<SectionTitle subtext="Summary" />
	</div>

	<div class="summary__purchased-item summary__purchased-item--big">
		10 items purchased
	</div>

	<div class="summary__separator" v-bind:class="{ 'summary__separator--hidden': !steps.payment}"></div>

	<div class="summary__delivery-estimation summary__delivery-estimation--big" v-bind:class="{ 'summary__delivery-estimation--hidden': !steps.payment}">
		<div>Delivery estimation</div>
		<div class="summary__chosen-delivery">{{ shipment.estimation ? shipment.estimation : this.$store.get('shipmentState').estimation }} by {{ shipment.name ? shipment.name : this.$store.get('shipmentState').name }}</div>
	</div>

	<div class="summary__separator" v-bind:class="{ 'summary__separator--hidden': !steps.finish}"></div>

	<div class="summary__payment-method summary__payment-method--big" v-bind:class="{ 'summary__payment-method--hidden': !steps.finish}">
		<div>Payment method</div>
		<div class="summary__chosen-method">{{ payment.name ? payment.name : this.$store.get('paymentState').name }}</div>
	</div>

	<div class="summary__calculation">
		<div class="summary__calc-list">
			<div class="summary__calc-item">
				<div class="summary__calc-label">Cost of goods</div>
				<div class="summary__calc-price">500,000</div>
			</div>

			<div class="summary__calc-item" v-bind:class="{ 'summary__calc-item--hidden': !deliveryState.dropship }">
				<div class="summary__calc-label">Dropshipping Fee</div>
				<div class="summary__calc-price">5,900</div>
			</div>

			<div class="summary__calc-item" v-bind:class="{ 'summary__payment-method--hidden': !steps.payment}">
				<div class="summary__calc-label"><span class="summary__calc-label-highlight">{{ shipment.name ? shipment.name : this.$store.get('shipmentState').name }}</span> shipment</div>
				<div class="summary__calc-price">{{ shipment.desc ? shipment.desc : this.$store.get('shipmentState').desc }}</div>
			</div>
		</div>

		<div class="summary__total">
			<div class="summary__total-label">Total</div>
			<div class="summary__total-number">
				<span v-if="deliveryState.dropship == false">{{ (500000 + (shipment.price ? shipment.price : shipmentPrice)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
				<span v-if="deliveryState.dropship == true">
					{{ (500000 + 5900 + (shipment.price ? shipment.price : shipmentPrice)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
				</span>
			</div>
		</div>
	</div>

	<div class="summary__pay" v-if="steps.finish != true">
		<button type="submit" @click="submit" class="summary__pay-button">{{ btnText }}</button>
	</div>
  </div>
</template>


<script>
import SectionTitle from '@/components/section-title/SectionTitle.vue';

export default {
	name: 'Summary',
	components: {
		SectionTitle
	},
	props: {
		steps: {
			default: function() {
				return {
					delivery: false,
					payment: false,
					finish: false
				}
			},
			type: Object
		},
		btnText: {
			default: 'Process',
			type: String
		},
		shipment: {
			default: function() {
				return {
					id: undefined,
					name: '',
					desc: '',
					estimation: '',
					price: 0
				}
			},
			type: Object
		},
		shipmentPrice: {
			default: 0
		},
		payment: {
			default: function() {
				return {
					id: undefined,
					name: '',
					desc: ''
				}
			},
			type: Object
		}
	},
	methods: {
		submit() {
			this.$emit('submit')
		}
	}
}
</script>

<style lang='stylus' scoped>
@import './summary.styl'
</style>

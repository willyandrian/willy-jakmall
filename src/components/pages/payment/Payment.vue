<template>
  <div class="payment">
    <div class="payment__steps">
      <Steps :current="steps" />
    </div>
    
    <div class="payment__form">
      <div class="payment__back-to-cart">
        <font-awesome-icon icon="arrow-left" /> Back to cart
      </div>

      <div class="payment__form-content">
        <div class="payment__form-section">
            <div class="payment__shipment">
              <div class="payment__shipment-title">
                <Title text="Shipment" />
              </div>

              <div class="payment__shipment-list">
                <div v-for="(data, index) in shipments" :key="index" class="payment__item" v-bind:class="{ 'payment__item--checked': data.id == selectedShipment.id }" @click="updateShipment(data.id)">
                  <div class="payment__wrap-item">
                    <div class="payment__item-info">
                      <div class="payment__item-label">{{ data.name }}</div>
                      <div class="payment__item-price payment__item-price--bold">{{ data.desc }}</div>
                    </div>
                  </div>

                  <div class="payment__item-checked">
                    <div v-if="data.id == selectedShipment.id">
                      <font-awesome-icon icon="check" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="payment__method">
              <div class="payment__method-title">
                <Title text="Payment" />
              </div>

              <div class="payment__method-list">
                <div v-for="(data, index) in payments" :key="index" class="payment__item" :class="{ 'payment__item--checked': data.id == selectedPayment.id }" @click="updatePayment(data.id)">
                  <div class="payment__wrap-item">
                    <div class="payment__item-info">
                      <div class="payment__item-label">{{ data.name }}</div>
                      <div v-if="data.desc != ''" class="payment__item-price payment__item-price--bold" v-bind:class="{ 'payment__item-price--hide': data.desc == '' }">{{ data.desc }}</div>
                    </div>
                  </div>

                  <div class="payment__item-checked">
                    <div v-if="data.id == selectedPayment.id">
                      <font-awesome-icon icon="check" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="payment__summary-section">
          <div>
            <Summary :btnText="'Pay with ' + selectedPayment.name" @submit="submitPayment" :dropship="true" :steps="steps" :shipment="selectedShipment" :payment="selectedPayment" />
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
  name: 'Payment',
  components: {
    Steps, Summary, Title
  },
  data() {
    return {
      selectedShipment: {
        ...this.$store.get('shipmentState')
      },
      selectedPayment: {
        ...this.$store.get('paymentState')
      },
      shipments: [
        { id: 0, name: 'GO-SEND', desc: '15,000', estimation: 'today', price: 15000 },
        { id: 1, name: 'JNE', desc: '9,000', estimation: '2 days', price: 9000 },
        { id: 2, name: 'Personal Courier', desc: '29,000', estimation: '1 day', price: 29000 }
      ],
      payments: [
        { id: 0, name: 'e-Wallet', desc: '1,500,000 left' },
        { id: 1, name: 'Bank Transfer', desc: '' },
        { id: 2, name: 'Virtual Account', desc: '' }
      ],
      steps: {
        delivery: true,
        payment: true,
        finish: false
      }
    }
  },
  methods: {
    updateShipment(id) {
      const shipmentId = this.shipments.findIndex(shipment => {
        return shipment.id === id
      });

      const shipment = {...this.shipments[shipmentId]};

      this.$store.set('shipmentState', shipment);
      this.selectedShipment = shipment;
    },
    updatePayment(id) {
      const paymentId = this.payments.findIndex(payment => {
        return payment.id === id
      });

      const payment = {...this.payments[paymentId]};

      this.$store.set('paymentState', payment);
      this.selectedPayment = payment;
    },
    submitPayment() {
      this.$router.push({ name: 'Finish', params: { shipmentPrice: this.selectedShipment.price } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
@import './payment.styl';
</style>

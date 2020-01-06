<template>
  <div class="delivery">
    <div class="delivery__steps">
      <Steps :current="steps" />
    </div>
    
    <div class="delivery__form">
      <div class="delivery__back-to-cart">
        <font-awesome-icon icon="arrow-left" /> Back to cart
      </div>

      <div class="delivery__form-content">
        <form class="delivery__form-input" @submit.prevent>
          <div class="delivery__form-section">
              <div class="delivery__heading">
                <div class="delivery__head-title">
                  <Title text="Delivery details" />
                </div>

                <div class="delivery__dropship-section">
                  <div>
                    <input type="checkbox" v-model="deliveryState.dropship" class="delivery__dropshipper-checkbox" @keydown.enter.prevent /> Send as dropshipper
                  </div>
                </div>
              </div>

              <div class="delivery__inputs">
                <div class="delivery__input-containing">
                  <div 
                    class="delivery__input-icon-wrapper" 
                    v-bind:class="{ 
                        'delivery__input-icon-wrapper--error': errors.has('email') && deliveryState.email.length != 0, 'delivery__input-icon-wrapper--success': !errors.has('email') && deliveryState.email.length != 0 
                  }">
                    <div class="delivery__input-and-icon" >
                      <div class="delivery__input-wrap">
                        <input type="text" 
                          v-model="deliveryState.email" 
                          v-validate.initial="'required|email'" 
                          class="delivery__input-text" 
                          placeholder=" "
                          name="email"
                          @keydown.enter.prevent
                        >
                        <label 
                          for="email" 
                          class="delivery__input-label" 
                          v-bind:class="{ 
                            'delivery__input-label--error': errors.has('email') && deliveryState.email.length != 0,
                            'delivery__input-label--success': !errors.has('email') &&
                            deliveryState.email.length != 0
                        }">
                          Email
                        </label>
                      </div>

                      <div class="delivery__input-status" v-if="deliveryState.email.length != 0">
                        <div v-if="!errors.has('email')"><font-awesome-icon icon="check" :style="{ color: '#1bd97b' }" /></div>
                        <div v-if="errors.has('email')"><font-awesome-icon icon="times" :style="{ color: '#ff8a00' }" /></div>
                      </div>
                    </div>
                  </div>

                  <div class="delivery__input-error-msg" v-if="errors.has('email') && deliveryState.email.length != 0">
                    {{ errors.first('email') }}
                  </div>
                </div>

                <div class="delivery__input-containing" v-bind:class="{ 'delivery__input-containing--disabled': !deliveryState.dropship }">
                  <div 
                    class="delivery__input-icon-wrapper" 
                    v-bind:class="{ 
                        'delivery__input-icon-wrapper--error': errors.has('dropshipper_name') && deliveryState.dropshipperName.length != 0 && deliveryState.dropship, 'delivery__input-icon-wrapper--success': !errors.has('dropshipper_name') && deliveryState.dropshipperName.length != 0 && deliveryState.dropship, 
                        'delivery__input-icon-wrapper--disabled': !deliveryState.dropship
                  }">
                    <div class="delivery__input-and-icon" >
                      <div class="delivery__input-wrap">
                        <input type="text" 
                          v-model="deliveryState.dropshipperName" 
                          v-validate.initial="'required|min:6|max:30'" 
                          class="delivery__input-text"
                          placeholder=" "
                          name="dropshipper_name"
                          :disabled="deliveryState.dropship == false"
                          @keydown.enter.prevent
                        >
                        <label 
                          for="dropshipper_name" 
                          class="delivery__input-label" 
                          v-bind:class="{ 
                            'delivery__input-label--error': errors.has('dropshipper_name') && deliveryState.dropshipperName.length != 0 && deliveryState.dropship,
                            'delivery__input-label--success': !errors.has('dropshipper_name') &&
                            deliveryState.dropshipperName.length != 0 && deliveryState.dropship
                        }">
                          Dropshipper Name
                        </label>
                      </div>

                      <div class="delivery__input-status" v-if="deliveryState.dropshipperName.length != 0">
                        <div v-if="!errors.has('dropshipper_name') && deliveryState.dropship"><font-awesome-icon icon="check" :style="{ color: '#1bd97b' }" /></div>
                        <div v-if="errors.has('dropshipper_name') && deliveryState.dropship"><font-awesome-icon icon="times" :style="{ color: '#ff8a00' }" /></div>
                      </div>
                    </div>
                  </div>

                  <div class="delivery__input-error-msg" v-if="errors.has('dropshipper_name') && deliveryState.dropshipperName.length != 0 && deliveryState.dropship">
                    {{ errors.first('dropshipper_name') }}
                  </div>
                </div>

                <div class="delivery__input-containing">
                  <div 
                    class="delivery__input-icon-wrapper" 
                    v-bind:class="{ 
                        'delivery__input-icon-wrapper--error': errors.has('phone_number') && deliveryState.phoneNumber.length != 0, 'delivery__input-icon-wrapper--success': !errors.has('phone_number') && deliveryState.phoneNumber.length != 0
                  }">
                    <div class="delivery__input-and-icon">
                      <div class="delivery__input-wrap">
                        <input type="text" 
                          v-model="deliveryState.phoneNumber" 
                          v-validate.initial="{ required: true, min: 6, max: 20, regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/ }" 
                          class="delivery__input-text"
                          placeholder=" "
                          name="phone_number"
                          @keydown.enter.prevent
                        >

                        <label 
                          for="phone_number" 
                          class="delivery__input-label" 
                          v-bind:class="{ 
                            'delivery__input-label--error': errors.has('phone_number') && deliveryState.phoneNumber.length != 0,
                            'delivery__input-label--success': !errors.has('phone_number') &&
                            deliveryState.phoneNumber.length != 0
                        }">
                          Phone Number
                        </label>
                      </div>

                      <div class="delivery__input-status" v-if="deliveryState.phoneNumber.length != 0">
                        <div v-if="!errors.has('phone_number')"><font-awesome-icon icon="check" :style="{ color: '#1bd97b' }" /></div>
                        <div v-if="errors.has('phone_number')"><font-awesome-icon icon="times" :style="{ color: '#ff8a00' }" /></div>
                      </div>
                    </div>
                  </div>

                  <div class="delivery__input-error-msg" v-if="errors.has('phone_number') && deliveryState.phoneNumber.length != 0">
                    {{ errors.first('phone_number') }}
                  </div>
                </div>

                <div class="delivery__input-containing" v-bind:class="{ 'delivery__input-containing--disabled': !deliveryState.dropship }">
                  <div 
                    class="delivery__input-icon-wrapper" 
                    v-bind:class="{ 
                        'delivery__input-icon-wrapper--error': errors.has('dropshipper_phone_number') && deliveryState.dropshipperPhoneNumber.length != 0 && deliveryState.dropship, 'delivery__input-icon-wrapper--success': !errors.has('dropshipper_phone_number') && deliveryState.dropshipperPhoneNumber.length != 0 && deliveryState.dropship,
                        'delivery__input-icon-wrapper--disabled': !deliveryState.dropship
                  }">
                    <div class="delivery__input-and-icon">
                      <div class="delivery__input-wrap">
                        <input type="text" 
                          v-model="deliveryState.dropshipperPhoneNumber" 
                          v-validate.initial="{ required: true, min: 6, max: 20, regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/ }" 
                          class="delivery__input-text"
                          placeholder=" "
                          name="dropshipper_phone_number"
                          :disabled="deliveryState.dropship == false"
                          @keydown.enter.prevent
                        >

                        <label 
                          for="dropshipper_phone_number" 
                          class="delivery__input-label" 
                          v-bind:class="{ 
                            'delivery__input-label--error': errors.has('dropshipper_phone_number') && deliveryState.dropshipperPhoneNumber.length != 0 && deliveryState.dropship,
                            'delivery__input-label--success': !errors.has('dropshipper_phone_number') &&
                            deliveryState.dropshipperPhoneNumber.length != 0 && deliveryState.dropship
                        }">
                          Dropshipper Phone Number
                        </label>
                      </div>

                      <div class="delivery__input-status" v-if="deliveryState.dropshipperPhoneNumber.length != 0">
                        <div v-if="!errors.has('dropshipper_phone_number') && deliveryState.dropship"><font-awesome-icon icon="check" :style="{ color: '#1bd97b' }" /></div>
                        <div v-if="errors.has('dropshipper_phone_number') && deliveryState.dropship"><font-awesome-icon icon="times" :style="{ color: '#ff8a00' }" /></div>
                      </div>
                    </div>
                  </div>

                  <div class="delivery__input-error-msg" v-if="errors.has('dropshipper_phone_number') && deliveryState.dropshipperPhoneNumber.length != 0 && deliveryState.dropship">
                    {{ errors.first('dropshipper_phone_number') }}
                  </div>
                </div>

                <div class="delivery__input-containing">
                  <div 
                    class="delivery__input-icon-wrapper" 
                    v-bind:class="{ 
                        'delivery__input-icon-wrapper--error': errors.has('delivery_address') && deliveryState.deliveryAddress.length != 0, 'delivery__input-icon-wrapper--success': !errors.has('delivery_address') && deliveryState.deliveryAddress.length != 0 
                  }">
                    <div class="delivery__input-and-icon" >
                      <div class="delivery__input-wrap">
                        <textarea
                          rows="5"
                          v-model="deliveryState.deliveryAddress" 
                          v-validate.initial="'required|min:6|max:120'" 
                          class="delivery__input-text delivery__input-text--no-resize" 
                          placeholder=" "
                          name="delivery_address">
                        </textarea>

                        <label 
                          for="delivery_address" 
                          class="delivery__input-label" 
                          v-bind:class="{ 
                            'delivery__input-label--error': errors.has('delivery_address') && deliveryState.deliveryAddress.length != 0,
                            'delivery__input-label--success': !errors.has('delivery_address') &&
                            deliveryState.deliveryAddress.length != 0
                        }">
                          Delivery Address ({{ 120 - deliveryState.deliveryAddress.length }})
                        </label>
                      </div>

                      <div class="delivery__input-status" v-if="deliveryState.deliveryAddress.length != 0">
                        <div v-if="!errors.has('delivery_address')"><font-awesome-icon icon="check" :style="{ color: '#1bd97b' }" /></div>
                        <div v-if="errors.has('delivery_address')"><font-awesome-icon icon="times" :style="{ color: '#ff8a00' }" /></div>
                      </div>
                    </div>
                  </div>

                  <div class="delivery__input-error-msg" v-if="errors.has('delivery_address') && deliveryState.deliveryAddress.length != 0">
                    Type atleast 6 characters, maximum 120 characters
                  </div>
                </div>
              </div>
          </div>

          <div class="delivery__summary-section">
            <div>
                <Summary btnText="Continue to Payment" @submit="submitDelivery" :steps="steps" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from '@/components/steps/Steps.vue';
import Summary from '@/components/summary/Summary.vue';
import Title from '@/components/page-title/Title.vue';

export default {
  name: 'Delivery',
  components: {
    Steps, Summary, Title
  },
  data() {
    return {
      steps: {
        delivery: true,
        payment: false,
        finish: false
      },
      isTicked: true
    }
  },
  methods: {
    submitDelivery() {
      this.$validator.validateAll().then(result => {
        if (result) this.$router.push({ name: 'Payment' })
        else alert("Please make sure all input green checked");
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
@import './delivery.styl'
</style>

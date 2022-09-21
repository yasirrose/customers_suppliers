<template>
  <b-row>
    <b-col cols="12">
      <b-card-code title="Update Profile">
        <div v-if="validationErrors">
          <ul class="alert alert-danger">
            <li v-for="(value, key, index) in validationErrors">{{ value }}</li>
          </ul>
        </div>
   
        <validation-observer ref="simpleRules">
          <b-form>
            <b-row>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="User Name" rules="required">
                    <b-form-input
                      v-model="name"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter First Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <!-- <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="last_name" rules="required">
                    <b-form-input
                      v-model="last_name"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter Last Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>-->
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="email" rules="required">
                    <b-form-input
                      v-model="email"
                      :state="errors.length > 0 ? false:null"
                      type="email"
                      placeholder="Please Enter Email"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="Country" rules="required">
                    <b-form-input
                      v-model="country"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter Country Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="Province" rules="required">
                    <b-form-input
                      v-model="province"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter Province Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="City" rules="required">
                    <b-form-input
                      v-model="city"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter City Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="Address" rules="required">
                    <b-form-input
                      v-model="address"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter Address"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="Postcode" rules="required">
                    <b-form-input
                      v-model="postcode"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter Postcode"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="Phone" rules="required">
                    <b-form-input
                      v-model="phone"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter Phone Number"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="Contact Number" rules="required">
                    <b-form-input
                      v-model="contact"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Please Enter Contact Number"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <validation-provider #default="{ errors }" name="Currency" rules="required">
                    <b-form-select v-model="currencyId" :options="currency"/>
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <b-form-file
                    v-model="file"
                    ref="refInputEl"
                    accept=".jpg, .png, .gif"
                    placeholder="Choose a file.."
                    drop-placeholder="Drop file here..."
                    v-on:change="selectFile($event)"
                  />
                </b-form-group>
              </b-col>
              <!-- submit button -->
              <b-col md="12">
                <b-button variant="primary" :disabled="isDisabled" type="submit" @click.prevent="validationForm">Submit</b-button>
              </b-col>
            </b-row>
          </b-form>
        </validation-observer>
      </b-card-code>
    </b-col>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Verification Code For Email"
        @show="resetModal"
        @hidden="resetModal"
        @ok="verifyCode"
      >
      <div v-if="codeStatus">
        <span class="alert alert-info">{{ codeMessage }}</span>
      </div>
      <validation-observer ref="validatorForCode">
        <form ref="form" @submit.stop.prevent="createItem">
          <b-form-group>
            <validation-provider #default="{ errors }" name="code" rules="required">
              <b-form-input
                v-model="code"
                :state="errors.length > 0 ? false:null"
                type="text"
                placeholder="Enter verification code"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </form>
      </validation-observer>
      </b-modal>
  </b-row>
</template>
<script>
import BCardCode from "@core/components/b-card-code";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
  BFormInput,
  BFormGroup,
  BForm,
  BRow,
  BCol,
  BButton,
  BFormSelect,
   BMedia,
    BMediaAside,
    BMediaBody,
    BLink,
    BImg,
    BFormFile,
    BAlert,
    BCardText,
} from "bootstrap-vue";
import { required, email, confirmed } from "@validations";
import AdminApi from "../../../api/admin";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
//import Ripple from 'vue-ripple-directive'
//import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
 //import { ref } from '@vue/composition-api'
export default {
  components: {
    BCardCode,
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormSelect,
     BMedia,
    BMediaAside,
    BMediaBody,
    BLink,
    BImg,
    BFormFile,
    BAlert,
    BCardText,
  },
  data() {
    return {
      email: "",
      name: "",
      //last_name: "",
      country: "",
      province: "",
      city: "",
      address: "",
      postcode: "",
      phone: "",
      contact: "",
      currencyId: null,
      currency: [{ value: null, text: "Please select a currency" }],
      previousEmail : '',
      code : '',
      isModalShow : false,

      validationErrors: "",
      codeStatus: false,
      codeMessage: false,
      image:null,
      isDisabled: false,
      file: null,
    };
  },

  created() {
    this.getAllCurrencies();
    this.getProfileInfo();
  },
  methods: {
    selectFile(e)
    {
      this.image = e.target.files[0];
    },
    uploadFile()
    {
       const fd = new FormData();
      fd.append('image', this.image, this.image.name);
      AdminApi.uploadFile(fd,data=>{
        if(data.success){
          console.log('upload file data is', data)
        }

      },err=>
      {
        console.log(err);
      })
      //console.log('the formdata obj is', fd);
    },
    getAllCurrencies() {
      AdminApi.getData(
        "getAllCurrencies",
        res => {
          for (let i = 0; i < res.data.length; i++) {
            this.currency.push({
              value: res.data[i].id,
              text: res.data[i].currency
            });
          }
          //console.log('the get currency response is',res.data);
        },
        err => {
          console.log(err);
        }
      );
    },
    getProfileInfo() {
      AdminApi.getData(
        "getProfileInfo",
        res => {
          //console.log('the get profile response is ',res.data);
          this.name = res.data.name;
          //this.last_name = res.data.last_name;
          this.email = res.data.email;
          this.previousEmail = res.data.email;
          this.country = res.data.country;
          this.province = res.data.province;
          this.city = res.data.city;
          this.address = res.data.address;
          this.postcode = res.data.postcode;
          this.phone = res.data.phone;
          this.contact = res.data.contact;
          this.currencyId = res.data.currency_id;
        },
        err => {
          console.log(err);
        }
      );
    },
    resetModal() {
      this.code = ''
    },
    createItem(){
      this.$refs.validatorForCode.validate().then(success => {
        if (success) {
          AdminApi.checkVerificationCode(
            this.info = {
                code : this.code
              },
            data => {
              if (data.status) {
                this.updateProfileData();
                this.$toast({
                  component: ToastificationContent,
                  props: {
                    title: "Failed",
                    text: data.message,
                    icon: "UserIcon",
                    variant: "outline-success"
                  }
                });
              } else {
                this.$toast({
                  component: ToastificationContent,
                  props: {
                    title: "Failed",
                    text: data.message,
                    icon: "errorIcon",
                    variant: "outline-danger"
                  }
                });
              }
            },
            err => {
              console.log(err);
            }
          );
        }
      })
    },
    verifyCode(bvModalEvent){
        bvModalEvent.preventDefault()
        this.createItem()
    },
    validationForm() {
      this.isDisabled = true;
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          if(this.email != this.previousEmail){
            this.isModalShow = true;
            AdminApi.sendVerificationCode(
              this.info = {
                email : this.email
              },
              data => {
                console.log(data.status)
                if(data.status == 201){
                  this.$bvModal.show('modal-prevent-closing')
                  this.codeMessage = data.message;
                  this.codeStatus = true;
                }
              },
              err => {
                console.log(err);
              }
            );
          } else {
            this.updateProfileData();
          }
        } else {
          this.isDisabled = false;
        }
      });
    },
    updateProfileData(){
      this.validationErrors = "";
          var fd = new FormData();
          if(this.image !=null){
            fd.append('image', this.image, this.image.name);
          }
          fd.append('name', this.name);
          fd.append('email', this.email);
          fd.append('country', this.country);
          fd.append('province', this.province);
          fd.append('city', this.city);
          fd.append('address', this.address);
          fd.append('postcode', this.postcode);
          fd.append('phone', this.phone);
          fd.append('contact', this.contact);
          fd.append('currency_id', this.currencyId);
          AdminApi.updateProfileInfo(
            fd
            ,
            data => {
              this.isDisabled = false;
              if (data.success) {
                this.$toast({
                  component: ToastificationContent,
                  props: {
                    title: "Success!",
                    text: data.message,
                    icon: "UserIcon",
                    variant: "success"
                  }
                });
                router.push({ name: "user-accounts" });
              } else {
                if (data.status == 422) {
                  // this.validationErrors = data.message;
                } else {
                  if (data.status == 422) {
                    // this.validationErrors = data.message;
                  } else {
                    this.$toast({
                      component: ToastificationContent,
                      props: {
                        title: "Failed",
                        text: data.message,
                        icon: "errorIcon",
                        variant: "outline-danger"
                      }
                    });
                  }
                }
              }
            },
            err => {
              this.isDisabled = false;
              console.log(err);
            }
          );
    }
  }
};
</script>
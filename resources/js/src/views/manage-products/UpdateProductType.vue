<template>
  <b-row>
    <b-col cols="12">
      <b-card-code title="Update Product Type">
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
                  <validation-provider
                    #default="{ errors }"
                    name="Product Type Name"
                    rules="required"
                  >
                    <b-form-input
                      v-model="typeName"
                      :state="errors.length > 0 ? false:null"
                      type="text"
                      placeholder="Product Type Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                </b-form-group>
              </b-col>

              <b-col md="12">
                <b-button variant="primary" type="submit" @click.prevent="validationForm">Submit</b-button>
              </b-col>
            </b-row>
          </b-form>
        </validation-observer>
      </b-card-code>
    </b-col>
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
  BFormCheckbox,
  BFormTextarea
} from "bootstrap-vue";
import { required } from "@validations";
import AdminApi from "../../../api/admin";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import router from "@/router";
import Admin from "../../../api/admin";

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
    BFormCheckbox,
    BFormTextarea
  },
  data() {
    return {
      required,
      validationErrors: "",
      typeName: "",
      typeId: this.$route.params.id
    };
  },
  created() {
    this.getSingleProductType(this.typeId);
   
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.validationErrors = "";
          AdminApi.updateProductType(
            (this.info = {
              type: this.typeName,
            
              id: this.typeId
            }),
            data => {
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
                //router.push({ name: "manage-users" });
              } else {
                if (data.status == 422) {
                  this.validationErrors = data.message;
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
            },
            err => {
              console.log(err);
            }
          );
        }
      });
    },
  
    getSingleProductType(typeId) {
      Admin.getRow(
        "getSingleProductType",
        typeId,
        res => {
          console.log("the getSingleProductType response is", res.data);
          this.typeName = res.data.type
           
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
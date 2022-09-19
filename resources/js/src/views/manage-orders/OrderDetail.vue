<template>
  <b-card>
    <b-row>
      <b-col md="8">
        <b-card no-body>
          <b-card-header>
            <b-card-title>
              <h4>Order Detail</h4>
            </b-card-title>
          </b-card-header>
          <b-card-body>
            <dl class="row">
              <dt class="col-sm-3 offset-sm-1">Order ID:</dt>
              <dd class="col-sm-8">{{orderId}}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3 offset-sm-1">Order Title:</dt>
              <dd class="col-sm-8">{{orderTitle}}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3 offset-sm-1">Order Type:</dt>
              <dd class="col-sm-8">{{orderType}}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3 offset-sm-1">Order Product(s):</dt>
              <dd class="col-sm-8">
                  <span v-for="(product,i) in products" :key="i">
                      {{product.name}} &nbsp;
                  </span>
                </dd>
            </dl>
        
            <dl class="row">
              <dt class="col-sm-3 offset-sm-1">Created For:</dt>
              <dd class="col-sm-8">{{createdFor}}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3 offset-sm-1">Description:</dt>
              <dd class="col-sm-8">{{description}}</dd>
            </dl>
           
            <dl class="row">
              <dt class="col-sm-3 offset-sm-1">Created on:</dt>
              <dd class="col-sm-8">{{createdAt | formatDate}}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3 offset-sm-1">Last Modified on:</dt>
              <dd class="col-sm-8">{{updatedAt | formatDate}}</dd>
            </dl>

          </b-card-body>
        </b-card>
      </b-col>

      <!-- buttons -->
      <!-- <b-col cols="12">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="mr-1 mt-1"
        >Save changes</b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          class="mt-1"
          variant="outline-secondary"
        >Cancel</b-button>
      </b-col>-->
      <!--/ buttons -->
    </b-row>
  </b-card>
</template>

<script>
import {
  BButton,
  BRow,
  BCol,
  BCard,
  BFormCheckbox,
  BTabs,
  BTab,
  BCardTitle,
  BCardText,
  BCardHeader,
  BCardBody,
  BBadge
} from "bootstrap-vue";
import {} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import AdminApi from "../../../api/admin";

export default {
  components: {
    BButton,
    BRow,
    BCol,
    BCard,
    BFormCheckbox,
    BTabs,
    BTab,
    BCard,
    BCardTitle,
    BCardText,
    BCardHeader,
    BCardBody,
    BBadge
  },
  directives: {
    Ripple
  },
  props: {
    notificationData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      products:[],
      orderTitle: "",
      quantity: "",
      orderType: '',
      createdBy: '',
      createdFor: '',
      createdAt: '',
      updatedAt: '',
      description: "",
      orderId: this.$route.params.id
    };
  },
  created() {
    this.getSingleOrder(this.orderId);
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        1: "light-primary",
        0: "light-danger"
      };

      return status => statusColor[status];
    }
  },
  methods: {
    getSingleOrder(orderId) {
      AdminApi.getRow(
        'getSingleOrder',
        orderId,
        res => {
          this.orderTitle = res.data.title,
          this.description = res.data.description,
          //this.productId = res.data.product_id,
          this.quantity = res.data.quantity,
          this.orderType = res.data.type,
        this.createdFor = res.data.name,
        this.createdAt = res.data.created_at,
        this.updatedAt = res.data.updated_at,
         this.getAllProducts(res.data.product_id);
          //this.created_for.push({'value':res.data.created_for, 'text':res.data.name});

          console.log('the getSingleOrder response is', res.data);

        },
        err => {
          console.log(err);
        }
      );
    },
    getAllProducts(productId)
    {
      AdminApi.getData(
        'getAllProducts',
        res=>{
        // for (let i = 0; i < res.data.length; i++) {
        //     this.all_products.push({
              
        //     });
        //   }
        this.products = res.data.filter(product=>product.id == productId);
        console.log('the product name is ', this.products);
      },
      err=>{
        console.log(err)
      });
    },
   
  }
};
</script>

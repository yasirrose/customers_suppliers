<template>
  <b-tabs
    vertical
    content-class="col-12 col-md-10 mt-1 mt-md-0"
    pills
    nav-wrapper-class="col-md-2 col-12"
    nav-class="nav-left"
  >


    
    <!-- Add to groups -->
    <b-tab>
      <template #title>
        <feather-icon icon="UsersIcon" size="18" class="mr-50"/>
        <span class="font-weight-bold">All Users</span>
      </template>
      <AllUsers ref="AllUsersComponent"/>
    </b-tab>

    <!-- Manage MFA -->
    <b-tab>
      <template #title>
        <feather-icon icon="UserPlusIcon" size="18" class="mr-50"/>
        <span class="font-weight-bold">Add User</span>
      </template>
      <CreateUser @event-triggered="getAllUsers"/>
    </b-tab>

    <!-- notification -->
  </b-tabs>
</template>

<script>
import {
  BTabs,
  BTab,
  BRow,
  BCol,
  BCard,
  BCardTitle,
  BCardText,
  BCardHeader,
  BCardBody
} from "bootstrap-vue";
import AllUsers from "./AllUsers.vue";
import CreateUser from "./CreateUser.vue";


export default {
  components: {
    BTabs,
    BTab,
    BRow,
    BCol,
    BCard,
    BCardTitle,
    BCardText,
    BCardHeader,
    BCardBody,
    AllUsers,
    CreateUser
   
  },
  data() {
    return {};
  },
  methods: {
    getAllUsers () {
      this.$refs.AllUsersComponent.getUsers()
    }
  }
};
</script>

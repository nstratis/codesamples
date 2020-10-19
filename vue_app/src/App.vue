<template>
  <div id="wrapper" v-if="display === 'app'">
    <AppHeader />
    <div id="app-container">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
  <div id="wrapper" v-else-if="display === 'standard'">
    <div id="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/layout/Header";
import AppFooter from "@/components/layout/Footer";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      loggedIn: true
    };
  },
  methods: {
    toggleMenu: () => {
      console.log('Toggle Menu Clicked');
      console.log(this);
    }
  }
  // data: {
  //   isLoggedIn: "NO"
  // }
};
</script>

<style></style>

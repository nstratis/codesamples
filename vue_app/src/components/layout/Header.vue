<template>
  <header class="main">
    <Burger />
    <Logo />
  </header>
</template>

<script>
import Logo from "@/components/ui/Logo";
import Burger from "@/components/ui/Burger";
export default {
  name: "AppHeader",
  components: {
    Logo,
    Burger
  }
};
</script>

<template>
  <Header />
  <Navbar />
  <main class="main">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import { Header, Navbar, Footer } from "@/components";
export default {
  name: "App",
  components: { Header, Navbar, Footer },
};
</script>

<style lang="scss"></style>

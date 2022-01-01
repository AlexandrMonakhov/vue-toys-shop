<template>
  <Header />
  <Navbar />
  <main class="main">
    <Home />
  </main>
  <Footer />
</template>

<script>
import { Header, Navbar, Footer } from "@/components";
import Home from "@/pages/Home/Home";
export default {
  name: "App",
  components: { Header, Navbar, Footer, Home },
};
</script>

<style lang="scss"></style>

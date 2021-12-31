<template>
  <Header />
  <Navbar />
  <main class="main"></main>
  <Footer />
</template>

<script>
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default {
  name: "App",
  components: { Header, Navbar, Footer },
};
</script>

<style lang="scss"></style>

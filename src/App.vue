<template>
  <Header />
  <Navbar />
  <main class="main">
    <Home />
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Home from "@/pages/Home/Home";
export default {
  name: "App",
  components: { Header, Navbar, Footer, Home },
};
</script>

<style lang="scss"></style>

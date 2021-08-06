<script lang="ts">
  //routes
  import Home from './routes/Home.svelte'
  import GreetingPage from './routes/GreetingPage.svelte'
  //js imports
  import { Router, Route } from 'svelte-navigator';
  //components
  import Navbar from './lib/Navbar.svelte'
</script>

<template>
  <Navbar/>

  <Router>

    <Route path="">
      <Home />
    </Route>

    <Route path="greeting">
      <GreetingPage />
    </Route>

  </Router>
</template>

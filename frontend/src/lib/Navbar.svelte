<script lang="ts">
  //js imports
  import { Link, Router } from "svelte-navigator";
  //stores
  import { Routes } from '../stores/routes';

  //route imports


  
</script>

<template >
  <div class='bg-red-300'>
    <Router>
      {#each Routes as route}
        <Link to={route.routeUrl}>
          {route.routeName}
        </Link>
      {/each}

    </Router>
  </div>

</template>

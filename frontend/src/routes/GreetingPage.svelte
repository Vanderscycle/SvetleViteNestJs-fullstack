<script lang='ts'>
  import type { GreetingInterface } from "src/interfaces";

  //api
  import { deleteGreeting, getCall, postNewGreeting } from "../api/greetingAxios";
  //interfaces

  //WARN: CHANGE ME!
  //const mockendUrl = 'https://mockend.com/org/repo/greetings'
  const getAllBackend = 'http://localhost:3001/rest-api'
  async function apiGetCall():Promise<any>{
        let res = await getCall(getAllBackend)
        console.log(res)
        return res
  }
  let displayData = true
  let data:any[] = []
  let newGreeting:GreetingInterface={id:0,msg:''}
  $: if (displayData !== false){
      (async() => {
        const res = await apiGetCall()
        data = res 
        displayData = !displayData
        })()
    }
  //preventDefault to not lose info as the db takes time to update
  async function validatePost():Promise<any> {
    newGreeting.id = data.length
    //console.log(newGreeting)
    let response = await postNewGreeting(newGreeting)
    console.log(response)
    displayData = !displayData 
  }

  let deleteId:string = ''
  async function validateDelete():Promise<any>{
    await deleteGreeting(deleteId)  
    displayData = !displayData
    deleteId=''
  }
  //TODO: add single, patch and delete
</script>

<template>
  <div class='bg-yellow-300'>
    <h1 class='bg-green-300'>adding data to the mongoDb</h1>
    <form on:submit|preventDefault={validatePost}>
      <input type="text" bind:value={newGreeting.msg}>
      <button type="submit">
        new
      </button>
    </form>

    <h1 class="bg-red-300">delete data (requires id)</h1>
    <form on:submit|preventDefault={validateDelete}>
      <input type="text" bind:value={deleteId}>
      <button type="submit">
        Delete
      </button>
    </form>
    <h1>data available in the mongoDb</h1>
    <ul>
    {#each data as row}
      <li>id: {row._id} msg: {row.msg}</li>
    {/each}
    </ul>
  </div>
</template>

<style lang='postcss'>

</style>

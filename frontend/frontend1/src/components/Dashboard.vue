<template>
  <p> hello {{username}} + {{password}}</p>
</template>

<script>
export default {
    name: "DashBoard",
    data(){
        return{
            username: window.user,
            password: window.pass
        }
    }
}
</script>

<style>

</style>
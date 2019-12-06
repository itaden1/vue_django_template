<template>
    <h1>{{ getMessage}}</h1>
</template>

<script>
    export default{
        name: "basic",
        computed: {
            getMessage(){
                return this.$store.getters.getGreeting;
            }
        }
    }  
</script>
<template>
    <p>{{ getMessage}}</p>
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
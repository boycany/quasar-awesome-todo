<template>
    <q-route-tab 
        :icon="link.icon" 
        :label="link.title" 
        :to="link.link"
        exact
    />
</template>
<script>
export default {
    name: 'FooterTab',
    props: ['link']
    
}
</script>
<style>
    
</style>
<template>
    <div class="tag">
        <span>{{name}}</span>
    </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    name: String,
  },
}
</script>

<style>

    .tag{
        
        /* box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.15); */
        /* padding: 6px 0; */
        /* text-align: center; */
        /* border-radius: 4px; */
        margin-top: 6px;
    }

    .tag span{
        color: #6533ff;
        font-size: 16px;
    }

    
</style>
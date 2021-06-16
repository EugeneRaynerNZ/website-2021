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
        width: 100%;
        background: #6533ff;
        padding: 6px;
    }

    .tag span{
        color: white;
        font-size: 16px;
    }
</style>
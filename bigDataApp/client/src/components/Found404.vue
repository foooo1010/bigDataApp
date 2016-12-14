<template>
	<div class="wrap404">
		<p class="code">404</p>
		<p class="tip">没有找到相应资源</p>
		<router-link :to="{ name: 'home'}"><el-button type="primary">返回到主页</el-button></router-link>
	</div>
</template>

<script>
export default {

  name: 'Found404',

  data () {
    return {

    };
  }
};
</script>

<style lang="sass" scoped>
	.wrap404{
		height: 100%;
		width: 100%;
		text-align: center;
		color: #20a0ff;
		.code{
			font-size: 50px
		}
		.tip{
			font-size: 30px
		}
	}
</style>
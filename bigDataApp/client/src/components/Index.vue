<template>
    <div>
      <header class="app__header">
          <span class="name">downtown  charts</span>
          <span class="setting"> 
            <i class="fa fa-user user_icon"></i>
            <span class="username">user123</span>
            <el-tooltip  content="退出账号" placement="bottom" effect="light">
              <i class="fa fa-sign-out sign_out" @click="signOutClick"></i>
            </el-tooltip>
          </span>
      </header>
      <el-tabs  @tab-click="handleClick" :active-name="activeName">
        <el-tab-pane label="首页" name="home"></el-tab-pane>
        <el-tab-pane label="门店经营" name="shop"></el-tab-pane>
        <el-tab-pane label="餐品管理" name="food"></el-tab-pane>
        <el-tab-pane label="供应链" name="proline"></el-tab-pane>
      </el-tabs>
      <transition name="fade" mode="out-in" >
        <router-view ></router-view>
      </transition>    
    </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      activeName: this.$route.name
    }
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({'name':tab.name})
    },
    signOutClick(){
       this.$router.push({'name':'login'})
    }
  },
  mounted() {

  }
}


</script>

<style lang='sass'>
body{
  margin: 0;
}
.app__header{
  height: 60px;
  width: 100%;
  background: #20a0ff;
  position: relative;
  color: #eee;

  .name{
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    margin-left: 20px;
  }
  .setting{
    position: absolute;
    font-size: 25px;
    right: 30px;top: 0;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    .user_icon{
      color: #78909C;
    }
    .username{
      font-size: 18px;
      margin-right: 15px;
    }
    .sign_out{
      color: #F44336;
    }
  }
}

</style>

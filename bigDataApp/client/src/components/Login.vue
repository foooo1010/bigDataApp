<template>
	<div class="login__wrap">
		<div class="content">
			<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			 <el-form-item label="账号" prop="age">
			    <el-input v-model.number="ruleForm2.age"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			  </el-form-item>
			 
			  <el-form-item>
			    <el-button type="primary" @click="handleSubmit2">登录</el-button>
			    <el-button @click="handleReset2">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
 export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
             callback();
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="sass" scoped>
	.login__wrap{
		display:flex;justify-content:center;align-items:center;width:100%;height:100%;min-height: 100vh;
		.content{
			width: 40%;
			min-width: 300px;
			max-width: 500px;
		}
	}
</style>







<template>
  <div class="contact">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="form-input">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="Name"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="ruleForm.email" placeholder="Email*"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input v-model.number="ruleForm.phone" maxlength="11" show-word-limit placeholder="Phone*"></el-input>
        </el-form-item>
      </div>
      <div class="form-text-area">
        <el-form-item prop="message" >
          <el-input type="textarea" :rows="9" placeholder="Messge" v-model="ruleForm.message">
          </el-input>
        </el-form-item>
      </div>
      <div class="from-submit">
        <el-form-item prop="accept">
          <el-checkbox v-model="ruleForm.accept">I accept the <a href="#" class="highColor">privacy policy</a></el-checkbox> 
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleForm)">send</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  data() {
    return {
      ruleForm: {
        email: '',
        phone: '',
        name:'',
        message: '',
        accept: false
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        phone: [
          { required: true, message: '请输入您的手机号码', trigger: 'blur' },
          {pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: ['blur', 'change']}
        ]
      },
    };
  },

  mounted() {
    
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .contact{
    width: 100%;
    background-color: #EFF3FA;
    border-radius: 20px;
    padding: 15px 15px 15px 0;
    form{
      display: flex;
      flex-direction: column;
      div{
        width: 100%;
      }
      .form-input{
        display: flex;
      }
      .from-submit{
        display: flex;
        .el-form-item{
          &:last-child{
            text-align: right;
            button{
              background-color: var(--primary);
              border: 0 solid transparent;
              padding: 15px 40px;
              border-radius: 10px;
              font-size: 17px;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
.contact{
  .el-form-item__content{
    margin-left: 15px !important;
    .el-input__inner{
      min-height: 53px;
      border-radius: 10px;
      width: 100%;
      padding: 10px 27px;
      font-size: 14px;
      line-height: 16px;
      margin: 0;
      box-shadow: 1px 1px 0 0 rgba(196, 196, 196, 24%);
      border: 1px solid #e7edf3;
    }
  }
  .el-checkbox__input.is-checked+.el-checkbox__label{
    color: inherit;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: var(--primary);
    color: var(--primary);
    border-color:inherit;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner{
    border-color: var(--primary);
  }
  .el-checkbox__inner:hover{
    border-color: var(--primary);
  }
  .el-textarea__inner{
    border-radius: 10px;
  }
}

</style>>
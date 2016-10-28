import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element);

export default Vue.component("c-form", {
    name:'form',
    template: require('./form.html'),
    created(){
        this.fGetFormData();
    },
    computed: {
        ruleForm: function () {
            return this.$store.getters.ruleForm;
        },
        rules: function () {
            return this.$store.getters.rules;
        }
    },
    methods: {
      ...mapActions({
          fGetFormData:'fGetFormData',
          fSubmitFormData:'fSubmitFormData'
      }),
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit(ev) {
        console.log(this.$refs.ruleForm);
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            this.fSubmitFormData(this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
});
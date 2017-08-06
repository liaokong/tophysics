<template>
<div class="myform">
  <div class="form_title">
    请填表
  </div>

  <div class="single_form" v-for="(nature,index) in form_natures" v-show="index == nature_id">
    第{{index + 1}}项-共{{item_count}}项
    <br/>
    <label>{{nature.text}}</label>
    <br/>
    <input v-if="nature.type=='text'" type="text" class="model_data" v-model="nature.model">
    <input v-if="nature.type=='date'" type="date"  class="model_data" v-model="nature.model">
    <el-select v-model.lazy="provinces" v-if="nature.type=='provice'">
      <el-option
        v-for="province in privoinces"
        :label="province.name"
        :value="province.value"
      </el-option>
    </el-select>
    <div class="sub_action">
      <input v-if="index > 0" class="pre_index" type="button" value="上一步" @click="page(index-1)">
      <input v-else disabled class="pre_index disabled" type="button" value="上一步">
      <input v-if="index < item_count-1" class="next_index" type="button" value="下一步" @click="page(index+1)">
      <input v-else class="next_index" type="button" value="提交">
    </div>
  </div>
</div>
</template>
<script>
import author from './Author.vue'
export default{
  name: 'myform',
  components: { author },
  data () {
    return {
      nowyear: '',
      auth: 'liaojun',
      nature_id: 0,
      form_natures: [
        { 'type': 'text',
          'model': '廖军',
          'text': '姓名'
        },
        { 'type': 'text',
          'model': '28',
          'text': '年龄'
        },
        { 'type': 'text',
          'model': '安徽',
          'text': '籍贯'
        },
        {
          'type': 'date',
          'model': 'birthday',
          'text': '生日'
        },
        {
          'type': 'provice',
          'modle': 'tianjin',
          'text': '户籍'
        }
      ]
    }
  },
  computed: {
    item_count: function () {
      return this.form_natures.length
    }
  },
  methods: {
    init () {
      var date = new Date()
      this.nowyear = date.getFullYear()
    },
    page (index) {
      this.nature_id = index
    }
  },
  created: function () {
    this.init()
    this.nature_id = 0
  }
}
</script>
<style lang="scss">
  .sublimit{
    position: absolute;
    bottom: 0rem;
    z-index: 10;
    width: 100%;
    .sub_button{
      width: 70%;
      height: 3rem;
      border-radius: .4rem;
      background: rgba(123, 123, 123, 1);
    }
  }
  .myform{
    .form_title{
      font-size: 3rem;
      font-family: 'Times New Roman';
      height: 4.2rem;
      text-shadow: 1px 1px 2px #888888;
    }
    .single_form{
      margin: 0 auto;
      border-radius: 1rem;
      background-color: rgba(250,250,250,0.8);
      box-shadow: 1px 3px 3px #888888;
      width: 90%;
      min-height: 20rem;
      label{
        font-size: 1.6rem;
        margin-top: 0.5rem;
      }
      .model_data{
        display: block;
        margin: 0 auto;
        width: 97%;
        overflow: hidden;
        height: 3rem;
        line-height: 3rem;
        font-size: 2rem;
        vertical-align: middle;
      }
      .model_data[type='date']{
        
      }
      select{
        line-height: 2rem;
      }
      
      .sub_action{
        margin-top: 10rem;
        padding: 0 0.3rem;
      .pre_index{
        font-size: 1.5rem;
        background-color: rgba(170,123,200,0.6);
        float: left;
        border-radius: 0.4rem 0.4rem 0.4rem 1rem;
        width: 48%;
        height: 3rem;
        
      }
      .next_index{
        font-size: 1.5rem;
        background-color: rgba(100,100,100,0.6);
        border-radius: 0.4rem 0.4rem 1rem 0.4rem;
        float: right;
        width: 48%;
        height: 3rem;
      }
      }
      
    }
  }
</style>

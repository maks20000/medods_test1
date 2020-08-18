<template>
  <div>
    <div class="wrapper-form">
      <form>
        <div class="input-group-block required" :class="{'error':$v.form.lastname.$error}">
          <label>Фамилия</label>
          <input type="text" v-model="form.lastname" />
        </div>
        <div class="input-group-block required" :class="{'error':$v.form.firstname.$error}">
          <label>Имя</label>
          <input type="text" v-model="form.firstname" />
        </div>
        <label>Отчество</label>
        <input type="text" v-model="form.middlename" />
        <div class="input-group-block required" :class="{'error':$v.form.birthday.$error}">
          <label>Дата рождения</label>
          <input type="date" v-model="form.birthday" />
        </div>
        <div class="input-group-block required" :class="{'error':$v.form.phone.$error}">
          <label>Номер телефона</label>
          <input type="tel" name="phone" placeholder="+7(999) 999-99-99" v-model="form.phone" />
        </div>
        <div class="input-group mt-10">
          <input type="checkbox" id="c_sms" v-model="form.sms" />
          <label for="c_sms">не отправлять СМС</label>
        </div>
        <div class="input-line">
          <div class="input-group">
            <input type="radio" id="r_male" value="male" v-model="form.sex" />
            <label for="r_male">Мужской</label>
          </div>
          <div class="input-group">
            <input type="radio" id="r_female" value="female" v-model="form.sex" />
            <label for="r_female">Женский</label>
          </div>
        </div>
        <div class="input-group-block required" :class="{'error':$v.form.group.$error}">
          <label>Группа клиентов</label>
          <select multiple v-model="form.group">
            <option v-for="(item_group, i) in group" :key="i">
              {{
              item_group
              }}
            </option>
          </select>
        </div>
        <div class="input-group-block">
          <label>Лечащий врач</label>
          <select v-model="form.doctor">
            <option v-for="(item_doc, i) in doctor" :key="i">{{ item_doc }}</option>
          </select>
        </div>
        <div class="input-group-block">
          <label>Индекс</label>
          <input type="text" v-model="form.address.postcode" />
        </div>
        <div class="input-group-block">
          <label>Страна</label>
          <input type="text" v-model="form.address.country" />
        </div>
        <div class="input-group-block">
          <label>Область</label>
          <input type="text" v-model="form.address.region" />
        </div>
        <div class="input-group-block required" :class="{'error':$v.form.address.city.$error}">
          <label>Город</label>
          <input type="text" v-model="form.address.city" />
        </div>
        <div class="input-group-block">
          <label>Улица</label>
          <input type="text" v-model="form.address.street" />
        </div>
        <div class="input-group-block">
          <label>Дом</label>
          <input type="text" v-model="form.address.home" />
        </div>

        <div class="input-group-block required" :class="{'error':$v.form.document.type.$error}">
          <label>Тип документа</label>
          <select v-model="form.document.type">
            <option v-for="(item_doc_type, i) in document_type" :key="i">
              {{
              item_doc_type
              }}
            </option>
          </select>
        </div>
        <div class="input-group-block">
          <label>Серия</label>
          <input type="text" v-model="form.document.series" />
        </div>
        <div class="input-group-block">
          <label>Номер</label>
          <input type="text" v-model="form.document.number" />
        </div>
        <div class="input-group-block">
          <label>Кем выдан</label>
          <input type="text" v-model="form.document.issued" />
        </div>
        <div class="input-group-block required" :class="{'error':$v.form.document.date.$error}">
          <label>Дата выдачи</label>
          <input type="text" v-model="form.document.date" />
        </div>
        <button @click.prevent="submit">Отправить</button>
      </form>
    </div>
    <div class="popup-wrapper" v-if="show_popup">
      <div class="popup">
        <p>{{popup_message}}</p>
        <div class="close" @click="show_popup=false">
          <img src="../assets/close.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { phone } from "../validators/";
export default {
  data() {
    return {
      show_popup: false,
      popup_message: null,
      form: {
        lastname: null,
        firstname: null,
        middlename: null,
        birthday: null,
        phone: null,
        sms: false,
        group: [],
        doctor: null,
        sex: "male",
        address: {
          postcode: null,
          country: null,
          region: null,
          city: null,
          street: null,
          home: null,
        },
        document: {
          type: null,
          series: null,
          number: null,
          issued: null,
          date: null,
        },
      },
      group: ["VIP", "Проблемные", "ОМС"],
      doctor: ["Иванов", "Захаров", "Чернышева"],
      document_type: [
        "Паспорт",
        "Свидетельство о рождении",
        "Вод. удостоверение",
      ],
    };
  },
  validations: {
    form: {
      lastname: { required },
      firstname: { required },
      birthday: { required },
      phone: { phone },
      group: { required },
      address: {
        city: { required },
      },
      document: {
        type: { required },
        date: { required },
      },
    },
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        this.popup_message = "Вы успешно зарегистрированы";
        this.show_popup = true;
      }
    },
  },
};
</script>

<style lang="sass">
.mt-10 
  margin-top: -10px
.wrapper-form
  max-width: 600px
  margin: 0 auto
  form
    input, select:not([multiple])
      display: block
      width: 100%
      margin-bottom: 20px
      height: 40px
      box-sizing: border-box
      border: 1px solid #d0d0d0
      border-radius: 3px
      padding: 10px
    label
      margin-bottom: 10px
      display: block
    select[multiple]
      margin-bottom: 20px
      border: 1px solid #d0d0d0
      border-radius: 3px
      padding: 10px
    .input-line
      display: flex
      &>div:not(:last-child)
        margin-right: 20px

    .input-group
      margin-bottom: 20px
      label, input 
        display: inline-block
        height: unset
        width: unset
    button
      padding: 10px 20px
      border: 1px solid #8BFFBB
      border-radius: 3px
      cursor: pointer
      background: #29AE61
      color: white
  .required 
    label:after 
      content: ' *'
      color: red
      font-size: 12px

  .error 
    label 
      color: red
    input, select 
      border: 1px solid red !important
.popup-wrapper
  position: fixed
  height: 100%
  width: 100%
  top: 0
  left: 0
  display: flex
  align-items: center
  background: rgba(0, 0, 0, 0.3)
  .popup
    position: relative
    flex-grow: 1
    max-width: 300px
    height: 200px
    margin: 0 auto
    border-radius: 10px
    background: white
    display: flex
    align-items: center
    padding: 20px
    box-sizing: border-box
    p 
      text-align: center
      width: 100% 
      font-size: 20px
    .close 
      position: absolute
      width: 20px
      height: 20px
      top: 10px
      right: 10px
      cursor: pointer
      img 
        width: 100%
</style>

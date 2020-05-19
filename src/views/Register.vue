<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input 
        id="email" 
        type="text" 
        class="validate" 
        v-model.trim="email"
        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        />
        <label for="email">Email</label>
        <small 
        class="helper-text invalid"
        v-if="$v.email.$dirty && !$v.email.required"
        >
        Ты бредишь? Введи буквы !</small>
         <small 
        class="helper-text invalid"
        v-else-if="$v.email.$dirty && !$v.email.email"
        >
        Ёбаный ад, да введи нормально</small>
      </div>
      <div class="input-field">
        <input 
        id="password" 
        type="password" 
        v-model.trim="password"
        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        />
        <label for="password">Пароль</label>
        <small 
        class="helper-text invalid"
         v-if="$v.password.$dirty && !$v.password.required"
        >ладно, на сей раз прощаю</small>
        <small 
        class="helper-text invalid"
         v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Пощады, не меньше {{$v.password.$params.minLength.min}} символов. сейчас {{password.length}}</small>
      </div>
      <div class="input-field">
        <input 
        id="name" 
        type="text" 
        v-model.trim="name" 
        :class="{invalid: $v.email.$dirty && !$v.email.required}"
        />
        <label for="name">Имя</label>
        <small 
        class="helper-text invalid"
        v-if="$v.name.$dirty && !$v.name.required"
        >Say My Name!</small>
      </div>
      <p>
        <label>
          <input 
          type="checkbox" 
          v-model="agree"
          />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="./Login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>

import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '' ,
    name: '',
    agree: false
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(8)},
    name: {required},
    agree: {checked: v => v}
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      console.log(formData)
      this.$router.push('/')
    }
  }


};
</script>

<style lang="scss" scoped>
</style>
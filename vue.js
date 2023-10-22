<template>
  <div>
    <select v-model="selectedCity" @change="updateCeh">
      <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
    </select>

    <select v-model="selectedCeh" @change="updateEmployee">
      <option v-for="ceh in cehs" :key="ceh" :value="ceh">{{ ceh }}</option>
    </select>

    <select v-model="selectedEmployee">
      <option v-for="employee in employees" :key="employee" :value="employee">{{ employee }}</option>
    </select>

    <select v-model="selectedBrigade">
      <option v-for="brigade in brigades" :key="brigade" :value="brigade">{{ brigade }}</option>
    </select>

    <input v-model="shift" placeholder="Смена">

    <button @click="submitForm">Отправить</button>
  </div>
</template>

<script>
import VueCookie from 'vue-cookie';

export default {
  data() {
    return {
      cities: ['Город 1', 'Город 2'],
      cehs: [],
      employees: [],
      brigades: this.getBrigades(),
      selectedCity: '',
      selectedCeh: '',
      selectedEmployee: '',
      selectedBrigade: '',
      shift: ''
    };
  },
  methods: {
    updateCeh() {
      this.cehs = this.selectedCity === 'Город 1' ? ['Цех 1', 'Цех 2'] : ['Цех 3'];
      this.updateEmployee();
    },
    updateEmployee() {
      this.employees = this.selectedCeh === 'Цех 1' ? ['Сотрудник 1'] : ['Сотрудник 2'];
    },
    getBrigades() {
      let hour = new Date().getHours();
      return hour >= 8 && hour < 20 ? ['Бригада 1'] : ['Бригада 2'];
    },
    submitForm() {
      VueCookie.set('selectedCity', this.selectedCity);
      VueCookie.set('selectedCeh', this.selectedCeh);
      VueCookie.set('selectedEmployee', this.selectedEmployee);
      VueCookie.set('selectedBrigade', this.selectedBrigade);
      VueCookie.set('shift', this.shift);
    }
  },
  created() {
    this.updateCeh();
  }
};
</script>

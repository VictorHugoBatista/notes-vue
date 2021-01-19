<template>
  <q-page padding>
    <h2 class="text-h3">
      Create Note
    </h2>
    <q-form class="row q-col-gutter-md" @submit="onSubmit">
      <q-input rounded outlined clearable
      label="Title"
      v-model="form.title"
      class="col-md-12">
      </q-input>

      <q-input rounded outlined autogrow clearable
      label="Body"
      v-model="form.body"
      class="col-md-12">
      </q-input>

      <div class="q-mt-lg">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-md" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import NoteService from '../services/Note'

export default {
  // name: 'PageName',
  data () {
    return {
      form: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    onSubmit () {
      NoteService.create(this.form)
    }
  }
}
</script>

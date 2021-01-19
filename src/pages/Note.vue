<template>
  <q-page padding>
    <h2 class="text-h3">
      Create Note
    </h2>
    <q-form ref="noteForm" class="row q-col-gutter-md" @submit="onSubmit" @reset="onReset">
      <q-input rounded outlined clearable
      label="Title"
      v-model="form.title"
      :rules="[val => val && val.length || 'Title required!']"
      class="col-md-12">
      </q-input>

      <q-input rounded outlined autogrow clearable
      label="Body"
      v-model="form.body"
      :rules="[val => val && val.length || 'Body required!']"
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
    async onSubmit () {
      const result = await NoteService.create(this.form)
      if (result) {
        this.$q.notify({
          message: 'Note created!',
          color: 'positive',
          icon: 'check_circle_outline'
        })
        this.onReset()
      } else {
        this.$q.notify({
          message: 'Error on note creation',
          color: 'negative',
          icon: 'highlight_off'
        })
        console.log('error', result)
      }
    },
    async onReset () {
      await this.resetForm()
      this.$refs.noteForm.resetValidation()
    },
    resetForm () {
      this.form = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

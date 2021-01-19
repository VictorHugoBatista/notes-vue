<template>
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
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default () {
        return {
          title: '',
          body: ''
        }
      }
    },
    messageSuccess: String,
    messageError: String,
    submitAction: Function
  },
  methods: {
    async onSubmit () {
      const result = typeof this.submitAction === 'function'
        ? await this.submitAction(this.form) : false
      if (result) {
        this.$q.notify({
          message: this.messageSuccess,
          color: 'positive',
          icon: 'check_circle_outline'
        })
        this.onReset()
      } else {
        this.$q.notify({
          message: this.messageError,
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

<template>
  <q-page padding>
    <h2 class="text-h3">
      Edit Note
    </h2>
    <note-form
    :messageSuccess="'Note created!'"
    :messageError="'Error on note creation'"
    :submitAction="this.onFormSubmit"
    ></note-form>
  </q-page>
</template>

<script>
import NoteService from '../../services/Note'
import NoteForm from '../../components/forms/Note'

export default {
  components: {
    'note-form': NoteForm
  },
  async beforeMount () {
    const note = await NoteService.get(this.$route.params.noteId)
    console.log('test', this.$route.params.noteId, note)
  },
  methods: {
    async onFormSubmit (formData) {
      return await NoteService.create(formData)
    }
  }
}
</script>

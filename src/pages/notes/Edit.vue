<template>
  <q-page padding>
    <h2 class="text-h3">
      Edit Note
    </h2>
    <note-form
    :form="note"
    :messageSuccess="'Note updated!'"
    :messageError="'Error on note update'"
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
  data () {
    return {
      note: {
        title: '',
        body: ''
      }
    }
  },
  async created () {
    const note = await NoteService.get(this.$route.params.noteId)
    if (typeof note.status !== 'undefined' && note.status !== 200) {
      this.$router.push({ name: '404' })
    }
    this.note = note
  },
  methods: {
    async onFormSubmit (formData) {
      return await NoteService.update(this.$route.params.noteId, formData)
    }
  }
}
</script>

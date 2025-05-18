import EditorasApi from './editoras.js'

const api = new EditorasApi()

export default {
  data() {
    return {
      editoras: [],
      novaEditoraNome: ''
    }
  },
  created() {
    this.carregarEditoras()
  },
  methods: {
    async carregarEditoras() {
      this.editoras = await api.buscarTodosAsEditoras()
    },
    async adicionarEditora() {
      if (!this.novaEditoraNome) return
      await api.adicionarEditora({ nome: this.novaEditoraNome })
      this.novaEditoraNome = ''
      this.carregarEditoras()
    },
    async excluir(id) {
      await api.excluirEditora(id)
      this.carregarEditoras()
    }
  }
}

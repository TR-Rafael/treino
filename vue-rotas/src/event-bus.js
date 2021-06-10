import Vue from 'vue'

export default new Vue({
    data: {
        autenticado: false,
        contatos: [
            { id: 1, nome: 'Rafael de A. Silva', email: 'silva_rafael@id.uff.br' },
            { id: 2, nome: 'Alan Turing', email: 'alan@email.com' },
            { id: 3, nome: 'Edsger Dijkstra', email: 'dijkstra@email.com' },
            { id: 4, nome: 'Linus Torvalds', email: 'linus@email.com' },
            { id: 5, nome: 'Isaac Newton', email: 'isaac@email.com' },
            { id: 6, nome: 'Albert Einstein', email: 'einstein@email.com' },
            { id: 7, nome: 'Stephen Hawking', email: 'stephen@email.com' },
        ]
    },
    created() {
        this.$on('autenticar', (autenticado) => {
            this.autenticado = autenticado
        })
    },
    methods: {
        buscarContato(id) {
            return Object.assign({}, this.contatos.find(c => c.id === id))
        },
        editarContato(contato) {
            const indice = this.contatos.findIndex(c => c.id === contato.id)
            this.contatos.splice(indice, 1, contato)
        }
    }
})
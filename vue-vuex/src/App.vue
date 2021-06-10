<template>
  <div id="app">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Minha Agenda</h1>
        <p class="lead">Sistema Crud de Tarefas para treino</p>
      </div>
    </div>

    <div class="container">

      <div class="row">
        <div class="col-sm-7 border-right">
          <TarefasLista />
        </div>
        <div class="col-sm-5">
          <Contador />
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import Contador from '@/resources/contador/_components/Contador.vue'
import TarefasLista from '@/resources/tarefas/_components/TarefasLista.vue'

export default {
  components: {
    Contador,
    TarefasLista
  }
}
</script>

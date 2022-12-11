<template>
    <h5> <span class="badge bg-success">Crear Categorias</span></h5>

    <form  @submit.prevent="saveCategory">
        <div class="form-group">
            <label>Nombre Categoria</label>
            <input type="text" name="name" class="form-control">
        </div>
        <div class="form-group">
            <label>Descripcion Categoria</label>
            <input type="text" name="descripcion" class="form-control">
        </div>
    </form>

</template>

<script>
export default {
    setup() {
        
    },
}
</script>
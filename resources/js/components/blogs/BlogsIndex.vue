<template>

    <h5> <span class="badge bg-success">Listar Categorias</span></h5>
    
    <div class="text-end">
      <router-link to="{name: 'blogs.contact'}"  class="btn btn-sm btn-primary">Nuevo</router-link>
    </div>
    
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Acciones</th>
         
        </tr>
      </thead>
      <tbody>
       <template v-for="item in categories" :key="item.id">
        <tr>
          <th scope="row">{{ item.id }}</th>
          <td> {{ item.name }}</td>
          <td> {{ item.description }}</td>
          <td>
            <button type="button" @click="deleteCategory(item.id)"  class="btn btn-sm btn-danger">Eliminar</button>
          </td>
        </tr>

       </template>
      </tbody>
    </table>
    </template>
    
    <script>
    import useCategories from "../../composables/categories";
    import { onMounted } from "vue";
    
    export default {
    
        setup(){
            const {categories, getCategories, destroyCategory } = useCategories()
            onMounted(getCategories)

            const deleteCategory = async (id) => {
              if(!window.confirm("Estas seguro?")){
                return 
              }
              await destroyCategory(id)
              await getCategories()


            }

             return {
                categories, 
                deleteCategory
    
             }
        }
    }
    
    </script>

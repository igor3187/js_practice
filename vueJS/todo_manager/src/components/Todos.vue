 <template>
    <div>
        <h3>Todos</h3>
        <div class="legend">
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
            </span>
            <span>
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div @dblclick="ondblclick(todo)" v-for="todo in allTodos" :key="todo.id" class="todo" v-bind:class="{'is-complete':todo.completed}">
            {{todo.title}}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: "Todos",
        methods: {
          ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
            onDblClik(todo){
              const updTodo = {
                  id: todo.id,
                  title: todo.title,
                  completed: !todo.completed
              };

              this.updateTodo(updTodo);
            }
        },
        computed: mapGetters(['allTodos']),
        created() {
            this.fetchTodos();
        }
    }
</script>

<style scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

.todo {
    border: 1px solid white;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

.is-complete {
    background: #35495e;
    color: white;
}
</style>

import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const { tasks, addTask, toggleTask } = useTasks();

  return (
    <>
      <header>
        <h1>ICESI Tasks</h1>
        <p className="subtitle">Aquí se trabaja tieso y parejo</p>
      </header>

      <main>
        <h2>Lo que tengo que entregar esta semana</h2>

        <NewTaskForm onAdd={addTask} />

        {/* controles de la lista */}

        <TaskList tasks={tasks} onToggle={toggleTask} />
        <TaskCounter tasks={tasks} />
      </main>

      <footer>
        <p id="credits">Hecho por Tu Nombre</p>
      </footer>
    </>
  );
}

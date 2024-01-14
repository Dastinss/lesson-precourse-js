import { Header } from "./todolist/Header/Header.js";
import { ButtonsPanel } from "./todolist/ButtonsPanel/ButtonsPanel.js";
import { TasksList } from "./todolist/TasksList.js";
import { AddNewTaskDialog } from "./todolist/AddNewTaskDialog/AddNewTaskDialog.component.js";

export function Todolist( data ) {
	const container = document.createElement( 'div' );

	const headerElement = Header( data.title );
	const tasksListsElement = TasksList( data.tasks );
	const buttonsElement = ButtonsPanel();
	const dialog = AddNewTaskDialog();

	container.append( headerElement );
	container.append( tasksListsElement );
	container.append( buttonsElement );
	container.append(dialog);

	return container;
}
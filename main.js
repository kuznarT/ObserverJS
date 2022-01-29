import { AppStateController, ItemController } from "./classes";

//Create objects for main App controllers
const itemController = new ItemController();
const appStateController = new AppStateController();

//Creating control buttons
addbutton = document.getElementById("add_button");
addcheckbox = document.getElementById("add_checkbox");
changeState = document.getElementById("change_state");

//Adding listeners to control buttons
addbutton.addEventListener("click", () => {
  itemController.addButton();
});
addcheckbox.addEventListener("click", () => {
  itemController.addCheckbox();
});

changeState.addEventListener("click", () => {
  appStateController.changeState(changeState);
});

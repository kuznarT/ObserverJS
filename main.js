class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(function (i) {
      if (i != observer) return observer;
    });
  }

  notify() {
    this.observers.forEach(function (observer) {
      observer.update();
    });
  }
}

class Observer {
  update() {}
}

class AppStateController {
  constructor() {
    this.isNormalState = true;
    this.observers = [];
  }

  changeState(obj) {
    this.isNormalState = !this.isNormalState;
    if (this.isNormalState) {
      obj.innerHTML = "Set Listeners";
      itemController
        .getAllChecked()
        .forEach((item) => (item.element.checked = false));
    }
    if (!this.isNormalState) obj.innerHTML = "Setting Listeners!";
  }

  run(obj) {
    if (this.isNormalState) {
      obj.notify();
    } else {
      console.log(itemController.getAllChecked());
      itemController.getAllChecked().forEach((element) => {
        obj.addObserver(element);
      });
    }
  }
}

class ItemController {
  constructor() {
    (this.buttons = {
      list: [],
      counter: 0,
    }),
      (this.checkboxes = {
        list: [],
        counter: 0,
      });
  }

  addButton() {
    const newButton = new Button("Button #" + ++this.buttons.counter);
    this.buttons.list.push(newButton);
    return newButton;
  }

  addCheckbox() {
    const newCheckbox = new Checkbox();
    this.checkboxes.list.push(newCheckbox);
    return newCheckbox;
  }

  getAllChecked() {
    return this.checkboxes.list.filter((value) => {
      if (value.element.checked) {
        return value;
      }
    });
  }
}

class Button extends Subject {
  constructor(text) {
    super();
    document
      .getElementById("button_container")
      .appendChild((this.element = document.createElement("button")));
    this.element.innerHTML = text;
    this.element.addEventListener("click", () => {
      appStateController.run(this);
    });
  }
}

class Checkbox extends Observer {
  constructor() {
    super();
    this.isChecked = false;
    (this.element = document.createElement("input")).setAttribute(
      "type",
      "checkbox"
    );
    this.divContainer = document.createElement("div");
    this.divContainer.appendChild(this.element); //wrap every checkbox element in its own div
    document.getElementById("container").appendChild(this.divContainer); //append new checkbox to existing div container
  }

  update() {
    this.toogleisChecked();
  }

  toogleisChecked() {
    this.isChecked = !this.isChecked;
    this.element.checked = this.isChecked;
  }
}

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

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items"]

  connect() {
    // console.log(this.element); // this is the controller
    // console.log(this.itemsTarget);
    // console.log(this.formTarget);
    // console.log(this.formTarget.action)
  }

  send(event) {
    // console.log(event.target);
    event.preventDefault()
    fetch(event.target.action, {
      method: event.target.method, // POST
      headers: { "Accept": "application/json" },
      body: new FormData(event.target)
    })
    .then(response => response.json())
    .then((data) => {
      if (data.inserted_element) {
        this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_element)
      }
      event.target.outerHTML = data.form
    })
  }
}

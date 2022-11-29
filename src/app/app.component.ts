import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  today: number = Date.now();

  constructor() {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }

  search() {
    const query = (document.getElementById('search-input') as HTMLInputElement).value
    window.location.href = `https://www.duckduckgo.com/?q=${query}`
  }

  searchWithEnter() {
    const searchInput = document.getElementById("search-input")
    const searchButton = document.getElementById("search-button")
    searchInput?.addEventListener("keypress", function onEvent(event) {
      if (event.key === "Enter") {
        searchButton?.click()
      }
    })
  }

}

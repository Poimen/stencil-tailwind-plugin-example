import { Component, h } from '@stencil/core';

@Component({
  tag: 'main-app',
  styleUrl: 'main-app.css',
  shadow: true,
})
export class MainApp {

  render() {
    return (
      <div>
        <main>
          <top-nav-bar></top-nav-bar>
          <hero-section></hero-section>
          <demo-section></demo-section>
          <footer-nav></footer-nav>
        </main>
      </div>
    );
  }
}

import React, { Component } from 'react';

import { BrowserRouter, Route, Link }  from 'react-router-dom'

import List from './pages/list'
import Form from './pages/form'
import View from './pages/view'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <header className="pa4 bg-yellow white-70">
          <h1>Patients CRUD</h1>
        </header>
        <main className="pa4 black-80">
          <Route exact path="/" component={List} />
          <Route path="/patients/new" component={Form} />
          <Route path="/patients/:id" component={View} />

        </main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

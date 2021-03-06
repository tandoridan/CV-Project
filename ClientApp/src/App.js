import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
          
        <Route exact path='/' component={Home} />
        <About />
        <Skills />
        <Contact />
      </Layout>
    );
  }
}

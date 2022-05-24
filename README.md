# Vue.js Study

## MVVM

<img src='./images/mvvm.png' />

## Reactivity

- is a programming paradigm that allows us to adjust to changes in a declarative manner.
- 반응형 상태

## Vue Instance

- `new Vue();`
- Root Component

## Vue Template Syntax

- a way to manipulate DOM
- Data Binding
  - `<div>{{ word }}</div>` aka Mustache Tag
- Directives
  - special attributes with `v-` prefix

## watch vs computed

- computed (often a better idea to use this)
  - validation
- watch
  - heavy stuff
  - fetch data

## Vuex

- Flux Pattern & Unidirectional data flow
- Action
  - event or inputs from users
- Dispatcher
  - a way to manipulate data/store
- Model
  - data for view
- View
  - UI for users

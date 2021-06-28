import React from 'react';
import UseStateComponent from "./UseStateComponent";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import EvenMoreReactComponent from "./EvenMoreReactComponent";
import {Provider} from "react-redux";
import store from "./Redux/store/store"
import TodoAdd from "./Redux/TodoAdd";
import TodoList from "./Redux/TodoList";
import Bar from "./Redux/Bar";

// import UseEffectComponent from "./UseEffectComponent";

function App() {
  return (
      <Provider store={store}>
          <div>
              <UseStateComponent/>
              {/*<UseEffectComponent/>*/}
              <UseContextComponent/>
              <UseReducerComponent/>
              <UseRefComponent/>
              <EvenMoreReactComponent/>
              <TodoAdd/>
              <TodoList/>
              <Bar/>
          </div>
      </Provider>
  );
}

export default App;

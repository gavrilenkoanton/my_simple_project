import React from 'react';
import styles from './App.module.css';
import MyName from "./MyName/MyName";
import MyQualities from "./MyQualities/MyQualities";

function App(props) {

  return (
    <div className={styles.App}>
        <MyName />
        <MyQualities mySkills={props.mySkills}/>
    </div>
  );
}

export default App;

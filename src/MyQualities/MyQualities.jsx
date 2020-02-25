import React from 'react';
import styles from './MyQualities.module.css'

class MyQualities extends React.Component {
    mySkills = this.props.mySkills.map((item) => {
        return (
            <div className={styles.skill}>
                {item.skill}
            </div>
        )
    });
    render = () => {

        return (
            <div className={styles.mySkills}>
                {this.mySkills}
            </div>
        );
    }
}

export default MyQualities;

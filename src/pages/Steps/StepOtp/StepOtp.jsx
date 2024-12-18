import React from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from './stepOtp.module.css'
import { useState } from 'react';
const StepOtp = ({ onNext }) => {
    const [otp, setOtp] = useState("");
    function nex
    return (
        <>
            <div className={style.cardwrapper}>Otp component</div>
            {/* <button onClick={onNext}>Next</button> */}
            <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onchange={(e)=>{
                setOtp(e.target.value)
             }}></TextInput>    
    <div>
    <div className={styles.actionButtonWrap }>
                   <Button text="Next" />
                   </div>
                   <p className={styles.bottomParagraph}>
                   By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                   </p>
    </div>
    
</Card>    
        </>
    );
};

export default StepOtp;
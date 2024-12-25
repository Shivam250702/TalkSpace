import React from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from './stepOtp.module.css'
import { useState } from 'react';
import {verifyOtp} from '../../../http';
import {useSelector} from 'react-redux';
import {setAuth} from '../../../store/authSlice';
import { useDispatch } from 'react-redux';
const StepOtp = ({ onNext }) => {
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();
    const datafFromStore=useSelector((state)=>state.auth.otp);
    async function submit(){
try {
   const {data}= await verifyOtp({otp,phone,hash});
   console.log(data);
   dispatch(setAuth(data));
   onNext();
} catch (error) {
    console.log(error);
}
    }
    return (
        <>
            <div className={styles.cardwrapper}>Otp component</div>
            {/* <button onClick={onNext}>Next</button> */}
            <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onchange={(e)=>{
                setOtp(e.target.value)
             }}></TextInput>    
    <div>
    <div className={styles.actionButtonWrap }>
                   <Button onClick={submit} text="Next" />
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
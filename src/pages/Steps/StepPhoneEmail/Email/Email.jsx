import React from 'react'
import { useState } from 'react';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css' 
const Email = ({onNext}) => {

    const [email,setemail]=useState('');
  return (
    <Card title="Enter you email id" icon="email-emoji">
          <TextInput value={email} onchange={(e)=>{
                setemail(e.target.value)
             }}></TextInput>    
    <div>
    <div className={styles.actionButtonWrap }>
                   <Button text="Next" onclick={onNext}/>
                   </div>
                   <p className={styles.bottomParagraph}>
                   By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                   </p>
    </div>
    
</Card>
  )
}

export default Email

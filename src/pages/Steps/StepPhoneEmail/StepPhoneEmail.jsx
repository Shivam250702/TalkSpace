import React from 'react';
import { useState } from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './StepPhoneEmail.module.css'
const phoneEmailMap={
phone:Phone,
email:Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, settype] = useState('phone');
     const Component = phoneEmailMap[type];
 
     function onNext() {
      
     }
 
     return (
     <>

<div className={styles.cardwrapper}>
<div className={styles.buttonWrapper}>

<button onClick={()=>{
       settype('phone');
     }}>
<img className={`${styles.tabButton} ${type==='phone'?styles.active:""}`}src='/images/phone-white.png' alt="phone"/>

     </button>
     <button onClick={()=>{
       settype('email');
     }}>
     
     <img className={`${styles.tabButton} ${type==='email'?styles.active:""}`}src='/images/mail-white.png' alt="email"/>
</button>
</div>

     <Component onNext={onNext} />
</div>





     {/* <button onClick={()=>{
       settype('phone');
     }}>Phone</button>
     <button onClick={()=>{
       settype('email');
     }}>Email</button> */}


     </>
     
    
    
    );
};

export default StepPhoneEmail;
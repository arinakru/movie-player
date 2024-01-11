import React, { useState } from 'react';

import { Button, Form, Input, Checkbox } from 'antd';


export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setpasswordError] = useState('Пароль не может быть пустым');

  const emailHandler = (event) => {
    setEmail(event.target.value)
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(String(event.target.value).toLowerCase())) {
    setEmailError('Некорректный email')
  } else {
    setEmailError('')
  }
  }

  const passwordHandler = (event)=> {
    setPassword(event.target.value)
    if(event.target.value.length < 5 || event.target.value > 14) {
      setpasswordError('Пароль должен быть длиннее 5 и короче 14 символов')
      if (!event.target.value) {
        setpasswordError('Пароль не может быть пустым')
      }
    } else {
      setpasswordError('')
    }
  }

  const blurHandler = (event) => {
    // eslint-disable-next-line default-case
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  }

  return (
    <div className = 'registrationForm'>
      <Form  name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 400, margin:20 }}>

        <h1>Вход</h1>
        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
        <Input onChange={event=> emailHandler(event)} value={email} onBlur={event =>blurHandler(event)} name='email' type='text'placeholder='Введите свой email'/>
        {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
        <Input onChange={event=> passwordHandler(event)} value={password} onBlur={event =>blurHandler(event)} name='password' type='password' placeholder='Введите свой пароль'/>

        <Checkbox>Запомнить меня</Checkbox>
        <Button style={{margin: '20px'}} type="primary" htmlType="submit">Регистрация</Button>
      </Form>
    </div>
  
    )

}
    export default LoginForm

  


```

<Input
  value='8 800 555 35 35'
  onChange={() => console.log(111)}
  currency='$'
  label='Инпут в дефолтном состоянии с валютой и кнопкой очистить'
  error=''
  onClick={() => console.log('')}
/>

<br />

<Input
  type='email'
  value=''
  placeholder='8-800-555-35-35'
  onChange={() => console.log(111)}
  currency=''
  label='Инпут в дефолтном состоянии с плейсхолдером'
  error=''
  onClick={() => console.log('')}
/>

<br />

<Input
  type='email'
  value='75278652835293864'
  onChange={() => console.log(111)}
  currency='€'
  label='Инпут c ошибкой'
  error='Ошибка, введите что-нибудь другое'
  onClick={() => console.log('')}
/>
```
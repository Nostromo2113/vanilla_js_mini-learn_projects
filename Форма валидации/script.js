//Базовые переменные
const inputMail = document.querySelector("#mail");
const inputPassword = document.querySelector('#password');
const inputButton = document.querySelector('.input_button');
const inputContainer = document.querySelector('.wrap');
const mailContent = document.querySelector('.mail_wrap');
const passwordContent = document.querySelector('.password_wrap');


//ФУНКЦИЯ ВАЛИДАЦИИ
function validateForm () {
    //ПОЛУЧЕНИЕ ДАННЫХ ИЗ INPUT
    const inputMailValue = inputMail.value;
    const inputPasswordValue = inputPassword.value;
    //ШАБЛОНЫ ДЛЯ ВАЛИДАЦИИ
    const mailRegexTest = /\w+@\w+\.\w+/;
    const passwordRegexTest = /^[A-Za-z0-9]+$/;
    
    //ОЧИСТКА ПРЕДЫДУЩИХ РЕЗУЛЬТАТОВ
    let errorMailMassage = document.querySelector('#errorMailMassage');
    let successMailMassage = document.querySelector('#successMailMassage');
    let successPasswordMassage = document.querySelector('#successPassword');
    let errorPasswordMassage = document.querySelector('#errorPassword');
        if(successMailMassage){
            successMailMassage.remove();
        };
        if(errorMailMassage){
            errorMailMassage.remove();
        };
        if(successPasswordMassage){
            successPassword.remove();
        };
        if(errorPasswordMassage){
            errorPassword.remove();
        };
    
    //ЭЛЕКТРОННАЯ ПОЧТА
    if (mailRegexTest.test(inputMailValue)){
        let successMail = document.createElement('p');
        successMail.textContent = 'Успешно';
        successMail.style.color = 'green';
        successMail.id = 'successMailMassage';
        mailContent.appendChild(successMail);
    } else {
        console.log('ошибка')
        let errorMail = document.createElement('p')
        errorMail.textContent = 'Некорректный ввод';
        errorMail.style.color = 'red';
        errorMail.id = 'errorMailMassage';
        mailContent.appendChild(errorMail);
    };

    //ПАРОЛЬ
    if (passwordRegexTest.test(inputPasswordValue) && inputPasswordValue.length >= 6){
        let successPassword = document.createElement('p');
        successPassword.textContent = 'Успешно';
        successPassword.id = 'successPassword';
        successPassword.style.color = 'green';
        passwordContent.appendChild(successPassword);
    } else {
        let errorPassword = document.createElement('p');
        errorPassword.textContent = 'Некорректный ввод';
        errorPassword.id = 'errorPassword';
        errorPassword.style.color = 'red';
        passwordContent.appendChild(errorPassword);
    }
};





//ОБРАБОТКА СОБЫТИЙ
inputButton.addEventListener('click', function(){
    validateForm()
});

inputContainer.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    validateForm();
  }
});
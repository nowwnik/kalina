function InputField() {
    document.getElementById("sending").reset();
}

function checkFirstName() {
    var first = document.getElementById("firstName").value;
    var regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(first)) {
        document.getElementById("firstname_check").style.color = "green";
        document.getElementById("firstname_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("firstname_check").style.color = "red";
        document.getElementById("firstname_check").innerHTML = "От 2 до 20 символов";
        return false;
    }
}

function checkSecondName() {
    var second = document.getElementById("secondName").value;
    var regex = /^[а-яА-Я\s]{2,30}$/;

    if (regex.test(second)) {
        document.getElementById("secondname_check").style.color = "green";
        document.getElementById("secondname_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("secondname_check").style.color = "red";
        document.getElementById("secondname_check").innerHTML = "От 2 до 30 символов";
        return false;
    }
}

function checkLastName() {
    var last = document.getElementById("lastName").value;
    var regex = /^[а-яА-Я\s]{2,25}$/;

    if (regex.test(last)) {
        document.getElementById("lastname_check").style.color = "green";
        document.getElementById("lastname_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("lastname_check").style.color = "red";
        document.getElementById("lastname_check").innerHTML = "От 2 до 25 символов";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^[\d\+][\d\(\)\ -]{4,16}\d$/;

    if (regex.test(phone)) {
        document.getElementById("phone_check").style.color = "green";
        document.getElementById("phone_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("phone_check").style.color = "red";
        document.getElementById("phone_check").innerHTML = "Номер в формате +7-XXX-ХХХ-ХХ-ХХ";
        return false;
    }
}

function checkJob() {
    var dest = document.getElementById("job").value;
    var regex = /^[а-яА-Я\s.,\d ]{5,100}$/;

    if (regex.test(dest)) {
        document.getElementById("job_check").style.color = "green";
        document.getElementById("job_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("job_check").style.color = "red";
        document.getElementById("job_check").innerHTML = "От 5 до 100 символов";
        return false;
    }
}


function Order() {
    let firstname = document.getElementById('firstName').value;
    let secondname = document.getElementById('secondName').value;
    let lastname = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let dest = document.getElementById("job").value;
    


    if (firstname != '' && secondname != '' && lastname != '' && phone != '' && dest != '' ) {
        document.getElementById("orderSummary").innerHTML = " ";
        document.getElementById("orderSummary").innerHTML += "<p>Ваша заявка принята.</p>";
        alert(firstname + ' ' + lastname + ' ,' + 'спасибо за отклик на вакансию. Скоро мы с вами свяжемся')
    } else {
        document.getElementById('orderSummary').style.color = 'blue';
        document.getElementById('orderSummary').innerHTML = 'Заполните все поля';
    }

    const text = document.getElementById("hidden");
    text.style.display = "block";
}
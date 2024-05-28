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
    var last = document.getElementById("secondName").value;
    var regex = /^[а-яА-Я\s]{2,30}$/;

    if (regex.test(last)) {
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

function checkNeed() {
    var dest = document.getElementById("need").value;
    var regex = /^[а-яА-Я\s.,\d ]{5,250}$/;

    if (regex.test(dest)) {
        document.getElementById("need_check").style.color = "green";
        document.getElementById("need_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("need_check").style.color = "red";
        document.getElementById("need_check").innerHTML = "От 5 до 250 символов";
        return false;
    }
}


function Order() {
    let firstname = document.getElementById('firstName').value;
    let secondname = document.getElementById('secondName').value;
    let lastname = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    var dest = document.getElementById("need").value;



    if (firstname != '' && secondname != '' && lastname != '' && phone != '' && dest != '') {
        document.getElementById("orderSummary").innerHTML = " ";
        document.getElementById("orderSummary").innerHTML += "<p>Ваша заявка принята.</p>";
        sendMail();
        alert(firstname + ' ' + lastname + ' ,' + 'cкоро мы с Вами свяжемся для обсуждения коммерческого предложения.')


    } else {
        document.getElementById('orderSummary').style.color = 'blue';
        document.getElementById('orderSummary').innerHTML = 'Заполните все поля';
    }

    const text = document.getElementById("hidden");
    text.style.display = "block";
}

(function () {emailjs.init({publicKey: "gKR6bffspOUk4UZPY",});})();

function sendMail() {

    var params = {
        secondName: document.getElementById('secondName').value,
        lastName: document.getElementById('lastName').value,
        firstName: document.getElementById('firstName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        need: document.getElementById("need").value,
    };

    const serviceID = "service_vda43ob";
    const templateID = "template_m6pmhc6";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById('secondName').value = "";
            document.getElementById('lastName').value = "";
            document.getElementById('firstName').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById("need").value = "";
            console.log(res);
        })
        .catch((err) => console.log(err));
}
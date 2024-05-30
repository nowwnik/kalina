//стандартные для страниц функции из header//
function copyEmail() {
    navigator.clipboard.writeText
        ("spkkalina@mail.ru");
}

function copyPhone() {
    navigator.clipboard.writeText
        ("+7(34372) 5-36-91");
}

//Плавная прокрутка вниз//

function scrollDown() {
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() - 200 }, 600);
}


//Валидация//

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



    if (firstname != '' && secondname != '' && lastname != '' && phone != '' && dest != '') {
        document.getElementById("orderSummary").innerHTML = " ";
        document.getElementById("orderSummary").innerHTML += "<p>Ваша заявка принята.</p>";
        sendMail();
        alert(firstname + ' ' + lastname + ' ,' + 'спасибо за отклик на вакансию. Скоро мы с вами свяжемся')
    } else {
        document.getElementById('orderSummary').style.color = 'blue';
        document.getElementById('orderSummary').innerHTML = 'Заполните все поля';
    }

    const text = document.getElementById("hidden");
    text.style.display = "block";
}

(function () { emailjs.init({ publicKey: "gKR6bffspOUk4UZPY", }); })();

function sendMail() {

    var params = {
        secondName: document.getElementById('secondName').value,
        lastName: document.getElementById('lastName').value,
        firstName: document.getElementById('firstName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        job: document.getElementById("job").value,
    };

    const serviceID = "service_ij61c6h";
    const templateID = "template_rgizucm";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById('secondName').value = "";
            document.getElementById('lastName').value = "";
            document.getElementById('firstName').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById("job").value = "";
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            alert('Произошла ошибка при отправке сообщения. Пожалуйста, свяжитесь с нами по почте spkkalina@mail.ru или телефону +7(34372) 5-36-91');
        });
}


let vacancy = document.getElementById("vacancy");

//карточки вакансий//
let vacancyCards = [
    {
        //идентификатор//
        id: "1",
        // картинка//
        image: "images/vacancy/1.jpg",
        //Вакансия//
        vacancyName: "Оператор машинного доения",
        //обязанности//
        duties: "Чистка коров, перегонка животных, зооветмероприятия, чистка поилок и под поилками",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, разрывной график работы, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Ответственность, дисциплинированность.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "2",
        // картинка//
        image: "images/vacancy/2.jpg",
        //Вакансия//
        vacancyName: "Рабочий по уходу за животными",
        //обязанности//
        duties: "Осуществлять работы: по кормлению, поению, перегонке животных. Чистка помещений.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, разрывной график работы, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Ответственность, дисциплинированность, коммуникабельность.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "3",
        // картинка//
        image: "images/vacancy/3.jpg",
        //Вакансия//
        vacancyName: "Рабочий по уходу за молодняком",
        //обязанности//
        duties: "Осуществлять работы: по кормлению, поению, перегонке молодняка. Чистка помещений.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, разрывной график работы, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Ответственность, дисциплинированность, коммуникабельность.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "4",
        // картинка//
        image: "images/vacancy/4.jpg",
        //Вакансия//
        vacancyName: "Фуражир (помощник бригадира молочно-товарной фермы)",
        //обязанности//
        duties: "Нести ответственность за своевременное и качественное кормление и содержание животных, проведение контрольных доек, нумерацию животных, взвешивание новорожденных телят и проведение перевески имеющегося поголовья, содержание в чистоте всех производственных помещений и площадок. Вести регулярный учет труда работников фермы, выдавать наряды и принимать выполненную работу.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, разрывной график работы, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Ответственность, дисциплинированность.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "5",
        // картинка//
        image: "images/vacancy/5.jpg",
        //Вакансия//
        vacancyName: "Лаборант-мойщица",
        //обязанности//
        duties: "Следить за исправностью оборудования, соблюдать чистоту.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Ответственность, быстрая обучаемость.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "6",
        // картинка//
        image: "images/vacancy/6.jpg",
        //Вакансия//
        vacancyName: "Слесарь по ремонту и обслуживанию системы удаления навоза",
        //обязанности//
        duties: "Выполнять работы по удалению навоза животноводческих корпусов 2 раза в день, проводить техническое бслуживание навозных транспортеров",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, полный социальный пакет доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Ответственность, умение работать в коллективе.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "7",
        // картинка//
        image: "images/vacancy/7.jpg",
        //Вакансия//
        vacancyName: "Оператор по искусственному осеменению",
        //обязанности//
        duties: "Искусственное осеменение животных, разработка планов случки и отёлов, участие в мероприятиях по совершенствованию организации воспроизводства стада, улучшение породного состава, оформление документации.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Ответственность, исполнительность, аккуратность.",
        //образование//
        edu: "Не указан",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "8",
        // картинка//
        image: "images/vacancy/8.jpg",
        //Вакансия//
        vacancyName: "Ветеринарный врач",
        //обязанности//
        duties: "Организовывать проведение противоэпизоотических, профилактических, лечебных и ветеринарно-санитарных мероприятий, направленных на повышение продуктивности крупного рогатого скота, снижение заболеваний, падежа животных.",
        //доп информация//
        dopInfo: " 6-ти дневная рабочая неделя, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Адаптивность, обучаемость, коммуникабельность, стрессоустойчивость, ответственность.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "9",
        // картинка//
        image: "images/vacancy/9.jpg",
        //Вакансия//
        vacancyName: "Агроном",
        //обязанности//
        duties: "Осуществление контроля за соблюдением правил производства, хранения и реализации семенного и посадочного материала, оформление документации по семеноводству.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Быстрая обучаемость, стрессоустойчивость, коммуникабельность, ответственность, инициативность.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "10",
        // картинка//
        image: "images/vacancy/10.jpg",
        //Вакансия//
        vacancyName: "Тракторист-машинист сельскохозяйственного производства",
        //обязанности//
        duties: "Управление трактором. Выявление и устранение неисправностей в работе трактора. Текущий ремонт и участие во всех других видах ремонта обслуживаемого трактора и прицепных устройств.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Удостоверение тракториста, ответственность, умение работать в команде.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "11",
        // картинка//
        image: "images/vacancy/11.jpg",
        //Вакансия//
        vacancyName: "Водитель категории С и Е",
        //обязанности//
        duties: "Следить за техническим состоянием автомобиля, выполнять самостоятельно необходимые работы по обеспечению его безопасной эксплуатации (согласно инструкции по эксплуатации). Перевозка грузов, заправка автомобиля топливом, смазочными материалами и охлаждающей жидкостью. Оформление путевых документов.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Наличие водительского удостоверения с открытыми категориями С и Е. Ответственность, исполнительность, аккуратность.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "12",
        // картинка//
        image: "images/vacancy/12.jpg",
        //Вакансия//
        vacancyName: "Водитель категории В",
        //обязанности//
        duties: "Следить за техническим состоянием автомобиля, выполнять самостоятельно необходимые работы по обеспечению его безопасной эксплуатации (согласно инструкции по эксплуатации). Заправка автомобиля топливом, смазочными материалами и охлаждающей жидкостью. Оформление путевых документов.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Наличие водительского удостоверения с открытой категорией В. Ответственность, исполнительность, аккуратность.",
        //образование//
        edu: "Не указано",
        //зарплата//
        salary: "45.000",
    },
    {
        //идентификатор//
        id: "13",
        // картинка//
        image: "images/vacancy/13.jpg",
        //Вакансия//
        vacancyName: "Бригадир молочно-товарной фермы",
        //обязанности//
        duties: "Осуществляет руководство, контроль в производственной деятельности фермы.",
        //доп информация//
        dopInfo: "6-ти дневная рабочая неделя, полный социальный пакет, доставка служебным автотранспортом, иногородним предоставляется жильё",
        //требования//
        req: "Коммуникабельность, дисциплинированность, ответственность, умение работать с персональным компьютером.",
        //образование//
        edu: "Среднее профессиональное",
        //зарплата//
        salary: "45.000",
    }
];

let generateVacancy = () => {
    return (vacancy.innerHTML = vacancyCards
        .map((x) => {
            let { id, image, vacancyName, duties, dopInfo, req, edu, salary } = x;
            return `
        <div id="vacancy_id_${id}" class="vacancy__card wow animate__animated animate__fadeInUp">
            <img class="vacancy__card__img" src=${image} alt="">
            <div class="vacancy__card__text">
                <h2>${vacancyName}</h2>
                <h3>Обязанности</h3>
                ${duties}
                <h3>Дополнительная информация</h3>
                ${dopInfo}
                <h3>Общие требования</h3>
                ${req}
                <h3>Требования к образованию</h3>
                ${edu}
                <h3>Зарплата от ${salary} руб.</h3>
            </div>
            <div class="respond__button" onclick="scrollDown()">Откликнуться</div>
        </div>
        `;
        })
        .join(""));
};

generateVacancy();

import { Address, Banner, City, Company, Employee, Place, Region, Specialization, Vacancy } from './types';
import { Category } from './pages/PublishVacancyPage/Fieldsets/CategorySelectFieldset/CategorySelectFieldset';

const logoImage = require('./assets/images/mocks/company.jpg');
const logoCompany = require ('./assets/images/mocks/comLogo.png');
const slide1 = require('./assets/images/mocks/slide1.jpg');
const slide2 = require('./assets/images/mocks/slide2.jpg');
const slide3 = require('./assets/images/mocks/slide3.jpg');
const slide4 = require('./assets/images/mocks/slide4.jpg');
const slide5 = require('./assets/images/mocks/slide5.jpg');
export const avatarMock = require('./assets/images/mocks/avatar.jpg');

export const categoryBar = require('./assets/images/categoryBar.png');
export const categoryKitchen = require('./assets/images/categoryKitchen.png');
export const categoryManagement = require('./assets/images/categoryManagement.png');
export const categoryOther = require('./assets/images/categoryOther.png');
export const categoryWithoutTraining = require('./assets/images/categoryWithoutTraining.png');

export const regionMock: Region = {
    id: 1,
    name: "",
};

export const cityMock: City = {
    id: 1,
    name: "Москва",
    dnsAlias: "msk",
}

export const addressMock: Address = {
    color: "0078C9",
    station: "Московская",
    coord: "55.730786,37.631424",
    address: "ул. Пушкина, дом Колотушкина",
}

export const addressesMock: Address[] = [
    {
        color: '0078C9',
        station: 'Московская',
        coord: '55.730786,37.631424',
        address: 'ул. Пушкина, дом Колотушкина 1',
    },
    {
        color: '0078C9',
        station: 'Московская',
        coord: '55.730786,37.631424',
        address: 'ул. Пушкина, дом Колотушкина 2',
    },
    {
        color: '0078C9',
        station: 'Московская',
        coord: '55.730786,37.631424',
        address: 'ул. Пушкина, дом Колотушкина 3',
    },
];

export const specializationMock: Specialization = {
    id: 1,
    title: "Повар",
}

export const vacancyMock: Vacancy = {
    id: 1,
    isArchived: false,
    title: "Повар",
    textDescription: `
                    Обязанности:\n\n  Встреча и обслуживание столов и банкетов‚знание меню и стандартов сервиса.\n\n
                    Требования:\n\nВозможно без опыта работы\n\nГражданство РФ.\n\nГрамотная речь‚ наличие медицинской
                    книжки и полного пакета документов.\n\nУсловия:\n\n  Ресторан в шаговой доступности от метро чистые
                    пруды‚ бесплатное питание‚ скидка на меню 50 %‚ оформление по т.к.\n\n \n\n \n\n
                `,
    isHot: false,
    isRecommended: false,
    isActive: false,
    isStandard: true,
    salaryText: "45 000 - 50 000 ₽",
    hasTea: true,
    hasPercent: false,
    addressesList: [addressMock, addressMock, addressMock],
    specialization: specializationMock,
    company: {
        id: 1,
        brend: "Пиворама",
        brendOfMonth: null,
        logo: logoImage,
        orgname: "Пиворама",
        city: cityMock,
        textDescription: "",
        vacancyPublished: [],
        photoSet: [],
    },
    publishedDate: "2018-06-11T13:03:35",
    params: [["Опыт", "1 - 3 года"], ["Опыт", "1 - 3 года"]],
    callbackPhone: "",
    number: "9134",
    link: "#",
}

export const vacancyMockActive: Vacancy = {
    ...vacancyMock,
    isActive: true,
}

export const vacancyMockRecommended: Vacancy = {
    ...vacancyMock,
    isRecommended: true,
}

export const vacancyMockHot: Vacancy = {
    ...vacancyMock,
    isHot: true,
}

export const vacancyMockLong: Vacancy = {
    ...vacancyMock,
    title: "Повар горячего цеха очень хорошая зарплата очень большие перспективы",
}

export const companyMock: Company = {
    id: 1,
    brend: "Пиворама",
    brendOfMonth: null,
    logo: logoImage,
    orgname: "Пиворама",
    city: cityMock,
    textDescription: "",
    photoSet: [slide1, slide2, slide3, slide4, slide5],
    vacancyPublished: [vacancyMock, vacancyMockLong, vacancyMockHot, vacancyMockRecommended, vacancyMock],
}

export const companyMock1: Company = {
    ...companyMock,
    photoSet: [...companyMock.photoSet],
    logo: logoCompany,
}

export const employeeMock: Employee = {
    name: "Рустам",
    vacancy: "Повар горячего цеха",
    salary: "от 30 000 ₽",
    photo: avatarMock,
}

export const bannerMock: Banner = {
    href: "#",
    img: "http://restojob.ru/media/banner/files1/iphonebaaner.jpg",
}

export const placeMock: Place = {
    title: "Британские кондитерские",
    city: "Санкт-Петербург",
};

export const placesMock: Place[] = [
    { title: "Британские кондитерские 1", city: "Санкт-Петербург" },
    { title: "Британские кондитерские 2", city: "Санкт-Петербург" },
    { title: "Британские кондитерские 3", city: "Санкт-Петербург" },
    { title: "Британские кондитерские 4", city: "Санкт-Петербург" },
];

export const categoryMock: Category[] = [
    {
        title: "Зал и бар",
        image: categoryBar,
        specializations: [
            "Бренд-шеф",
            "Шеф-повар",
            "Су-шеф",
            "Зав. производством",
            "Повар-универсал",
            "Повар горячего цеха",
            "Повар холодного цеха",
            "Пиццмейкер",
            "Сушист",
            "Кондитер",
            "Пекарь",
            "Заготовщик",
        ],
    },
    {
        title: "Кухня",
        image: categoryKitchen,
        specializations: [
            "Бренд-шеф",
            "Шеф-повар",
            "Су-шеф",
            "Зав. производством",
        ],
    },
    {
        title: "Управление",
        image: categoryManagement,
        specializations: [
            'Бренд-шеф',
            'Шеф-повар',
            'Су-шеф',
            'Зав. производством 1',
            'Зав. производством 2',
            'Зав. производством 3',
        ],
    },
    {
        title: "Другие специалисты",
        image: categoryOther,
        specializations: [
            "Бренд-шеф",
            "Шеф-повар",
        ],
    },
    {
        title: "Без спец подготовки",
        image: categoryWithoutTraining,
        specializations: [
            'Бренд-шеф',
            'Шеф-повар 1',
            'Шеф-повар 2',
            'Шеф-повар 3',
        ],
    },
]

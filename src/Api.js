import card_img1 from "./__images/card_img1.png";
import card_img2 from "./__images/card_img2.png";
import card_img3 from "./__images/card_img3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const Data = [
    {
        "image": card_img1,
        "user": "2-3",
        "user_icon": <FontAwesomeIcon icon={faUsers}/>,
        "time": "30-60",
        "time_icon": <FontAwesomeIcon icon={faStopwatch}/>,
        "age": 16,
        "name": "Warhammer 40,000: Chaos Space Marines",
        "price": "3657 ₽",
    },
    {
        "image": card_img2,
        "user": "2-3",
        "user_icon": <FontAwesomeIcon icon={faUsers}/>,
        "time": "30-60",
        "time_icon": <FontAwesomeIcon icon={faStopwatch}/>,
        "age": 16,
        "name": "На марсе",
        "price": "3657 ₽",
    },
    {
        "image": card_img3,
        "user": "2-3",
        "user_icon": <FontAwesomeIcon icon={faUsers}/>,
        "time": "30-60",
        "time_icon": <FontAwesomeIcon icon={faStopwatch}/>,
        "age": 16,
        "name": "Broken Realms: Horrek's Dreadlance",
        "price": "3657 ₽"
    },
    {
        "image": card_img1,
        "user": "2-3",
        "user_icon": <FontAwesomeIcon icon={faUsers}/>,
        "time": "30-60",
        "time_icon": <FontAwesomeIcon icon={faStopwatch}/>,
        "age": 16,
        "name": "Orks: Ghazghkull Thraka Коллекционный выпуск",
        "price": "3657 ₽"
    }
];

export default Data;

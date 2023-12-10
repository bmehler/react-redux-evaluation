import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Stars = (props) => {

    return (
        props.total >= 75 ? (
            <span className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : props.total < 75 && props.total >= 55 ? (
            <span className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : props.total < 55 && props.total >= 30 ? (
            <span className="star">
                <FontAwesomeIcon icon={faStar} />
            </span>
        ) : (
            <span></span>
        )
    )
}
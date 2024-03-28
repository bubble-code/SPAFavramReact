import { CompoundButton } from "@fluentui/react-components";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
const CompoundButtom = (props) => {
    const navigate = useNavigate()
    const { textSecondary, textPrimary, icon, link, ...d } = props;
    return <CompoundButton
        icon={icon}
        secondaryContent={textSecondary}
        onClick={() => navigate(link)}
        {...d}
    >
        {textPrimary}
    </CompoundButton>
}

export default CompoundButtom;

CompoundButtom.propTypes = {
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string,
    icon: PropTypes.object,
    link: PropTypes.string,
}
import { CompoundButton } from "@fluentui/react-components";
import PropTypes from 'prop-types'
const CompoundButtom = (props) => {
    const { textSecondary, textPrimary, icon, ...d } = props;
    return <CompoundButton
        icon={icon}
        secondaryContent={textSecondary}
        {...d}
    >
        {textPrimary}
    </CompoundButton>
}

export default CompoundButtom;

CompoundButtom.propTypes = {
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string,
    icon: PropTypes.object
}
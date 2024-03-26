import Components from '../components/CompoundButton'
import { CalendarMonthRegular, Power20Filled } from "@fluentui/react-icons";

export const Automate = () => {
    return (
        <div>
            <Components textPrimary={"Tab Excel"} textSecondary={"Renombrar tabs de excel"} icon={<CalendarMonthRegular />} />
            <Components textPrimary={"ManPower"} textSecondary={"Generar excel ManPower"} icon={<Power20Filled />} />

        </div>
    )
}

import { Outlet } from 'react-router-dom';
import Components from '../components/CompoundButton'
import { CalendarMonthRegular, Power20Filled } from "@fluentui/react-icons";

export const Automate = () => {
    return (
        <div className='flex flex-col max-w-full'>
            <div className='flex mt-2'>
                <Components textPrimary={"Tab Excel"} textSecondary={"Renombrar tabs de excel"} icon={<CalendarMonthRegular />} link={'formtabexcel'} />
                <Components textPrimary={"ManPower"} textSecondary={"Generar excel ManPower"} icon={<Power20Filled />} />
            </div>
            <div className='min-w-full mt-4'>
                <Outlet />
            </div>

        </div>
    )
}

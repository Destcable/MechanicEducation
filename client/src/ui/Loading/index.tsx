import { motion } from "framer-motion";
import LogotypeLoading from "../AuthForm/img/prof_dark.png";

export const Loading = ({
    duration = 2,
}) => {
    return <div className='d-flex h-100 align-items-center justify-content-center'>
        <div>
            <motion.img
                src={LogotypeLoading}
                width='200px'
                initial={{ scale: 1 }}
                animate={{ scale: 1.5 }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            />
        </div>
    </div>
}
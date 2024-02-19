import { motion } from "framer-motion";

const SharedHeading = ({heading}) => {
    return (
        <div className="w-3/12  mx-auto flex flex-col items-center">
            
            <motion.h1
                    className="text-4xl mb-5  text-center text-[#523906]  border-b-4 border-[#523906] font-extrabold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >{heading}</motion.h1>
            
            

        </div>
    );
};

export default SharedHeading;
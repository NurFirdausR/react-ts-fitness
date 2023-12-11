import { SelectedPage,BenefitType } from "@/shared/types";
import HText  from "@/shared/HText";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"
import {motion} from "framer-motion"
const benefits :Array<BenefitType>  = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Nque adispicing amet met enim"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Class",
        description: "Nque adispicing amet met enim"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Nque adispicing amet met enim"
    },
];
type Props = {
    setSelectedPage:(value: SelectedPage) => void;
};
const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section  
    id="benefits" 
    className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

            {/* HEADER */}
            <div>
                <HText>MORE THAT JUST GYM.</HText>
                <p className="my-5 text-sm">
                    We Provide Gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes That you Dream of.. Get Your Dream
                    Body Now.
                </p>                
            </div>

            {/* BENEFITS */}
            <div className="md:flex items-center justify-between gap-8 mt-5"> 
                {benefits.map((benefit) => (
                    <Benefits/>
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits

import { SelectedPage,ClassType } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from "./Class";
const classes: Array<ClassType>  = [
    {
        name : "Aventur Training Classes",
        description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        image: image1
    },
    {
        name : "Yoga Training Classes",
        description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        image: image2
    },
    {
        name : "Softskill Training Classes",
        description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        image: image3
    },
    {
        name : "Network Training Classes",
        description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        image: image4
    },
    {
        name : "Ab Training Classes",
        description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        image: image5
    },
    {
        name : "Height Training Classes",
        description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        image: image6
    },
]
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-[100%] bg-primary-100">
            <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}>
                        <motion.div
                        className="mx-auto w-5/6"
                        initial="hidden"      
                        whileInView="visible" 
                        viewport={{once:true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x: 0},
                        }}>
                            <div className="mx-2  w-5/6 py-5">
                                <HText>OUR CLASSES</HText>
                                <p className="py-5">
                                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                                </p>
                            </div>

                        </motion.div>
                        <motion.div className="mt-4  h-[353px] w-full overflow-x-auto overflow-y-hidden"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         variants={container}>   
                            <ul className='w-[2400px] whitespace-nowrap ' >
                                {classes.map((item,index) => (
                                        <Class 
                                         key={`${item.name}-${index}`}
                                         name={item.name}
                                         description={item.description}
                                         image={item.image}
                                        />
                                ))}
                            </ul>
                        </motion.div>
            </motion.div>
    </section>
  )
}

export default OurClasses
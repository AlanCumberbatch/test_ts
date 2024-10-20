// import { SelectedPage } from '@/shared/types';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";

const childVariant = {
  hidden: {opacity: 0, scale: 0.2},
  visible: {opacity: 1, scale: 1},
};
// const animation_1 = {
//   initial:{ scale: 0 },
//   animate:{ rotate: 180, scale: 1 },
//   transition:{
//     type: "spring",
//     stiffness: 260,
//     damping: 20,
//   },
// }

// type Props = {
//   // icon: JSX.Element;
//   // title: string,
//   // description: string,
//   // setSelectedPage:(value: SelectedPage) => void;
// }

const FramerMotion = () => {
  return (
    <div className="flex items-baseline">
      <motion.div
        className="mt-5 rounded-md border-2 border-gray-500 w-[160px] p-5 text-center "
        variants={childVariant}
      >
        {/* <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            icon
          </div>
        </div> */}
        <h4 className="font-bold">title</h4>
        <p className="my-3">description</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className=" w-[40px] h-[40px] border-2 "
      />
    </div>
  )
}

export default FramerMotion
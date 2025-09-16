import { motion } from "framer-motion"

const ShoppingCart = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="shopping-cart text-center">
      <h1>Shopping Cart</h1>
    </motion.div>
  )
}

export default ShoppingCart

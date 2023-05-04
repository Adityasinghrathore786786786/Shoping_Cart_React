import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

   const addToCart =()=>{
    dispatch(add(post));
    toast.success("Item Added To Cart");
   }
  
   const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.success("Item Removed From Cart");
   }

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src= {post.image} alt="product-img" />
      </div>
      <div>
        {post.price}
      </div>
      {
        cart.some((p)=>p.id === post.id) ?
        (<button onClick={removeFromCart}>
          Remove Item
        </button>):
        (<button onClick={addToCart}>
          Add To Cart
        </button>)
      }
    </div>
  );
};

export default Product;

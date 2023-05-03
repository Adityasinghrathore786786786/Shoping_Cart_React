const Product = ({post}) => {
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
      <button>
        {
          // selected ? <p>Remove Item</p> :<p>Add to Cart</p>
        }
      </button>
    </div>
  );
};

export default Product;

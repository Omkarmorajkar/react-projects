import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LinkButton to="/menu" className="text-blue-500 hover:text-blue-700">
        &larr; Back to menu
      </LinkButton>

      <p className="text-lg font-semibold text-gray-800 mt-4 text-center">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;

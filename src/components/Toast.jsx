import { useCart } from "../context/CartContext";

function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div id="toast" className="show">
      {toast}
    </div>
  );
}

export default Toast;
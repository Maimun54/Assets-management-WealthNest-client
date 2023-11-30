import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  const [paymentEmail, setPaymentEmail] = useState([]);
  const { user } = useAuth();
  console.log(user?.email);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPaymentEmail(data));
  }, [user?.email]);

  console.log(paymentEmail?.selectedPackage);

  return (
    <div>
      <h1>This is Payment page</h1>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm handleClose={closeModal} packageInfo={paymentEmail?.selectedPackage} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

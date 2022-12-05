import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";

const useMyOrder = (props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [myOrder, setMyOrder] = useState([]);
  const email = user?.email;
  useEffect(() => {
    const getMyOrder = async () => {
      const url = `https://knowledge-zone-2022.onrender.com/${props}?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyOrder(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getMyOrder();
  }, [email, navigate]);

  return [myOrder, setMyOrder];
};

export default useMyOrder;

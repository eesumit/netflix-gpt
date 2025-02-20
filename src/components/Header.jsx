import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  console.log(user);
  const handleSingOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      console.log("Error in signOuting "+ error);
    });
  }
  return (
    <div className="z-20 px-30 py-4 w-full absolute bg-gradient-to-b from-black flex justify-between">
      {/* <img className="bg-none" src={logo} alt="logo" /> */}
      <img className="w-48 " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

      { user && <div className="flex justify-between items-center gap-3">
        <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="userImage" />
        <button className="border-black border-2 rounded-md p-1 cursor-pointer bg-amber-200 hover:bg-amber-900"
          onClick={handleSingOut}
        >SignOut➡️</button>
      </div>}
    </div>

  )
}

export default Header;
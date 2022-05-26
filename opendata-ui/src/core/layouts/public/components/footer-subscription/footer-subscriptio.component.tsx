import ButtonComponent from "packages/RButton/button.component";
import InputComponent from "packages/RInput/input.component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./footer-subscription.component.scss";
import { Subscribers } from "./store/action";

const FooterSubscription = () => {
  const dispatch = useDispatch()
    const [error,setError] = useState("")
    const [subs, setSubs] = useState({
        email:"",

    })
    const {email} =  subs
    const handleChange = (e:any)=>{
        const {name,value} = e.target
        setSubs({...subs,[name]:value})
    }
    const handleSubmit = (e:any)=>{
        if(!email ){
            setError("Please provide input")
            setTimeout(()=>{
                setError("")
            },1000)
        }
        else{
            dispatch(Subscribers(subs))
            setSubs({
                email:"",
            })
        }
        e.preventDefault()

    }
  return (
    <div className="subscription">
      <p>Yeniliklərdən xəbərdar ol</p>
      <form onSubmit={handleSubmit}>
        <div className="subs-search">
          <InputComponent
            type="email"
            name="email"
            placeholder="Email"
            className="footer-input"
            onChange={handleChange}
            error={error}
          />
          <ButtonComponent type="submit" classNames="primary-btn btn--rounded-circle">
            Göndər
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default FooterSubscription;

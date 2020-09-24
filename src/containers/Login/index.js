import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NumberForm from "./NumberForm";
import OTPForm from "./OTPForm";
import NameForm from "./NameForm";
import { newOTP } from "../../utils/services/auth";
import { UserContext } from '../../utils/context/user';
import Illustration from '../../images/login-illustration.png';
import EditIcon from '../../images/edit-icon.svg';
import  {
  LoginContainer,
  ImageContainer,
  OTPContainer,
  TextContainer,
  EditNumber
} from './styles';

const LoginPage = props => {

  const history = useHistory();

  const[saveNumber, setSaveNumber] = useState({});

  const[showNumberForm, setShowNumberForm] = useState(true);

  const[showOtpForm, setShowOtpForm] = useState(false);

  const[showNameForm, setShowNameForm] = useState(false);

  const onNumFormFinish = (obj, authToken) => {
    setSaveNumber(obj);
    sendOtp(authToken);
    setShowNumberForm(false);
    setShowOtpForm(true);
  };

  //otp
  const sendOtp = (token) => {
    newOTP(token, res => {
      console.log(res.data);
    });
  };

  const { getDetails } = useContext(UserContext);

  const onOTPFormFinish = data => {
    setShowOtpForm(false);
    if(!data.profile_completed) {
      setShowNameForm(true);
    } else {
      props.closeDrawer();
      getDetails();
      history.go(0);
    }
  };

  const resendOtp = () => {
    sendOtp(localStorage.getItem('api_token'));
  };

  //name form
  const onNameFormFinish = () => {
    setShowNameForm(false);
    props.closeDrawer();
  };

  const toNumInput = () => {
    setShowOtpForm(false);
    setShowNumberForm(true);
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <img src={Illustration} alt="login" />
      </ImageContainer>
      {
        showNumberForm &&
        <NumberForm numFormSuccess={onNumFormFinish} />
      }
      {
        showOtpForm &&
        <OTPContainer>
          <TextContainer>
            <p>OTP has been sent to you on</p>
            <EditNumber>
              <span className="number">{saveNumber.phone_number}</span>
              <span className="edit" onClick={toNumInput}><img src={EditIcon} alt="Edit Phone Number" /></span>
            </EditNumber>
          </TextContainer>
          <OTPForm numOTPSuccess={onOTPFormFinish} phoneNumber={saveNumber.phone_number} resendOtp={resendOtp} />
        </OTPContainer>
      }
      {
        showNameForm &&
        <NameForm numNameSuccess={onNameFormFinish} />
      }
    </LoginContainer>
  );
};

export default LoginPage;

import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase/firebase";
import firebase from "firebase/compat/app";

const SendMailContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #404040;
  width: 40%;
  height: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

  form {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  > form > input {
    height: 30px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid whitesmoke;
    outline: none;
  }

  .sendMail_message {
    flex: 1;
  }

  .sendMail_error {
    background-color: white;
    color: red;
    text-align: right;
    padding: 2px;
  }
`;

const SendMailHeader = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;

  > h3 {
    color: whitesmoke;
    font-size: 13px;
  }

  .sendMail_close {
    cursor: pointer;
  }
`;

const SendMailOptions = styled.div`
  .sendMail_send {
    background-color: #3079ed !important;
    text-transform: capitalize !important;
    margin: 15px !important;
  }
`;

const Sendmail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    dispatch(closeSendMessage());
  };

  return (
    <SendMailContainer>
      <SendMailHeader>
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())} />
      </SendMailHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" type="email" placeholder="To" {...register("to", { required: true })} />
        {errors.to && <p className="sendMail_error">This field is required</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="sendMail_error">This field is required</p>}
        <input
          name="text"
          type="text"
          placeholder="Message..."
          className="sendMail_message"
          {...register("text", { required: true })}
        />
        {errors.text && <p className="sendMail_error">This field is required</p>}
        <SendMailOptions>
          <Button className="sendMail_send" variant="contained" color="primary" type="submit">
            Send
          </Button>
        </SendMailOptions>
      </form>
    </SendMailContainer>
  );
};

export default Sendmail;

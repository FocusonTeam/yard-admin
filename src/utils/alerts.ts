import React from 'react';
import {Store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

interface AlertProps {
  status: String;
  title: String;
  desc?: String;
}

export const alerts = ({
  status,
  title,
  desc
} : AlertProps) => {

  switch(status){
    case "error":
      Store.addNotification({
        title: title,
        message: desc,
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
      break;
    case "success":
      Store.addNotification({
        title: title,
        message: desc,
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
      break;
    case "warning":
      Store.addNotification({
        title: title,
        message: desc,
        type: "warning",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
      break;
    case "info":
      Store.addNotification({
        title: title,
        message: desc,
        type: "info",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
      break;
    default:
      Store.addNotification({
        title: title,
        message: desc,
        type: "default",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
      break;
  }
}

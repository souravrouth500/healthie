import events from "@/json/events/events";
import eventEmitter from "@/services/event.emitter";
import { BaseApiResponse } from "@/typescript/interface/common.interface";
import { AxiosError, AxiosResponse } from "axios";


export function checkWindow() {
    return typeof window !== "undefined"
}

export function isInServer(){
    return typeof document === "undefined"
}

export function isApple(){
    if(typeof navigator === "undefined"){
        return false;
    }
}

export function isAppleSafari() {
    if(typeof navigator === "undefined"){
        return false;
    }
    const rejectedExpression = /Chrome|Android|CriOS|FxiOS|EdgiOS/i;
    const expectedExpression = /Safari/i;
    
    const agent = navigator.userAgent;
    if(rejectedExpression.test(agent)) {
        return false;
    }
    return isApple() && expectedExpression.test(agent);
}

export const globalCatchSuccess = (response: AxiosResponse<BaseApiResponse>) => {
    let message = "Something went wrong";
    if(response?.data?.message) {
        message = response?.data?.message;
    }

    eventEmitter.emit(events.showNotification, {
        message,
        options: { variant: "success" },
    })
};

export const globalCatchWarning = (response: AxiosResponse<BaseApiResponse>) => {
    let message = "Something went wrong";
    if (response?.data?.message) {
      message = response?.data.message;
    }
   
    eventEmitter.emit(events.showNotification, {
      message,
      options: { variant: "warning" },
    });
  };

export const globalCatchError = (error: AxiosError<BaseApiResponse>) => {
    let message = "Something went wrong";
    if (error.response?.data?.message) {
      message = error.response?.data.message;
    }
    eventEmitter.emit(events.showNotification, {
      message,
      options: { variant: "error" },
    });
  };
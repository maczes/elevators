package com.tingco.codechallenge.elevator.service.exceptions;

import lombok.Getter;

public enum ErrorCode {

    NO_FREE_ELEVATOR_AVAILABLE(12);

    private int code;

    private ErrorCode(final int code){
        this.code = code;
    }

}

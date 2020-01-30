package com.tingco.codechallenge.elevator.service.exceptions;

import lombok.Getter;

@Getter
public enum ErrorCode {

    NO_FREE_ELEVATOR_AVAILABLE(12);

    private int code;

    ErrorCode(final int code) {
        this.code = code;
    }

}

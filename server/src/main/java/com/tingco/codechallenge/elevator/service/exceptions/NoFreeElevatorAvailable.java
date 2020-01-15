package com.tingco.codechallenge.elevator.service.exceptions;

import lombok.Getter;

@Getter
public class NoFreeElevatorAvailable extends RuntimeException {

    private static final long serialVersionUID = 501556810463962938L;

    private final ErrorCode errorCode;

    public NoFreeElevatorAvailable(final ErrorCode errorCode) {
        this.errorCode = errorCode;
    }

}

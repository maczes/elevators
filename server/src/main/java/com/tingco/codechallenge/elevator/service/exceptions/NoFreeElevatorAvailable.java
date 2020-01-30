package com.tingco.codechallenge.elevator.service.exceptions;

public class NoFreeElevatorAvailable extends ElevatorServiceException {

    private static final long serialVersionUID = 501556810463962938L;

    public NoFreeElevatorAvailable(final ErrorCode errorCode) {
        super();
        this.setErrorCode(errorCode);
    }

}

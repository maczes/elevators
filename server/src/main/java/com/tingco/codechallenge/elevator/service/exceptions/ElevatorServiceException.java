package com.tingco.codechallenge.elevator.service.exceptions;

import lombok.Getter;
import lombok.Setter;

public abstract class ElevatorServiceException extends RuntimeException {

    private static final long serialVersionUID = -8249101387888634569L;

    @Getter
    @Setter
    private ErrorCode errorCode;

}
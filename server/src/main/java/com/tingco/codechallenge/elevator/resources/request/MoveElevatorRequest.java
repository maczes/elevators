package com.tingco.codechallenge.elevator.resources.request;

import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MoveElevatorRequest {

    @NotNull
    private int elevatorId;
    @NotNull
    private int toFloor;
}

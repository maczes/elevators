package com.tingco.codechallenge.elevator.resources.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MoveElevatorRequest {

    private int elevatorId;
    private int toFloor;
}

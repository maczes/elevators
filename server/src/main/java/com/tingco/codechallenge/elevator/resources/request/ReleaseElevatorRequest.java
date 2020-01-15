package com.tingco.codechallenge.elevator.resources.request;

import com.tingco.codechallenge.elevator.controller.api.Elevator;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReleaseElevatorRequest {

    //private Elevator elevator;
    private int elevatorId;
}

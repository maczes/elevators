package com.tingco.codechallenge.elevator.resources.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class GetElevatorRequest {

    private int targetFloor;
    private int sourceFloor;
}

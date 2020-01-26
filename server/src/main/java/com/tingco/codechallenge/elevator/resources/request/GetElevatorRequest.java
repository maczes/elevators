package com.tingco.codechallenge.elevator.resources.request;

import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GetElevatorRequest {

    @NotNull
    private int toFloor;
}

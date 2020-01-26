package com.tingco.codechallenge.elevator.resources.request;

import javax.validation.constraints.NotNull;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReleaseElevatorRequest {

    @NotNull
    private int elevatorId;
}

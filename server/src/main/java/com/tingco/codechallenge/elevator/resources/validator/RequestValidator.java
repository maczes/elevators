package com.tingco.codechallenge.elevator.resources.validator;

import com.google.common.base.Preconditions;
import com.tingco.codechallenge.elevator.config.ElevatorProperties;
import com.tingco.codechallenge.elevator.resources.request.GetElevatorRequest;
import com.tingco.codechallenge.elevator.resources.request.MoveElevatorRequest;
import com.tingco.codechallenge.elevator.resources.request.ReleaseElevatorRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestValidator {

    private final ElevatorProperties elevatorProperties;

    @Autowired
    public RequestValidator(final ElevatorProperties elevatorProperties) {

        this.elevatorProperties = elevatorProperties;
    }

    public final void validate(final MoveElevatorRequest moveElevatorRequest) {

        checkFloor(moveElevatorRequest.getToFloor());
        checkElevator(moveElevatorRequest.getElevatorId());
    }

    public final void validate(final ReleaseElevatorRequest releaseElevatorRequest) {

        checkElevator(releaseElevatorRequest.getElevatorId());
    }

    public final void validate(final GetElevatorRequest getElevatorRequest) {

        checkFloor(getElevatorRequest.getToFloor());
    }

    private void checkFloor(final int floorNum) {
        int maxFloorNum = this.elevatorProperties.getNumberOfFloors();

        Preconditions.checkArgument(floorNum >= 0, "Floor number can't be < 0. Current value: %s", floorNum);
        Preconditions.checkArgument(floorNum <= maxFloorNum,
                "Floor number can't be bigger than max floor number: %s. Current value: %s", maxFloorNum, floorNum);
    }

    private void checkElevator(final int elevatorId) {
        int maxElevatorNum = this.elevatorProperties.getNumberOfElevators();

        Preconditions.checkArgument(elevatorId >= 0, "Elevator Id can't be < 0. Current value: %s", elevatorId);
        Preconditions.checkArgument(elevatorId <= maxElevatorNum,
                "Elevator Id can't be bigger than total number of elevators: %s. Current value: %s", maxElevatorNum,
                elevatorId);
    }
}
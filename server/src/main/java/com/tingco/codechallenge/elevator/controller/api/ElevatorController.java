package com.tingco.codechallenge.elevator.controller.api;

import java.util.List;

/**
 * Interface for the Elevator Controller.
 *
 */
public interface ElevatorController {

    /**
     * Request an elevator to the specified floor.
     *
     * @param toFloor addressed floor as integer.
     * @return The Elevator that is going to the floor, if there is one to move.
     */
    Elevator requestElevator(int toFloor);

    /**
     * A snapshot list of all elevators in the system.
     *
     * @return A List with all {@link Elevator} objects.
     */
    List<Elevator> getElevators();

    /**
     * Telling the controller that the given elevator is free for new operations.
     *
     * @param elevatorId the elevator that shall be released.
     */
    void releaseElevator(int elevatorId);

    /**
     * Command to move the elevator to the given floor.
     *
     * @param toFloor int where to go.
     * @param elevatorId which one elevator to move.
     */
    void moveElevator(int toFloor, int elevatorId);

}

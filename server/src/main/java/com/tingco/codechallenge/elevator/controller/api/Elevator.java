package com.tingco.codechallenge.elevator.controller.api;

/**
 * Interface for an elevator object.
 *
 * NOTE: This ifce has been modified a little bit:
 *  1. setters were added
 *  2. moveElevator was moved into controller
 *
 */

public interface Elevator {
    /**
     * Enumeration for describing elevator's direction.
     */
    enum Direction {
        UP, DOWN, NONE
    }

    /**
     * Tells which direction is the elevator going in.
     *
     * @return Direction Enumeration value describing the direction.
     */
    Direction getDirection();
    void setDirection(Direction direction);

    /**
     * If the elevator is moving. This is the target floor.
     *
     * @return primitive integer number of floor
     */
    int getAddressedFloor();
    void setAddressedFloor(int addressedFloor);

    /**
     * Get the Id of this elevator.
     *
     * @return primitive integer representing the elevator.
     */
    int getId();

    // /**
    //  * Command to move the elevator to the given floor.
    //  *
    //  * @param toFloor int where to go.
    //  */
    // void moveElevator(int toFloor);
    // NOTE(ms): commenting this out since this is going to be moved into controller

    /**
     * Check if the elevator is occupied at the moment.
     *
     * @return true if busy.
     */
    boolean isBusy();
    
    void setBusy(boolean busy);

    /**
     * Reports which floor the elevator is at right now.
     *
     * @return int actual floor at the moment.
     */
    int getCurrentFloor();

    void setCurrentFloor(int currentFloor);

}

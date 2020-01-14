package com.tingco.codechallenge.elevator.model;

import com.tingco.codechallenge.elevator.api.Elevator;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ElevatorImpl implements Elevator {

    private Direction direction;
    private int addressedFloor;
    private int id;
    private boolean busy;
    private int currentFloor;
}
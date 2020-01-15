package com.tingco.codechallenge.elevator.model;

import com.tingco.codechallenge.elevator.controller.api.Elevator;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class ElevatorImpl implements Elevator {

    private Direction direction;
    private int addressedFloor;
    private int id;
    private boolean busy;
    private int currentFloor;

}
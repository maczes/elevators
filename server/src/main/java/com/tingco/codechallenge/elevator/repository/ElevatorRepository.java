package com.tingco.codechallenge.elevator.repository;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import com.tingco.codechallenge.elevator.config.ElevatorProperties;
import com.tingco.codechallenge.elevator.controller.api.Elevator;
import com.tingco.codechallenge.elevator.controller.api.Elevator.Direction;
import com.tingco.codechallenge.elevator.model.ElevatorImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ElevatorRepository {

    private static final int GROUND_FLOOR_OFFSET = 1;

    private List<Elevator> elevators = new ArrayList<Elevator>();

    @Autowired
    private ElevatorProperties elevatorProperties;

    @PostConstruct
    private void init() {

        for (int i = 0; i <= elevatorProperties.getNumberOfElevators() - GROUND_FLOOR_OFFSET; i++) {
            elevators.add(ElevatorImpl.builder()
                .id(i)
                .addressedFloor(0)
                .busy(false)
                .currentFloor(0)
                .direction(Direction.NONE)
                .build());
        }
    }

    public Elevator getElevator(final int id) {

        return elevators.get(id);
    }

    public List<Elevator> getElevators() {

        return elevators;
    }

	public void updateElevator(Elevator elevator) {
        
        elevators.set(elevator.getId(), elevator);
    }
}
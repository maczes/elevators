package com.tingco.codechallenge.elevator.repository;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import com.tingco.codechallenge.elevator.api.Elevator;
import com.tingco.codechallenge.elevator.config.ElevatorProperties;
import com.tingco.codechallenge.elevator.model.ElevatorImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ElevatorRepository {

    private List<Elevator> elevators = new ArrayList<Elevator>();

    @Autowired
    private ElevatorProperties elevatorProperties;

    @PostConstruct
    private void init() {
        for (int i = 0; i <= elevatorProperties.getNumberOfElevators(); i++) {
            elevators.add(ElevatorImpl.builder().addressedFloor(0).busy(false).currentFloor(0).id(i).build());
        }
    }

    public Elevator getElevator(final int id) {
        return elevators.get(id);
    }

}
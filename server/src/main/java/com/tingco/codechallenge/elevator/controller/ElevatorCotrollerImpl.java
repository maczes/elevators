package com.tingco.codechallenge.elevator.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import com.tingco.codechallenge.elevator.api.Elevator;
import com.tingco.codechallenge.elevator.api.ElevatorController;

import org.springframework.stereotype.Controller;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class ElevatorCotrollerImpl implements ElevatorController {

    @PostConstruct
    private void prepare() {
        log.info("preparing elevators ....");
    }

    /**
     * @param toFloor Target floor number where elevator will be requested to go to
     * 
     * @return Elevator that can be used by user
     */
    @Override
    public Elevator requestElevator(final int toFloor) {
        // TODO Auto-generated method stub
        return null;
    }

    /**
     * @return List of all elevators created in example
     */
    @Override
    public List<Elevator> getElevators() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void releaseElevator(final Elevator elevator) {
        // TODO Auto-generated method stub
    }

    @Override
    public void moveElevator(final int toFloor) {
        // TODO Auto-generated method stub
        // 1. set it busy
    }

}
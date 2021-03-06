package com.tingco.codechallenge.elevator.controller;

import java.util.List;

import com.tingco.codechallenge.elevator.controller.api.Elevator;
import com.tingco.codechallenge.elevator.controller.api.ElevatorController;
import com.tingco.codechallenge.elevator.repository.ElevatorRepository;
import com.tingco.codechallenge.elevator.service.ElevatorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class ElevatorCotrollerImpl implements ElevatorController {

    @Autowired
    private ElevatorRepository elevatorRepository;

    @Autowired
    private ElevatorService elevatorService;

    /**
     * @param toFloor Target floor number where elevator will be requested to go to
     * 
     * @return Elevator that can be used by user
     */
    @Override
    public Elevator requestElevator(final int toFloor) {

        return elevatorService.getClosestFreeOne(toFloor);
    }

    /**
     * @return List of all elevators created in example
     */
    @Override
    public List<Elevator> getElevators() {
        log.debug("getting all elevators");

        return elevatorRepository.getElevators();
    }

    /**
     * Make a final elevator release on the activity end
     */
    @Override
    public void releaseElevator(final int elevatorId) {
        log.debug("releasing {}", elevatorId);

        Elevator elevator = elevatorRepository.getElevator(elevatorId);
        elevator.setCurrentFloor(elevator.getAddressedFloor());
        elevator.setBusy(false);
        elevator.setDirection(Elevator.Direction.NONE);

        elevatorRepository.updateElevator(elevator);
    }

    /**
     * Method moves elevator from start to desired floor
     */
    @Override
    public void moveElevator(final int toFloor, final int elevatorId) {
        log.debug("moving {} to {}", elevatorId, toFloor);

        Elevator elevator = elevatorRepository.getElevator(elevatorId);
        elevator.setAddressedFloor(toFloor);
        elevator.setBusy(true);
        elevator.setDirection(calculateDirection(toFloor, elevator.getCurrentFloor()));

        elevatorRepository.updateElevator(elevator);
    }

    private Elevator.Direction calculateDirection(final int toFloor, final int fromFloor) {
        return toFloor > fromFloor ? Elevator.Direction.UP : Elevator.Direction.DOWN;
    }

}
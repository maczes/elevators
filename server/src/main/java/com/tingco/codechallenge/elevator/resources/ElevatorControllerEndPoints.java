package com.tingco.codechallenge.elevator.resources;

import java.util.List;

import com.tingco.codechallenge.elevator.controller.api.Elevator;
import com.tingco.codechallenge.elevator.controller.api.ElevatorController;
import com.tingco.codechallenge.elevator.resources.request.GetElevatorRequest;
import com.tingco.codechallenge.elevator.resources.request.MoveElevatorRequest;
import com.tingco.codechallenge.elevator.resources.request.ReleaseElevatorRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

/**
 * Rest Resource.
 * 
 */
@RestController
@RequestMapping("/elevator/api/v1")
@Slf4j
public final class ElevatorControllerEndPoints {

    private ElevatorController elevatorController;

    // @Autowired
    // private Tour tourTask;

    @Autowired
    ElevatorControllerEndPoints(final ElevatorController elevatorController) {
        log.info("initializing REST controller");
        this.elevatorController = elevatorController;
    }

    /**
     * Ping service to test if we are alive.
     *
     * @return String pong
     */
    @RequestMapping(value = "/ping", method = RequestMethod.GET)
    public ResponseEntity<String> ping() {

        return ResponseEntity.ok().body("pong");
    }

    /**
     * Request elevator endpoint
     * 
     * @param getElevatorRequest supplies elevators request data into endpoint
     * 
     * @return Elevator user can travel in
     */
    @RequestMapping(value = "/request", method = RequestMethod.PUT)
    public ResponseEntity<Elevator> requestElevator(@RequestBody final GetElevatorRequest getElevatorRequest) {
        log.debug("elevator rquested {}", getElevatorRequest);

        Elevator elevator = elevatorController.requestElevator(getElevatorRequest.getToFloor());

        return ResponseEntity.ok().body(elevator);
    }

    /**
     * Move elevator endpoint - moves given elevator to floor
     * 
     * @param moveElevatorRequest request having move data
     * 
     * @return Elevator user can travel in
     */
    @RequestMapping(value = "/move", method = RequestMethod.GET)
    public ResponseEntity<Void> moveElevator(@RequestBody final MoveElevatorRequest moveElevatorRequest) {
        log.debug("elevator move rquested {}", moveElevatorRequest);

        elevatorController.moveElevator(moveElevatorRequest.getToFloor(), moveElevatorRequest.getElevatorId());

        return ResponseEntity.ok().build();
    }

    /**
     * Release elevator endpoint
     * 
     * @param releaseElevatorRequest release elevator request
     * 
     * @return Elevator user can travel in
     */
    @RequestMapping(value = "/release", method = RequestMethod.GET)
    public ResponseEntity<Void> releaseElevator(@RequestBody final ReleaseElevatorRequest releaseElevatorRequest) {
        log.debug("elevator release rquested {}", releaseElevatorRequest);

        elevatorController.releaseElevator(releaseElevatorRequest.getElevatorId());

        return ResponseEntity.ok().build();
    }

    /**
     * List all elevators
     * 
     * @return List of all elevators
     */
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Elevator> listElevators() {
        log.debug("elevators list requested");

        return elevatorController.getElevators();
    }

}

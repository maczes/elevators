package com.tingco.codechallenge.elevator.resources;

import java.util.List;

import javax.validation.Valid;

import com.tingco.codechallenge.elevator.controller.api.Elevator;
import com.tingco.codechallenge.elevator.controller.api.ElevatorController;
import com.tingco.codechallenge.elevator.resources.request.GetElevatorRequest;
import com.tingco.codechallenge.elevator.resources.request.MoveElevatorRequest;
import com.tingco.codechallenge.elevator.resources.request.ReleaseElevatorRequest;
import com.tingco.codechallenge.elevator.resources.validator.RequestValidator;

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

    private final ElevatorController elevatorController;
    private final RequestValidator requestValidator;

    @Autowired
    ElevatorControllerEndPoints(final ElevatorController elevatorController, final RequestValidator requestValidator) {

        log.info("initializing REST controller");

        this.elevatorController = elevatorController;
        this.requestValidator = requestValidator;
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
    public ResponseEntity<Elevator> requestElevator(@Valid @RequestBody final GetElevatorRequest getElevatorRequest) {
        log.debug("elevator rquested {}", getElevatorRequest);

        requestValidator.validate(getElevatorRequest);
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
    @RequestMapping(value = "/move", method = RequestMethod.PUT)
    public ResponseEntity<Void> moveElevator(@Valid @RequestBody final MoveElevatorRequest moveElevatorRequest) {
        log.debug("elevator move rquested {}", moveElevatorRequest);

        requestValidator.validate(moveElevatorRequest);
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
    @RequestMapping(value = "/release", method = RequestMethod.PUT)
    public ResponseEntity<Void> releaseElevator(
            @Valid @RequestBody final ReleaseElevatorRequest releaseElevatorRequest) {
        log.debug("elevator release rquested {}", releaseElevatorRequest);

        requestValidator.validate(releaseElevatorRequest);
        elevatorController.releaseElevator(releaseElevatorRequest.getElevatorId());

        return ResponseEntity.ok().build();
    }

    /**
     * List all elevators
     * 
     * @return List of all elevators
     */
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public ResponseEntity<List<Elevator>> listElevators() {
        log.debug("elevators list requested");

        return ResponseEntity.ok().body(elevatorController.getElevators());
    }

}

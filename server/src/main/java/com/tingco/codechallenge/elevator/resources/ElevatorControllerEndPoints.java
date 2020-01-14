package com.tingco.codechallenge.elevator.resources;

import java.util.List;

import com.tingco.codechallenge.elevator.api.Elevator;
import com.tingco.codechallenge.elevator.api.ElevatorController;
import com.tingco.codechallenge.elevator.resources.request.GetElevatorRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

/**
 * Rest Resource.
 *
 * @author Sven Wesley
 *
 */
@RestController
@RequestMapping("/elevator/api/v1")
@Slf4j
public final class ElevatorControllerEndPoints {

    private ElevatorController elevatorController;

    // @Autowired
    // private Executor taskExecutor;

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
    public String ping() {
        // log.info("elo in ping {}", taskExecutor.hashCode());
        // taskExecutor.execute(tourTask);
        
        return "pong";
    }

    /**
     * Request elevator endpoint
     * 
     * @param getElevatorRequest supplies elevators request data into endpoint
     * 
     * @return Elevator user can travel in
     */
    @RequestMapping(value = "/request", method = RequestMethod.GET)
    public Elevator requestElevator(@RequestBody final GetElevatorRequest getElevatorRequest) {
        log.debug("elevator rquested {}", getElevatorRequest);

        return elevatorController.requestElevator(getElevatorRequest.getTargetFloor());
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

package com.tingco.codechallenge.elevator.resources;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit.jupiter.SpringExtension;


import com.tingco.codechallenge.elevator.config.ElevatorApplication;

/**
 * Boiler plate test class to get up and running with a test faster.
 *
 * @author Sven Wesley
 *
 */
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = ElevatorApplication.class, webEnvironment = WebEnvironment.RANDOM_PORT)
public class ElevatorControllerEndPointsTest {

    @Autowired
    private ElevatorControllerEndPoints endPoints;
    
    @Test
    public void ping() {
        String expected = "ping";
        
        Assertions.assertNotEquals(expected, endPoints.ping());
    }

    @Test
    public void pong() {
        String expected = "pong";
        Assertions.assertEquals(expected, endPoints.ping());
    }

}

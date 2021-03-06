package com.tingco.codechallenge.elevator;

import com.tingco.codechallenge.elevator.config.ElevatorApplication;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import lombok.extern.slf4j.Slf4j;

/**
 * Boiler plate test class to get up and running with a test faster.
 *
 * @author Sven Wesley
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = ElevatorApplication.class)
@Slf4j
public class IntegrationTest {
    
    @Test
    public void simulateAnElevatorShaft() {
        log.info("running my first Visual Studio Code test ....");
    }

}

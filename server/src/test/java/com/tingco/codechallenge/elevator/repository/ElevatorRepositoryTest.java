package com.tingco.codechallenge.elevator.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.tingco.codechallenge.elevator.config.ElevatorApplication;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = ElevatorApplication.class)
public class ElevatorRepositoryTest {

@Autowired
ElevatorRepository elevatorRepository;

    @Test
    public void checkInitialization() {
        assertEquals(2, elevatorRepository.getElevator(2).getId());
    }

}
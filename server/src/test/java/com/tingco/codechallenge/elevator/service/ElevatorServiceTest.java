package com.tingco.codechallenge.elevator.service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

import com.google.common.collect.Lists;
import com.tingco.codechallenge.elevator.controller.api.Elevator;
import com.tingco.codechallenge.elevator.controller.api.Elevator.Direction;
import com.tingco.codechallenge.elevator.model.ElevatorImpl;
import com.tingco.codechallenge.elevator.repository.ElevatorRepository;
import com.tingco.codechallenge.elevator.service.exceptions.NoFreeElevatorAvailable;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class ElevatorServiceTest {

    private ElevatorService elevatorService;

    @Mock
    private ElevatorRepository elevatorRepositoryMock;

    @Test
    public void shouldThrowException_whenNoElevatorAvailable() {
        elevatorService = new ElevatorService(elevatorRepositoryMock);

        when(elevatorRepositoryMock.getElevators()).thenReturn(buildElevatorList_NoFreeAvailable());

        Assertions.assertThrows(NoFreeElevatorAvailable.class, () -> {
            elevatorService.getClosestFreeOne(1);
        });
    }

    @Test
    public void shouldReturnElevator_whenFreeElevatorAvailableOnTheSameFloor() {
        int requestedFloor = 1;
        elevatorService = new ElevatorService(elevatorRepositoryMock);

        when(elevatorRepositoryMock.getElevators()).thenReturn(buildElevatorList_AllFreeAvailable());

        Elevator closestFreeOne = elevatorService.getClosestFreeOne(requestedFloor);

        assertNotNull(closestFreeOne); 
        assertThat(closestFreeOne.getCurrentFloor()).isEqualTo(requestedFloor);
    }

    @Test
    public void shouldReturnElevator_whenFreeElevatorAvailableOnTheOtherFloor() {
        int requestedFloor = 2;
        int expectedElevatorId = 1;
        
        elevatorService = new ElevatorService(elevatorRepositoryMock);

        Elevator e1 = ElevatorImpl.builder()
            .id(0)
            .addressedFloor(-1)
            .busy(false)
            .currentFloor(4)
            .direction(Direction.NONE) 
            .build();
    
        Elevator e2 = ElevatorImpl.builder()
            .id(1)
            .addressedFloor(-1)
            .busy(false)
            .currentFloor(3)
            .direction(Direction.NONE) 
            .build();

        Elevator e3 = ElevatorImpl.builder()
            .id(2)
            .addressedFloor(-1)
            .busy(false)
            .currentFloor(0)
            .direction(Direction.NONE) 
            .build();

        when(elevatorRepositoryMock.getElevators()).thenReturn(Lists.newArrayList(e1, e2, e3));

        Elevator closestFreeOne = elevatorService.getClosestFreeOne(requestedFloor);

        assertThat(closestFreeOne.getId()).isEqualTo(expectedElevatorId);
    }

    private List<Elevator> buildElevatorList_AllFreeAvailable() {
        Elevator e1 = ElevatorImpl.builder()
            .id(0)
            .addressedFloor(-1)
            .busy(false)
            .currentFloor(2)
            .direction(Direction.NONE) 
            .build();
        
        Elevator e2 = ElevatorImpl.builder()
            .id(1)
            .addressedFloor(-1)
            .busy(false)
            .currentFloor(3)
            .direction(Direction.NONE) 
            .build();

        Elevator e3 = ElevatorImpl.builder()
            .id(2)
            .addressedFloor(-1)
            .busy(false)
            .currentFloor(1)
            .direction(Direction.NONE) 
            .build();

        ArrayList<Elevator> elevatorList = Lists.newArrayList(e1, e2, e3);

        return elevatorList;
    }

    private List<Elevator> buildElevatorList_NoFreeAvailable() {
        Elevator e1 = ElevatorImpl.builder()
            .addressedFloor(1)
            .busy(true)
            .currentFloor(2)
            .direction(Direction.DOWN) 
            .build();
        
        Elevator e2 = ElevatorImpl.builder()
            .addressedFloor(3)
            .busy(true)
            .currentFloor(2)
            .direction(Direction.DOWN) 
            .build();

        Elevator e3 = ElevatorImpl.builder()
            .addressedFloor(0)
            .busy(true)
            .currentFloor(1)
            .direction(Direction.DOWN) 
            .build();

        ArrayList<Elevator> elevatorList = Lists.newArrayList(e1, e2, e3);

        return elevatorList;
    }

}
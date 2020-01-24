package com.tingco.codechallenge.elevator.service;

import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import com.tingco.codechallenge.elevator.controller.api.Elevator;
import com.tingco.codechallenge.elevator.repository.ElevatorRepository;
import com.tingco.codechallenge.elevator.service.exceptions.ErrorCode;
import com.tingco.codechallenge.elevator.service.exceptions.NoFreeElevatorAvailable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ElevatorService {

    private ElevatorRepository elevatorRepository;

    @Autowired
    public ElevatorService(final ElevatorRepository elevatorRepository) {
        this.elevatorRepository = elevatorRepository;
    }

    public Elevator getClosestFreeOne(final int toFloor) {
        final var elevatorList = elevatorRepository.getElevators();

        List<Elevator> freeElevators = EmployeePredicates.filterElevators(elevatorList,
                EmployeePredicates.isNotOccupied());

        if (freeElevators.isEmpty()) {
            throw new NoFreeElevatorAvailable(ErrorCode.NO_FREE_ELEVATOR_AVAILABLE);
        } else {
            Elevator elevator = calculateClosestOne(toFloor, elevatorList);
            log.debug("calculated nearest elevator id:{}", elevator.getId());
            return elevator;
        }
    }

    private Elevator calculateClosestOne(final int toFloor, final List<Elevator> elevatorList) {
        return elevatorList.stream().min((x, y) -> {
            int result = Math.abs(x.getCurrentFloor() - toFloor) - Math.abs(y.getCurrentFloor() - toFloor);
            return result;
        }).get();
    }

    Comparator<Integer> comparator = new Comparator<Integer>() {

        public int compare(Integer s1, Integer s2) {
            return s1 - s2;
        }
    };

    static class EmployeePredicates {
        public static Predicate<Elevator> isNotOccupied() {
            return elevator -> !elevator.isBusy();
        }

        public static List<Elevator> filterElevators(List<Elevator> elevators, Predicate<Elevator> predicate) {
            return elevators.stream().filter(predicate).collect(Collectors.<Elevator>toList());
        }
    }

}
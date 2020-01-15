package com.tingco.codechallenge.elevator.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

import lombok.Getter;

@Configuration
@PropertySources({ @PropertySource("classpath:application.properties") })
@Getter
public class ElevatorProperties {
    
    @Value("${elevator.number.of.elevators}")
    private int numberOfElevators;
        
    @Value("${elevator.number.of.floors}")
    private int numberOfFloors;
}
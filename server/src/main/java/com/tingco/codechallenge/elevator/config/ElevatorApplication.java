package com.tingco.codechallenge.elevator.config;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import com.google.common.eventbus.AsyncEventBus;
import com.google.common.eventbus.EventBus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

/**
 * Preconfigured Spring Application boot class.
 *
 */
@ComponentScan(basePackages = { "com.tingco.codechallenge.elevator" })
@SpringBootApplication
public class ElevatorApplication {

    @Autowired
    private ElevatorProperties elevatorProperties;

    /**
     * Start method that will be invoked when starting the Spring context.
     *
     * @param args
     *            Not in use
     */
    public static void main(final String[] args) {
        SpringApplication.run(ElevatorApplication.class, args);
    }

    /**
     * Create a default thread pool for your convenience.
     *
     * @return Executor thread pool
     */
    @Bean(destroyMethod = "shutdown")
    public Executor taskExecutor() {
        return Executors.newScheduledThreadPool(elevatorProperties.getNumberOfElevators());
    }

    /**
     * Create an event bus for your convenience.
     *
     * @return EventBus for async task execution
     */
    @Bean
    public EventBus eventBus() {
        return new AsyncEventBus(Executors.newCachedThreadPool());
    }

}

package com.tingco.codechallenge.elevator.service;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Scope("prototype")
@Slf4j
public class Tour implements Runnable {
    
    @Override
    public void run() {
        log.info("Called from thread");
    }
}
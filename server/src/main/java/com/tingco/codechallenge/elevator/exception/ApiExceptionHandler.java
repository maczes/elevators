package com.tingco.codechallenge.elevator.exception;

import java.util.ArrayList;
import java.util.List;

import com.google.common.collect.Lists;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class ApiExceptionHandler {

    // ErrorResponse error = new ErrorResponse("Bad Request", details);
    // return new ResponseEntity(error, HttpStatus.BAD_REQUEST);

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) {
        List<String> details = Lists.newArrayList();
        details.add(ex.getLocalizedMessage());

        ErrorResponse error = new ErrorResponse("Server Error", details);
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
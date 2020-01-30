package com.tingco.codechallenge.elevator.exception;

import java.util.List;

import com.google.common.collect.Lists;
import com.tingco.codechallenge.elevator.service.exceptions.ElevatorServiceException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import lombok.extern.slf4j.Slf4j;

@ControllerAdvice
@Slf4j
public class ApiExceptionHandler {
    /**
     * Process all backend unexpected exceptions
     * 
     * @param ex      General exception
     * @param request Request causing the issue
     * @return Error response
     */
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> handleAllUnhandledExceptions(final Exception ex, final WebRequest request) {
        log.debug("Uncaught exception catched, for  {}", request.getContextPath());

        List<String> details = Lists.newArrayList();
        details.add(ex.getLocalizedMessage());

        ErrorResponse error = new ErrorResponse("Server Error", details);
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Handler exception in case wrong request body parameters were sent to the
     * endpoints
     * 
     * @param ex      IllegalArgumentException
     * @param request Request causing the issue
     * @return Error response
     */
    @ExceptionHandler(IllegalArgumentException.class)
    public final ResponseEntity<Object> handleInvalidParamsExceptions(final IllegalArgumentException ex,
            final WebRequest request) {
        log.debug("IllegalArgumentException exception catched, for  {}", request.getContextPath());

        List<String> details = Lists.newArrayList();
        details.add(ex.getLocalizedMessage());

        ErrorResponse error = new ErrorResponse("Invalid request parameters provided", details);
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    /**
     * Handler exception in case wrong request body parameters were sent to the
     * endpoints
     * 
     * @param ex      ElevatorServiceException
     * @param request Request causing the issue
     * @return Error response
     */
    @ExceptionHandler(ElevatorServiceException.class)
    public final ResponseEntity<Object> handleElevatorServiceExceptions(final ElevatorServiceException ex,
            final WebRequest request) {
        log.debug("ElevatorServiceException exception catched, for  {}", request.getContextPath());

        List<String> details = Lists.newArrayList();

        details.add(ex.getLocalizedMessage());
        details.add(String.format("ERR_CODE", ex.getErrorCode()));

        ErrorResponse error = new ErrorResponse("Invalid request parameters provided", details);
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
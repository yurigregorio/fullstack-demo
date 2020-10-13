package br.com.brq.apicurso.handler;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.com.brq.apicurso.exceptions.ObjectNotFoundException;

//manipulador de exceções

@ControllerAdvice
public class ResourceExceptionHandler {

		@ExceptionHandler (ObjectNotFoundException.class)
		public ResponseEntity<BasicErrorModel> objectNotFoundExceptionHandler(ObjectNotFoundException e, HttpServletRequest http ) {
			BasicErrorModel error = BasicErrorModel
									.builder()
									.status(HttpStatus.NOT_FOUND.value())
									.message(e.getMessage())
									.path(http.getRequestURI().toString())
									.timestamp(new Date())
									.build();
			
		return ResponseEntity.ok().body(error);
		}
}

package br.com.brq.apicurso.handler;

import java.util.Date;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BasicErrorModel {
	private int status;
	private String message;
	private String path;
	private Date timestamp;
}

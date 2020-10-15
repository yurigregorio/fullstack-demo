
package br.com.brq.apicurso.camel;

import java.util.Date;

import lombok.Data;

@Data
public class UfCovidModel {

	private int uid;
	private String uf;
	private String state;
	private int cases;		
	private int deaths;
	private int suspects;
	private int refuses;
	private Date datetime;
}


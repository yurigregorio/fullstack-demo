package br.com.brq.apicurso.dto;

import lombok.Data;

@Data
public class EnderecoDto {

	private int id;

	private String logradouro;
	private String numero;
	private String bairro;
	private String cep;
	private String estado;
	private String cidade;

	private int usuario;
}
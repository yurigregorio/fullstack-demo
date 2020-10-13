package br.com.brq.apicurso.dto;

import br.com.brq.apicurso.model.Endereco;
import br.com.brq.apicurso.model.Usuario;
import lombok.Data;

@Data
public class UsuarioDto {

	private int id;
	private String nome;
	private String email;	
	private Endereco endereco;

	public UsuarioDto ( Usuario usuario ) {
		this.id = usuario.getId();
		this.nome = usuario.getNome();
		this.email = usuario.getEmail();
		this.endereco = usuario.getEndereco();
	}
}
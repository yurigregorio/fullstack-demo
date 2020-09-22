package br.com.brq.apicurso.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Aluno {

	@Id	
	private int id;
	
	private String nome;
	private String ra;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getRa() {
		return ra;
	}
	public void setRa(String ra) {
		this.ra = ra;
	}
	@Override
	public String toString() {
		return "Aluno [id=" + id + ", nome=" + nome + ", ra=" + ra + "]";
	}
		
}

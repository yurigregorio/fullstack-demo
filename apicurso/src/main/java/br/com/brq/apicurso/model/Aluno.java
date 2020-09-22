package br.com.brq.apicurso.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;


@Entity
public class Aluno {
	
	//MySQL e Oracle 18
	//@GeneratedValue ( strategy = GenerationType.IDENTITY)

	@Id	
	@GeneratedValue ( strategy = GenerationType.SEQUENCE, generator = "aluno_seq_id" )
	@SequenceGenerator ( name = "aluno_seq_id", sequenceName = "aluno_seq_id", allocationSize = 1)	
	private int id;
	
	private String nome;
	private String ra;
	private String curso;
	
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
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	@Override
	public String toString() {
		return "Aluno [id=" + id + ", nome=" + nome + ", ra=" + ra + ", curso=" + curso +  "]";
	}
	
}

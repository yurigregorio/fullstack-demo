package br.com.brq.apicurso.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer> {

	//Tem todos os métodos para fazermos um CRUD
	//SELECT * FROM Aluno where nome = 
	public List<Aluno> findByNome(String nome);
	
	//SELECT * FROM Aluno where nome like %nome%
	public List<Aluno> findByNomeContains(String nome);
		
	//SELECT * FROM Aluno where nome like %nome% and ra like %ra%
	public List<Aluno> findByNomeStartingWithAndRaContains(String nome, String ra);
	
}



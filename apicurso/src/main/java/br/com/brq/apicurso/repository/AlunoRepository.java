package br.com.brq.apicurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer> {

	//Tem todos os métodos para fazermos um CRUD
	
}



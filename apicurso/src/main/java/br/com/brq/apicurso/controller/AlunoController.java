package br.com.brq.apicurso.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Aluno;

@RestController
public class AlunoController {
	
	private ArrayList<Aluno> alunos = new ArrayList<>();

	//pegar todos os alunos
	//Pegar um aluno
	//Criar um aluno
	//Alterar um Aluno
	// bônus - deletar um aluno
	
	@GetMapping ( value="alunos")
	public ArrayList<Aluno> getAll() {
		return this.alunos;
	}
	
	@GetMapping ( value="alunos/{id}")
	public Aluno getOne( @PathVariable int id ) {
		return this.alunos.get(id);
	}
	
	@PostMapping ( value="alunos")
	public Aluno create(@RequestBody Aluno aluno) {
		
		this.alunos.add(aluno);
		
		return aluno;
	}
	
	@PatchMapping (value = "alunos/{id}")
	public Aluno update(@RequestBody Aluno aluno, @PathVariable int id) {
		
		this.alunos.set(id, aluno);
		
		return aluno;
	}
	
	@DeleteMapping (value = "alunos/{id}")
	public void delete(@PathVariable int id) {
		this.alunos.remove(id);
	}
}

package br.com.brq.apicurso.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Aluno;
import br.com.brq.apicurso.service.AlunoService;

@RestController
public class AlunoController {
	
	/* 
	 * Injeção de dependência - instancia o objeto automaticamente
	 * 
	 * */
	@Autowired
	private AlunoService alunoService ;
	//private AlunoService alunoService = new AlunoService();
	
	private ArrayList<Aluno> alunos = new ArrayList<>();

	//pegar todos os alunos
	//Pegar um aluno
	//Criar um aluno
	//Alterar um Aluno
	// bônus - deletar um aluno
	
	@GetMapping ( value="alunos")
	public List<Aluno> getAll() {
		return this.alunoService.findAll();
	}
	
	@GetMapping ( value="alunos/{id}")
	public Aluno getOne( @PathVariable int id ) {
		return this.alunoService.getOne(id);
	}
	
	@PostMapping ( value="alunos")
	public Aluno create(@RequestBody Aluno aluno) {
		
		return this.alunoService.save(aluno);			
	}
	
	@PatchMapping (value = "alunos/{id}")
	public Aluno update(@RequestBody Aluno aluno, @PathVariable int id) {
		
		return this.alunoService.update(id, aluno);				
	}
	
	@DeleteMapping (value = "alunos/{id}")
	public void delete(@PathVariable int id) {
		this.alunoService.delete(id);
	}
}

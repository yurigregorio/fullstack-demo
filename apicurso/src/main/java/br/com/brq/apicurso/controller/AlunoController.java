package br.com.brq.apicurso.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Aluno;
import br.com.brq.apicurso.model.Imagem;
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
	
	//pegar todos os alunos
	//Pegar um aluno
	//Criar um aluno
	//Alterar um Aluno
	// bônus - deletar um aluno
	
	@GetMapping ( value="alunos")
	public ResponseEntity <List<Aluno>> getAll() {
		List<Aluno> list = this.alunoService.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping ( value="alunos/{id}")
	public ResponseEntity<Aluno> getOne( @PathVariable int id ) {
		Aluno aluno = this.alunoService.getOne(id);
		return ResponseEntity.ok().body(aluno);
	}
	
	@PostMapping ( value="alunos")
	public ResponseEntity<Aluno> create(@RequestBody Aluno alun) {
		Aluno aluno = this.alunoService.save(alun);
		return ResponseEntity.ok().body(aluno);			
	}
	
	@PatchMapping (value = "alunos/{id}")
	public Aluno update(@RequestBody Aluno aluno, @PathVariable int id) {
		
		return this.alunoService.update(id, aluno);				
	}
	
	@DeleteMapping (value = "alunos/{id}")
	public void delete(@PathVariable int id) {
		this.alunoService.delete(id);
	}
	
	@GetMapping ( value = "alunos/search/{nome}")
	public List<Aluno> findByName(@PathVariable String nome){
		//return this.alunoService.findByNome(nome);
		return this.alunoService.procurarPorNome(nome);
	}
	@GetMapping (value = "paginador")
	public Page<Aluno> paginacao(
			@RequestParam (value="pagina", defaultValue ="0") int pagina,
			@RequestParam (value="linhas", defaultValue ="5") int linhas
			) {
		return this.alunoService.paginacao(pagina, linhas);
		
	}
	
}

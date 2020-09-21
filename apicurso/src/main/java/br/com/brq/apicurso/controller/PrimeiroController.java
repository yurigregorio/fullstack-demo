package br.com.brq.apicurso.controller;

import java.util.ArrayList;

import javax.websocket.server.PathParam;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Aluno;

@RestController
public class PrimeiroController {
	
	ArrayList<Aluno> alunos = new ArrayList<>();

//	@GetMapping( value = "meu-primeiro-controller/{usuario}"  )
//	public Aluno meuPrimeiroController( @PathParam("manga") String manga, @PathVariable("usuario") String usuario) {
//		
//		System.out.println(manga);
//		System.out.println(usuario);
//		
//		Aluno meuAluno = new Aluno();
//		meuAluno.setNome("Fabrizio");
//		meuAluno.setRa("14006615");
//		
//		return meuAluno;
//	}
	
	@GetMapping (value = "meu-primeiro-controller")
	public ArrayList<Aluno> getAllAlunos() {
		return alunos;
	}
	
	@GetMapping ( value = "meu-primeiro-controller/{id}" )
	public Aluno getOneAluno( @PathVariable("id") int id  ) {
		
		return alunos.get(id);
	}
	
	@PostMapping ( value = "meu-primeiro-controller" )
	public void create( @RequestBody Aluno aluno ) {
		
		System.out.println("POST " + aluno );
		alunos.add( aluno );
	}
	
	@PatchMapping ( value = "meu-primeiro-controller/{id}" )
	public void update( @RequestBody Aluno aluno, @PathVariable("id") int id ) {
		alunos.set(id, aluno);
	}
}

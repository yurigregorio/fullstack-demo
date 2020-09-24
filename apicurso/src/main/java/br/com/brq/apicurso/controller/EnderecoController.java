package br.com.brq.apicurso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Endereco;
import br.com.brq.apicurso.model.Imagem;
import br.com.brq.apicurso.service.EnderecoService;

@RestController
@RequestMapping (value = "enderecos")
public class EnderecoController {
	
	@Autowired
	private EnderecoService enderecoService;
	
	@GetMapping 
	public List<Endereco> getAll() {
		return this.enderecoService.findAll();
	}
	
	@GetMapping (value = "{id}")
	public Endereco getOne(@PathVariable int id) {
		return this.enderecoService.getOne(id);
	}
	
	
	@PostMapping 
	public Endereco save(@RequestBody Endereco endereco){
		return this.enderecoService.save(endereco);
	}
	
	@PatchMapping (value = "{id}")
	public Endereco update(@RequestBody Endereco endereco, @PathVariable int id){
		return this.enderecoService.update(id, endereco);
	}
	
	@DeleteMapping (value = "{id}")
	public void delete(@PathVariable int id){
		this.enderecoService.delete(id);
	}
	
	@GetMapping (value = "paginador")
	public Page<Endereco> paginacao(
			@RequestParam (value="pagina", defaultValue ="0") int pagina,
			@RequestParam (value="linhas", defaultValue ="5") int linhas
			) {
		return this.enderecoService.paginacao(pagina, linhas);
		
	}

}

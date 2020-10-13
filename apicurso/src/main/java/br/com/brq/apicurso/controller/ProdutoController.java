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

import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.service.ProdutoService;

@RestController
@RequestMapping (value="produtos") //fica o começo do url
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;

	@GetMapping 
	public List<Produto> getAll() {
		return this.produtoService.findAll();
	}
	
	@GetMapping (value = "{id}")
	public Produto getOne(@PathVariable int id) {
		return this.produtoService.getOne(id);
	}
	
	
	@PostMapping 
	public Produto save(@RequestBody Produto produto){
		return this.produtoService.save(produto);
	}
	
	@PatchMapping (value = "{id}")
	public Produto update(@RequestBody Produto produto, @PathVariable int id){
		return this.produtoService.update(id, produto);
	}
	
	@DeleteMapping (value = "{id}")
	public void delete(@PathVariable int id){
		this.produtoService.delete(id);
	}
	
	@GetMapping (value = "paginador/produtos")
	public Page<Produto> paginacao(
			@RequestParam (value="pagina", defaultValue ="0") int pagina,
			@RequestParam (value="linhas", defaultValue ="5") int linhas
			) {
		return this.produtoService.paginacao(pagina, linhas);
		
	}
}

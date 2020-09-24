package br.com.brq.apicurso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Produto;

import br.com.brq.apicurso.service.ProdutoService;

@RestController
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;

	@GetMapping ( value="produtos")
	public List<Produto> getAll() {
		return this.produtoService.findAll();
	}
	
	@GetMapping (value = "produtos/{id}")
	public Produto getOne(@PathVariable int id) {
		return this.produtoService.getOne(id);
	}
	
	
	@PostMapping (value = "produtos")
	public Produto save(@RequestBody Produto produto){
		return this.produtoService.save(produto);
	}
	
	@PatchMapping (value = "produtos/{id}")
	public Produto update(@RequestBody Produto produto, @PathVariable int id){
		return this.produtoService.update(id, produto);
	}
	
	@DeleteMapping (value = "produtos/{id}")
	public void delete(@PathVariable int id){
		this.produtoService.delete(id);
	}
}

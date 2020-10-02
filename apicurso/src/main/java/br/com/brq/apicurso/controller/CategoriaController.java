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

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.service.CategoriaService;

@RestController
public class CategoriaController {
	@Autowired
	private CategoriaService categoriaService;
	
	//lista todos os categorias
	@GetMapping(value = "categorias")
	public List<Categoria> getAll() {
		return this.categoriaService.findAll();
	}
	
	//lista um categoria, pelo id
	@GetMapping(value="categorias/{id}")
	public Categoria getOne(@PathVariable int id){
		return this.categoriaService.getOne(id);
	}	
	
	//inserindo um novo categoria
	@PostMapping(value="categorias")
	public Categoria create(@RequestBody Categoria categoria) {
		return this.categoriaService.save(categoria);
	}
	
	//alterando os dados de um categoria, pelo id
	@PatchMapping(value="categorias/{id}")
	public Categoria update(@RequestBody Categoria categoria, @PathVariable int id) {
		return this.categoriaService.update(id, categoria);
	}
	
	//deletando um categoria, pelo id
	@DeleteMapping(value="categorias/{id}")
	public void delete(@PathVariable int id) {
		this.categoriaService.delete(id);
	}
}
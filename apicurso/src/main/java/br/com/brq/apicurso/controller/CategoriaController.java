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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.service.CategoriaService;
import io.swagger.annotations.ApiOperation;

@RestController
public class CategoriaController {
	@Autowired
	private CategoriaService categoriaService;
	
	//lista todos os categorias
	@GetMapping(value = "categorias")
	@ApiOperation(value = "Retorna todas as categorias")
	public List<Categoria> getAll() {
		return this.categoriaService.findAll();
	}
	
	//lista um categoria, pelo id
	@GetMapping(value="categorias/{id}")
	@ApiOperation(value = "Retorna uma categoria específica")
	public Categoria getOne(@PathVariable int id){
		return this.categoriaService.getOne(id);
	}	
	
	//inserindo um novo categoria
	@PostMapping(value="categorias")
	@ApiOperation(value = "Cadastra uma nova categoria")
	public Categoria create(@RequestBody Categoria categoria) {
		return this.categoriaService.save(categoria);
	}
	
	//alterando os dados de um categoria, pelo id
	@PatchMapping(value="categorias/{id}")
	@ApiOperation(value = "Altera uma categoria existente")
	public Categoria update(@RequestBody Categoria categoria, @PathVariable int id) {
		return this.categoriaService.update(id, categoria);
	}
	
	//deletando um categoria,
	@DeleteMapping(value="categorias/{id}")
	@ApiOperation(value = "Deleta uma categoria")
	public void delete(@PathVariable int id) {
		this.categoriaService.delete(id);
	}
	
	@GetMapping (value = "categorias/pagination")
	public Page<Categoria> pagination( 
			@RequestParam (value = "pagina", defaultValue = "0") int pagina,
			@RequestParam (value = "linhas", defaultValue = "5" ) int linhas,
			@RequestParam (value = "busca", defaultValue = "") String busca
			){
		return this.categoriaService.pagination(pagina, linhas, busca);
	}
}
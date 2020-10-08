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

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.service.CategoriaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

@RestController
@RequestMapping (value = "categorias")
@Api(value = "Categoria")
public class CategoriaController {
	
	@Autowired
	private CategoriaService categoriaService;  

	@GetMapping
	@ApiOperation(value = "Retorna todas as categorias")
	public List<Categoria>  findAll() {
		return this.categoriaService.findAll();
	}
	
	@GetMapping ( value = "{id}" )
	public Categoria findById(@PathVariable int id) {
		return this.categoriaService.getOne(id);
	}
	
	@PostMapping
	public Categoria save( @RequestBody Categoria obj ) {
		return this.categoriaService.save(obj);
	}
	
	@PatchMapping (value = "{id}")
	public Categoria update(@RequestBody Categoria obj, @PathVariable int id ) {
		return this.categoriaService.update(id, obj);
	}
	
	@DeleteMapping (value = "{id}")
	public void deleteById(@PathVariable int id) {
		this.categoriaService.delete(id);
	}
	
	@GetMapping (value = "pagination")
	public Page<Categoria> pagination( 
			@RequestParam (value = "pagina", defaultValue = "0") int pagina,
			@RequestParam ( value = "linhas", defaultValue = "5" ) int linhas,
			@RequestParam ( value = "busca", defaultValue = "" ) String busca
			){
		return this.categoriaService.pagination(pagina, linhas, busca);
	}
}
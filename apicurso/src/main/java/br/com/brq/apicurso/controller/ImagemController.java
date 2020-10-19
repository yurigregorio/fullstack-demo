package br.com.brq.apicurso.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Imagem;

import br.com.brq.apicurso.service.ImagemService;


@RestController
@RequestMapping (value="imagens")
public class ImagemController {
	
	@Autowired
	private ImagemService imagemService;
	
	@GetMapping 
	public ResponseEntity<List<Imagem>> getAll() {
		return  ResponseEntity.ok().body( this.imagemService.findAll() ) ;
	}
	
	@GetMapping (value = "{id}")
	public Imagem getOne(@PathVariable int id) {
		return this.imagemService.getOne(id);
	}
	
	
	@PostMapping 
	public Imagem save(@RequestBody Imagem imagem){
		return this.imagemService.save(imagem);
	}
	
	@PatchMapping (value = "{id}")
	public Imagem update(@RequestBody Imagem imagem, @PathVariable int id){
		return this.imagemService.update(id, imagem);
	}
	
	@DeleteMapping (value = "{id}")
	public void delete(@PathVariable int id){
		this.imagemService.delete(id);
	}
	
	@GetMapping (value = "paginador")
	public Page<Imagem> paginacao(
			@RequestParam (value="pagina", defaultValue ="0") int pagina,
			@RequestParam (value="linhas", defaultValue ="5") int linhas
			) {
		return this.imagemService.paginacao(pagina, linhas);
		
	}
	

}

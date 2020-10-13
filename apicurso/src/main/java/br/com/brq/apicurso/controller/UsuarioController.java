package br.com.brq.apicurso.controller;


import java.util.List;
import java.util.stream.Collectors;

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

import br.com.brq.apicurso.dto.UsuarioDto;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.service.UsuarioService;

@RestController
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping (value = "usuarios")
	public ResponseEntity <List<UsuarioDto>> findAll(){
		List<Usuario> list = this.usuarioService.findAll();
		
		List<UsuarioDto> listDTO = list.stream().map( (objeto) -> new UsuarioDto(objeto)  ).collect(Collectors.toList());		
		
		return ResponseEntity.ok().body(listDTO);
	}
	
	@GetMapping (value = "usuarios/{id}")
	public Usuario findOne(@PathVariable int id){
		return this.usuarioService.findOne(id);
	}
	
	@PostMapping (value = "usuarios")
	public Usuario save(@RequestBody Usuario usuario){
		return this.usuarioService.save(usuario);
	}
	
	@PatchMapping (value = "usuarios/{id}")
	public Usuario update(@RequestBody Usuario usuario, @PathVariable int id){
		return this.usuarioService.update(id, usuario);
	}
	
	@DeleteMapping (value = "usuarios/{id}")
	public void delete(@PathVariable int id){
		this.usuarioService.delete(id);
	}

}
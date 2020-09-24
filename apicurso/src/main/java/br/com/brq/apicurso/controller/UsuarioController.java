package br.com.brq.apicurso.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.service.UsuarioService;

@RestController
@RequestMapping (value="usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping 
	public List<Usuario> findAll(){
		return this.usuarioService.findAll();
	}
	
	@GetMapping (value = "{id}")
	public Usuario findOne(@PathVariable int id){
		return this.usuarioService.findOne(id);
	}
	
	@PostMapping 
	public Usuario save(@RequestBody Usuario usuario){
		return this.usuarioService.save(usuario);
	}
	
	@PatchMapping (value = "{id}")
	public Usuario update(@RequestBody Usuario usuario, @PathVariable int id){
		return this.usuarioService.update(id, usuario);
	}
	
	@DeleteMapping (value = "{id}")
	public void delete(@PathVariable int id){
		this.usuarioService.delete(id);
	}
	
	
}

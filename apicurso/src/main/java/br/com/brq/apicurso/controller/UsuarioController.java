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

import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.service.UsuarioService;

@RestController
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping (value = "usuarios")
	public List<Usuario> findAll(){
		return this.usuarioService.findAll();
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

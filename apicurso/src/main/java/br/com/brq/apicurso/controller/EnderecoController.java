package br.com.brq.apicurso.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.dto.EnderecoDto;
import br.com.brq.apicurso.model.Endereco;
import br.com.brq.apicurso.service.EnderecoService;

@RestController
@RequestMapping("enderecos")
public class EnderecoController {
	
	@Autowired
	private EnderecoService enderecoService;
	
	@GetMapping("/consultarEnderecos")
	public List<Endereco> consultarEnderecos() {
		return this.enderecoService.consultarEnderecos();
	}

	@GetMapping("/consultarEnderecoId/{id}")
	public Optional<Endereco> consultarEnderecoId(@PathVariable int id) {
		return this.enderecoService.consultarEnderecoId(id);
	}

	@PostMapping("/usuario")
	public Endereco inserirEndereco(@RequestBody Endereco endereco) {
		System.out.println(endereco);
		return this.enderecoService.inserirEndereco(endereco);
		
	}

	@PatchMapping("/alterarEndereco/{id}")
	public Endereco alterarEndereco(@PathVariable int id, @RequestBody Endereco endereco) {
		return this.enderecoService.alterarEndereco(id, endereco);
	}

	@DeleteMapping("/deletarEndereco/{id}")
	public String deletarEndereco(@PathVariable int id) {
		return this.enderecoService.deletarEndereco(id);
	}
	
	
	

}
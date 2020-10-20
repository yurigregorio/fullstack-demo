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
import br.com.brq.apicurso.model.ItemVenda;
import br.com.brq.apicurso.service.ItemVendaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping (value = "itemVenda")
@Api(value = "Item Venda")
public class ItemVendaController {
	
	@Autowired
	private ItemVendaService itemVendaService;  
	
	@GetMapping
	@ApiOperation(value = "Retorna todas os itens da lista")
	public List<ItemVenda>  findAll() {
		return this.itemVendaService.findAll();
	}
	
	@GetMapping ( value = "{id}" )
	@ApiOperation(value = "Retorna uma venda específica pelo ID")
	public ItemVenda findById(@PathVariable int id) {
		return this.itemVendaService.getOne(id);
	}
	
	@PostMapping
	@ApiOperation(value = "Salve um item de venda")
	public ItemVenda save( @RequestBody ItemVenda obj ) {
		return this.itemVendaService.save(obj);
	}
	
	
	@PatchMapping (value = "{id}")
	@ApiOperation(value = "Atualiza o item de venda")
	public ItemVenda update(@RequestBody ItemVenda obj, @PathVariable int id ) {
		return this.itemVendaService.update(id, obj);
	}
	
	@DeleteMapping (value = "{id}")
	@ApiOperation(value = "Deletar um item de venda")
	public void deleteById(@PathVariable int id) {
		this.itemVendaService.delete(id);
	}
	
	@GetMapping (value = "pagination")
	public Page<ItemVenda> pagination( 
			@RequestParam (value = "pagina", defaultValue = "0") int pagina,
			@RequestParam ( value = "linhas", defaultValue = "5" ) int linhas,
			@RequestParam ( value = "busca", defaultValue = "" ) String busca
			){
		return this.itemVendaService.pagination(pagina, linhas, busca);
	}
	
	
}

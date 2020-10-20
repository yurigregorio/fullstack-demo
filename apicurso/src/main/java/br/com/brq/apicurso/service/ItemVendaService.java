package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import br.com.brq.apicurso.model.ItemVenda;
import br.com.brq.apicurso.repository.ItemVendaRepository;

@Service
public class ItemVendaService {
	
	@Autowired
	private ItemVendaRepository itemVendaRepository;
	
	
 	public List<ItemVenda> findAll(){
 		return this.itemVendaRepository.findAll();
 	}
 	
	public ItemVenda getOne(int id) {
		return this.itemVendaRepository.findById(id).get();
	}

	public ItemVenda save(ItemVenda itemVenda) {
		return this.itemVendaRepository.save(itemVenda);
	}
 	
	public ItemVenda update(int id, ItemVenda itemVenda) {
		Optional<ItemVenda> a = this.itemVendaRepository.findById(id);
		ItemVenda update = null;

		if (a.isPresent()) {
			update = a.get();

			update.setProduto(itemVenda.getProduto());
			update.setVenda(itemVenda.getVenda());
			update.setQuantidade(itemVenda.getQuantidade());

			update = this.itemVendaRepository.save(update);
		}
		return update;
	}

	public void delete(int id) {
		this.itemVendaRepository.deleteById(id);
	}
	
	public Page<ItemVenda> pagination(int pagina, int qtdeLinhas, String busca){
		PageRequest pageRequest = PageRequest.of(pagina, qtdeLinhas);

		return this.itemVendaRepository.findAll(pageRequest);
	}
}

package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.repository.CategoriaRepository;

@Service
public class CategoriaService {
	// Instanciar o objeto automaticamente
	@Autowired
	private CategoriaRepository categoriaRepository;

	public List<Categoria> findAll() {
		return this.categoriaRepository.findAll();
	}

	public Categoria getOne(int id) {
		return this.categoriaRepository.findById(id).get();
	}

	public Categoria save(Categoria categoria) {
		return this.categoriaRepository.save(categoria);
	}

	public Categoria update(int id, Categoria categoria) {
		Optional<Categoria> a = this.categoriaRepository.findById(id);
		Categoria update = null;

		if (a.isPresent()) {
			update = a.get();

			update.setNome(categoria.getNome());
			update.setDescricao(categoria.getDescricao());

			update = this.categoriaRepository.save(update);
		}
		return update;
	}

	public void delete(int id) {
		this.categoriaRepository.deleteById(id);
	}
}
package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Aluno;
import br.com.brq.apicurso.model.Imagem;
import br.com.brq.apicurso.repository.AlunoRepository;

@Service
public class AlunoService {

	@Autowired
	private AlunoRepository alunoRepository;
	
	public List<Aluno> findAll(){
		return this.alunoRepository.findAll();
	}
	
	public Aluno getOne(int id) {
		return this.alunoRepository.findById(id).orElse( new Aluno() );		
	}
	
	public Aluno save(Aluno aluno) {
		return this.alunoRepository.save(aluno);
	}
	
	public void delete (int id) {
		this.alunoRepository.deleteById(id);
	}
	
	public Aluno update(int id, Aluno aluno) {
		Optional<Aluno> optionalAluno = this.alunoRepository.findById(id);
		Aluno update = null;
		
		if (optionalAluno.isPresent()) {
			
			update = optionalAluno.get();
			
			update.setNome(aluno.getNome());
			update.setRa(aluno.getRa());
			
			update = this.alunoRepository.save(update);			
		}
		return update;
	}
	
	public List<Aluno> findByNome(String nome){
		return this.alunoRepository.findByNomeContains(nome);
	}
	
	public List<Aluno> procurarPorNome(String nome){
		return this.alunoRepository.procurarPorNome(nome);
	}
	
	public Page<Aluno> paginacao(int pagina, int linhas){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		
		return this.alunoRepository.findAll(pageRequest);
	}
}

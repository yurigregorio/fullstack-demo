package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Aluno;
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
}

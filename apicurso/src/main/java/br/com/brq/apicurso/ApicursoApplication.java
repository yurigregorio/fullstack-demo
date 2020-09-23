package br.com.brq.apicurso;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.repository.CategoriaRepository;
import br.com.brq.apicurso.repository.ProdutoRepository;
import br.com.brq.apicurso.repository.UsuarioRepository;

@SpringBootApplication
public class ApicursoApplication implements CommandLineRunner {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private ProdutoRepository produtoRepository; 

	public static void main(String[] args) {
		SpringApplication.run(ApicursoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		//Usuario u = new Usuario(0,"Usuario 1", "123456", "usuario@usuario.com" );
//		Usuario u = Usuario.builder()
//				.nome("Usuário 2")
//				.email("usuario@usuario.com")
//				.senha("123456")
//				.build();		
//		
//		u = this.usuarioRepository.save(u);
//		
//		System.out.println(u);
		
		//Inserindo primeiro a categoria
		Categoria cat1 = Categoria.builder().nome("Eletrodoméstico").descricao("Eletrodoméstico").build();		
		cat1 = this.categoriaRepository.save(cat1);
		
		//inserindo o produto
		Produto prod1 = Produto.builder()
				.categoria_id(cat1)
				.nome("Geladeira")
				.descricao("Geladeira")
				.preco(2500)
				.build();
		
		this.produtoRepository.save(prod1);
		
	}

}

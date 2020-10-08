package br.com.brq.apicurso.model.enums;

public enum Perfil {

	//NO ADMIN, podemos colocar id, descricao
//	public final static int ADMIN = 1;
//	public static int CLIENTE = 2;
//	public static int MARKETING = 3;
	
	ADMIN(1,"ROLE_ADMIN"),
	CLIENTE (2,"ROLE_CLIENTE");
	
	private int codigo;
	private String descricao;
	
	private Perfil(int codigo, String descricao ) {
		this.codigo = codigo;
		this.descricao = descricao;
	}
	
	public Perfil toEnum(int codigo) {
				
		for (Perfil p : Perfil.values() ) {
			if (p.getCodigo() == codigo) {
				return p;
			}
		}
		
		return null;
	}

	public int getCodigo() {
		return codigo;
	}

	public String getDescricao() {
		return descricao;
	}
	
}
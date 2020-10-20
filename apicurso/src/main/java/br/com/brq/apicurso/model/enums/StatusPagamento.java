package br.com.brq.apicurso.model.enums;

public enum StatusPagamento {
	
	Pago (0, "pago"),
	Cancelado (1, "cancelado"),
	Aguardando (2, "aguardando");
	
	private int status;
	private String descricao;
	
	StatusPagamento(int status,  String descricao) {
		this.status = status;
		this.descricao = descricao;
	}
	
	public int getStatus() {
		return this.status;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	public static StatusPagamento getStatusPagamento(int id){
        
        for (StatusPagamento tc : StatusPagamento.values()) {
            if (tc.status == id){                
                return tc;
            }
        }
        return null;        
    }
	
}

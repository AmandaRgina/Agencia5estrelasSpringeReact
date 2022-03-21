package com.Agencia5estrelasSpringtool.crm.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Promocoes {

	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	private Long id_promocoes;
	private String lugar_promocoes;
	private Float valor_promocoes;
	
	public Long getId_promocoes() {
		return id_promocoes;
	}
	public void setId_promocoes(Long id_promocoes) {
		this.id_promocoes = id_promocoes;
	}
	public String getLugar_promocoes() {
		return lugar_promocoes;
	}
	public void setLugar_promocoes(String lugar_promocoes) {
		this.lugar_promocoes = lugar_promocoes;
	}
	public Float getValor_promoocoes() {
		return valor_promocoes;
	}
	public void setValor_promoocoes(Float valor_promocoes) {
		this.valor_promocoes = valor_promocoes;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id_promocoes, lugar_promocoes, valor_promocoes);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Promocoes other = (Promocoes) obj;
		return Objects.equals(id_promocoes, other.id_promocoes)
				&& Objects.equals(lugar_promocoes, other.lugar_promocoes)
				&& Objects.equals(valor_promocoes, other.valor_promocoes);
	}
	@Override
	public String toString() {
		return "Promocoes [id_promocoes=" + id_promocoes + ", lugar_promocoes=" + lugar_promocoes
				+ ", valor_promocoes=" + valor_promocoes + "]";
	}
	
	
	
}

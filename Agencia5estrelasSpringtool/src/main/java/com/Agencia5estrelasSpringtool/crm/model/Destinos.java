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
public class Destinos {
	
	@Id
	@GeneratedValue (strategy=GenerationType.IDENTITY)
	private Long id_destinos;
	private String lugar;
	private Float valor;
	
	
	public Long getId() {
		return id_destinos;
	}
	public void setId(Long id_destinos) {
		this.id_destinos = id_destinos;
	}
	public String getLugar() {
		return lugar;
	}
	public void setLugar(String lugar) {
		this.lugar = lugar;
	}
	public Float getValor() {
		return valor;
	}
	public void setValor(Float valor) {
		this.valor = valor;
	}
	@Override
	public String toString() {
		return "Destinos [id_destinos=" + id_destinos + ", lugar=" + lugar + ", valor=" + valor + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(id_destinos, lugar, valor);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destinos other = (Destinos) obj;
		return Objects.equals(id_destinos, other.id_destinos) && Objects.equals(lugar, other.lugar) && Objects.equals(valor, other.valor);
	}

}

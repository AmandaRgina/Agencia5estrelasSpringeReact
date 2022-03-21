package com.Agencia5estrelasSpringtool.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Agencia5estrelasSpringtool.crm.model.Destinos;

public interface DestinosRepository extends JpaRepository<Destinos, Long>{
	
	Destinos findById(long id_destinos);
	void deleteById(long id_destinos);
}

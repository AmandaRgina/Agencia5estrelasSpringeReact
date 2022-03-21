package com.Agencia5estrelasSpringtool.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Agencia5estrelasSpringtool.crm.model.Cliente;


@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	Cliente findById(long id);

	void deleteById(Long id);
	


	
	
	
	
	

}

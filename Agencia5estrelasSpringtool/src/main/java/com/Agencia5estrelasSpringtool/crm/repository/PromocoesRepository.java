package com.Agencia5estrelasSpringtool.crm.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.Agencia5estrelasSpringtool.crm.model.Promocoes;



	
	public interface PromocoesRepository extends JpaRepository<Promocoes, Long>{
		
		Promocoes findById(long id_promocoes);
		void deleteById(long id_promocoes);
	}

package com.Agencia5estrelasSpringtool.crm.controllers;




import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.Agencia5estrelasSpringtool.crm.model.Cliente;
import com.Agencia5estrelasSpringtool.crm.repository.ClienteRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
@RequestMapping("/clientes")
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;
	
	
	
	@GetMapping
	public List<Cliente> listar(){
		
		return clienteRepository.findAll();
		
		
	
	}
	
	@GetMapping("/{id}")
	
	public Cliente encontrarId (@PathVariable(value="id") long id){
		
		return  clienteRepository.findById(id);
		
	
	} 
	
	
	//@RequestBody - o corpo da requisição Json será convertido para o tipo Cliente
	
	@PostMapping("/cadastro")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente adicionar (@RequestBody Cliente cliente) {
		
		return clienteRepository.save(cliente);
	}
	
	@PutMapping("/atualizar/{id}") //update
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente atualizar (@RequestBody Cliente cliente,  @PathVariable long id ) {
		
		cliente.setId(id);
		return clienteRepository.save(cliente);
		
		
	}
	
	@DeleteMapping("/deletar/{id}") //

	public void deletar (Cliente cliente, @PathVariable long id ) {
		
		clienteRepository.deleteById(id);
		
		
		
	} 
	
	
	
	
	
	
}

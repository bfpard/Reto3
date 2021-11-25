package Reto3.Api.Service;

import Reto3.Api.Entity.Person;
import Reto3.Api.Repository.PersonRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
    
    @Autowired
    PersonRepository personRepository;
    
    public List<Person> list(){
        return personRepository.findAll();
    }
    
    public Long countId(){
        return personRepository.count();
    }
    
    public Optional<Person> getId(Long id){
        return personRepository.findById(id);
    }
    
    public Optional<Person> getByName(String fullName){
        return personRepository.findByFullName(fullName);
    }
    
    public void save (Person person){
        personRepository.save(person);
    }
    
    public void delete(Long id){
        
        personRepository.deleteById(id);
        
    }
    
    public boolean existsByFullName(String fullName){
        return personRepository.existsByFullName(fullName);
    }
    
    public boolean existsById(Long id){
        return personRepository.existsById(id);
    }
}

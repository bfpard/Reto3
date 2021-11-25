package Reto3.Api.Controller;

import Reto3.Api.Dto.message;
import Reto3.Api.Entity.Person;
import Reto3.Api.Service.PersonService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/")
public class PersonController {
    
    @Autowired
    PersonService personService;
    
    @GetMapping("/list")
    public ResponseEntity<List<Person>> list(){
        List<Person> list =personService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/find/{id}")
    public ResponseEntity<Person> getById(@PathVariable("id") Long id){
        if(!personService.existsById(id))
            return new ResponseEntity(new message("Not exist"),HttpStatus.NOT_FOUND);
        
        Person person = personService.getId(id).get();
        return new ResponseEntity(person,HttpStatus.FOUND);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Person person){
        Long setId = personService.countId();
        while(personService.existsById(setId)){
            setId += 1;
        }
        person.id = setId;
        personService.save(person);
        return new ResponseEntity(new message("Person Created"),HttpStatus.CREATED);
    }
    
    @PutMapping("/edit/{id}")
    public ResponseEntity<?> update(@PathVariable("id")Long id, @RequestBody Person person){
        Person person2 = personService.getId(id).get();
        person2.fullName = person.fullName;
        person2.birth = person.birth;
        personService.save(person2);
        return new ResponseEntity(new message("Person Updated"), HttpStatus.UPGRADE_REQUIRED);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")Long id){
        if(!personService.existsById(id))
            return new ResponseEntity(new message("Not exists"), HttpStatus.NOT_FOUND);
        personService.delete(id);
        return new ResponseEntity(new message("Deleted"), HttpStatus.OK);
    }
}

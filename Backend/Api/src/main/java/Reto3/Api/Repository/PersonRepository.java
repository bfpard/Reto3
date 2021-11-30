
package Reto3.Api.Repository;

import Reto3.Api.Entity.Person;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Integer>{
    
    Optional<Person> findByFullName(String fullName);
    boolean existsByFullName(String fullName);
    
    boolean existsById(int id);
}


package Reto3.Api.Repository;

import Reto3.Api.Entity.Person;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Long>{
    
    Optional<Person> findByFullName(String fullName);
    boolean existsByFullName(String fullName);
    @Override
    boolean existsById(Long id);
}

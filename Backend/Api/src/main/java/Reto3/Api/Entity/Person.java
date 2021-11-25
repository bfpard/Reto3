
package Reto3.Api.Entity;

import java.sql.Date;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name = "person")
public class Person {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long id;
    
    @Column(name = "full_name")
    @NotNull
    public String fullName;
    
    @Column(name = "birth")
    @NotNull
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    public Date birth;

    public Person() {
    }

    public Person(Long id, String fullName, Date birth) {
        this.id = id;
        this.fullName = fullName;
        this.birth = birth;
    }
    
    
}

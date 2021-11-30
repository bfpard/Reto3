
package Reto3.Api.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    public int id;
    
    @Column(name = "full_name")
    @NotNull
    public String fullName;
    
    @Column(name = "birth")
    @NotNull
    @DateTimeFormat
    public Date birth;

    public Person() {
    }
    
    public Person(int id, String fullName, Date birth) {
        this.id = id;
        this.fullName = fullName;
        this.birth = birth;
    }
    
    
}

package school.sptech.AcervoTech;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/livros")
public class LivroController {

    private final JdbcTemplate template;

    public LivroController(JdbcTemplate template) {
        this.template = template;
    }

    @PostMapping
    public ResponseEntity<Livro> cadastrarLivro(@RequestBody Livro livro){
        if (
                livro.getTitulo() == null ||
                        livro.getTitulo().isBlank() ||
                        livro.getAutor() == null ||
                        livro.getAutor().isBlank() ||
                        livro.getCategoria() == null ||
                        livro.getCategoria().isBlank() ||
                        livro.getQuantidade() == null ||
                        livro.getQuantidade() < 0
        ) {
            return ResponseEntity.status(400).build();
        }

        String sql = """
                INSERT INTO livro (
                titulo,
                autor,
                categoria,
                quantidade)
                VALUES (?, ?, ?, ?)
                """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );

            statement.setString(1, livro.getTitulo());
            statement.setString(2, livro.getAutor());
            statement.setString(3, livro.getCategoria());
            statement.setInt(4, livro.getQuantidade());

            return statement;

        }, keyHolder);

        livro.setId(keyHolder.getKey().intValue());

        return ResponseEntity.status(201).body(livro);
    }

    @GetMapping
    public ResponseEntity<List<Livro>> listarLivro() {
        String sql = "SELECT * FROM livro";

        List<Livro> livros = template.query(
                sql,
                new BeanPropertyRowMapper<>(Livro.class)
        );

        return ResponseEntity.status(201).body(livros);
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<List<Livro>> buscarPorCategoria(@PathVariable String categoria) {
        String sql = "SELECT * FROM livro WHERE categoria = ?";

        List<Livro> livros = template.query(
                sql,
                new BeanPropertyRowMapper<>(Livro.class),
                categoria
        );

        return ResponseEntity.status(201).body(livros);
    }
}

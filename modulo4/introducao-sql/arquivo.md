# Exercício 1

## A - 
<ul>
<li>id = Varchar(string) com no máximo 255 caracteres e key primaria</li>
<li>name = Varchar(string) com no máximo 255 caracteres e não pode ser nulo</li>
<li>salary = Float(pode ser número não inteiro) e não pode ser nulo</li>
<li>birth_date = Date(formato de data) e não pode ser nulo</li>
<li>gender = Varchar(string) com no máximo 6 caracteres e não pode ser nulo</li>
</ul>

## B -
<ul>
<li>SHOW DATABASES = mostra o data base que eu utilizo</li>
<li>SHOW TABLES = mostra as tabelas criadas naquele</li>
</ul>

## C -
<ul>
<li>DESCRIBE Actor = mostra as informações sobre a tabela, suas opções, se aceitam valores nulos ou não</li>
</ul>

# Exercício 2 

## A

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

## B 

<ul>
<li>Ele da um erro falando que a key está repetida,key primária não pode se repetir dentro da mesma tabela.</li>
</ul>
# Exercício 2 
## B 

<ul>
<li>Ele da um erro falando que a key está repetida,key primária não pode se repetir dentro da mesma tabela.</li>
</ul>

# Exercício 3
## A

```
SELECT * FROM Actor WHERE gender = "female"
```

## B

```
SELECT salary FROM Actor WHERE gender = "male"
```

## C

```
SELECT * FROM Actor WHERE gender = invalid
```
<ul>
<li>Não é encontrado nenhum ator, pois a informação "GENDER" é definida para não ser nula.</li>
</ul>

## D

```
SELECT id, name, salary FROM Actor WHERE salary <= 500000
```

## E

```
SELECT id, name from Actor WHERE id = "002"
```
<ul>
<li>O erro se dá pois não existe nenhuma informação com "NOME" e sim com "NAME"</li>
</ul>

# 4

## A

<p>A query busca apenas atores que os nomes comecem com A ou J, e, também, tenham salário acima de 300.000 </p>

## B

```
SELECT * FROM Actor
WHERE name NOT LIKE "T%" AND salary > 350000
```

## C

```
SELECT * FROM Actor
WHERE name  LIKE "%g%"
```

## D

```
SELECT * FROM Actor
WHERE name  LIKE "%g%" OR name LIKE "%a%" AND salary BETWEEN 350000 AND 900000
```

# 5

## A

<ul>
<li>O tipo TEXT já é alto explicativo, quando não se tem muito controle dos caracteres e sabe que será razoavelmente grande, usa-se TEXT</li>
</ul>

# 6 

## A

```
SELECT id, title, rating FROM Movie
WHERE rating LIKE "9";
```

## B

```
SELECT * FROM Movie
WHERE title LIKE "%Sniper Americano%";
```

## C

```
SELECT id, title, synopsis FROM Movie
WHERE rating >= 7;
```

# 7

## A

```
SELECT * FROM Movie
WHERE title  LIKE "%vida%";
```

## B

```
SELECT * FROM Movie
WHERE title OR synopsis LIKE "%vida%";
```

## C

```
SELECT * FROM Movie
```

## D

````
SELECT * FROM Movie
WHERE title OR synopsis LIKE "%vida%" AND rating > 7;
```
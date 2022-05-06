# 1

## A

<p>As repostas quando usamos o RAW vem com o resultado das querry e outras informações que não queremos, por isso, puxamos o result [0]</p>

## B

```
const buscaActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}
```

## C

```
const countActor = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
  `);
    return result[0][0].count;
};
```

# 2

## A

```
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

## B

```
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
```

## C

```
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg()
    .where({ gender });

  return result[0].average;
};
```

# 3

## A

```
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

## B

```
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

# 4

## A 

```
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Salário atualizado",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

## B

```
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
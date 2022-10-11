-- CREAR TABLA (PALCOS)
CREATE TABLE ADMIN.BOX (
	ID NUMBER,
    LOCATION VARCHAR2(20),
    CAPACITY NUMBER,
	CATEGORY_ID NUMBER,
    NAME VARCHAR2(400),
    CONSTRAINT BOX_ID_PK PRIMARY KEY(ID)
);


-- MANEJADOR GET
SELECT * FROM BOX ORDER BY ID;


-- MANEJADOR POST
BEGIN
    INSERT INTO BOX (ID, LOCATION, CAPACITY, CATEGORY_ID, NAME)
    VALUES (:id, :location, :capacity, :category_id, :name);
    :status_code := 201;
END;


-- MANEJADOR PUT
BEGIN
    UPDATE BOX 
    SET 
        LOCATION = :location,
        CAPACITY = :capacity,
        CATEGORY_ID = :category_id,
        NAME = :name
    WHERE
        ID = :id;
    :status_code := 201;
END;


-- MANEJADOR DELETE
BEGIN
    DELETE FROM BOX WHERE ID = :id;
    :status_code := 204;
END;


-- MANEJADOR GET :id
SELECT * FROM BOX WHERE ID = :id;


-- VACIAR TABLA
TRUNCATE TABLE BOX;
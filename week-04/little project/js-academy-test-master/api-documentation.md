# TODO API Documentation

## TODO Item

A single TODO item has an `_id`, a `description` and a `state`.

 -  the `_id` is a MongoDB ObjectId value
 -  the `description` is a string
 -  the `state` is an integer, `0` represents not done while `1` means done

## GET /api/todos

It returns a JSON document with a list of [TODO item](#todo-item)s.

### Example Request

An example request to `/api/todos` endpoint.

 -  Headers

    | Header | Value            |
    | ------ | ---------------- |
    | accept | application/json |

### Example Response 1

If no error occurs.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    200 *- OK*

 -  Body
    ```JSON
    {
      "todos": [
        {
          "_id": "59b8fdc2063586df3ef75ef6",
          "description": "Read the Clean Code",
          "state": 0
        },
        {
          "_id": "59bcfc96932b7ab0c98e9e27",
          "description": "Drink beer",
          "state": 1
        }
      ]
    }
    ```

### Example Response 2

If any error occurs during the process.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    500 *- Internal Server Error*

 -  Body
    ```JSON
    {
      "error": "Something went wrong."
    }
    ```

## GET /api/todos/:id

It returns a JSON document containing a single [TODO item](#todo-item)

### Example Request

An example request to `/api/todos/59b8fdc2063586df3ef75ef6` endpoint.

 -  Headers

    | Header | Value            |
    | ------ | ---------------- |
    | accept | application/json |

### Example Response 1

If no error occurs.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    200 *- OK*

 -  Body
    ```JSON
    {
     "_id": "59b8fdc2063586df3ef75ef6",
     "description": "Read the Clean Code",
     "state": 0
    }
    ```

### Example Response 2

If the requested id does not match any.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    404 *- Not Found*

 -  Body
    ```JSON
    {
      "error": "Resource was not found."
    }
    ```

### Example Response 2

If any other error occurs.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    500 *- Internal Server Error*

 -  Body
    ```JSON
    {
      "error": "Something went wrong."
    }
    ```

## POST /api/todos

It creates a new TODO item.

### Example Request

-  Headers

   | Header       | Value            |
   | ------------ | ---------------- |
   | content-type | application/json |

-  Body
   ```JSON
   {
    "description": "Finish the exercises"
   }
   ```

### Example Response 1

If no error occurs.

-  Headers

   | Header       | Value                               |
   | ------------ | ----------------------------------- |
   | location     | /api/todos/59be13f3932b7ab0c98e9e28 |

 -  Status Code

    201 *- Created*

### Example Response 2

If the request body contains other fields then the required.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    400 *- Bad Request*

-  Body
   ```JSON
   {
    "error": "Bad request body."
   }
   ```

### Example Response 3

If any other error occurs.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    500 *- Internal Server Error*

 -  Body
    ```JSON
    {
      "error": "Something went wrong."
    }
    ```

## PUT /api/todos/:id

### Example Request

An example request to `/api/todos/59b8fdc2063586df3ef75ef6` endpoint.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Body
    ```JSON
    {
     "_id": "59b8fdc2063586df3ef75ef6",
     "description": "Read the Clean Code",
     "state": 1
    }
    ```

### Example Response

If no error occurs.

 -  Headers

    | Header           | Value                               |
    | ---------------- | ----------------------------------- |
    | content-location | /api/todos/59b8fdc2063586df3ef75ef6 |

 -  Status Code

    204 *- No Content*

### Example Response 2

If the requested id does not match any.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

     -  Status Code

    404 *- Not Found*

 -  Body
    ```JSON
    {
      "error": "Resource was not found."
    }
    ```

### Example Response 3

If any other error occurs.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    500 *- Internal Server Error*

 -  Body
    ```JSON
    {
      "error": "Something went wrong."
    }
    ```

## DELETE /api/todos/:id

### Example Request

An example request to `/api/todos/59b8fdc2063586df3ef75ef6` endpoint.

### Example Response 1

If the resource was deleted Successfully.

 -  Status Code

    204 *- No Content*

### Example Response 2

If the requested id does not match any.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    404 *- Not Found*

 -  Body
    ```JSON
    {
      "error": "Resource was not found."
    }
    ```

### Example Response 3

If any other error occurs.

 -  Headers

    | Header       | Value            |
    | ------------ | ---------------- |
    | content-type | application/json |

 -  Status Code

    500 *- Internal Server Error*

 -  Body
    ```JSON
    {
      "error": "Something went wrong."
    }
    ```
